import React, { useState } from "react";
import axios from "axios";
import "./Add.css";

const MovieManager = () => {
  const [activeForm, setActiveForm] = useState("add");
  const [movieData, setMovieData] = useState({
    name: "",
    title: "",
    price: "",
    image: null,
    addedTime: "",
  });

  const [deleteMovie, setDeleteMovie] = useState("");
  const [preview, setPreview] = useState(null);
  const [imageAdded, setImageAdded] = useState(false);

  const handleChange = (e) => {
    setMovieData({ ...movieData, [e.target.name]: e.target.value });
  };

  const handleDeleteChange = (e) => {
    setDeleteMovie(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setMovieData({ ...movieData, image: file });

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      setImageAdded(true);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!movieData.name || !movieData.title || !movieData.price || !movieData.image || !movieData.addedTime) {
      alert("Please fill all fields!");
      return;
    }

    const formData = new FormData();
    formData.append("name", movieData.name);
    formData.append("title", movieData.title);
    formData.append("price", movieData.price);
    formData.append("image", movieData.image);
    formData.append("addedTime", movieData.addedTime);

    try {
      await axios.post("http://localhost:8083/api/movies", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Movie added successfully!");
      setMovieData({ name: "", title: "", price: "", image: null, addedTime: "" });
      setPreview(null);
      setImageAdded(false);
    } catch (error) {
      console.error("Error adding movie:", error);
      alert("Failed to add movie!");
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    if (!deleteMovie) {
      alert("Enter movie name to delete!");
      return;
    }

    try {
      await axios.delete(`http://localhost:8083/api/movies/${deleteMovie}`);
      alert("Movie deleted successfully!");
      setDeleteMovie("");
    } catch (error) {
      console.error("Error deleting movie:", error);
      alert("Failed to delete movie!");
    }
  };

  return (
    <div className="movie-container">
      <div className="button-group">
        <button className={`toggle-button ${activeForm === "add" ? "active" : ""}`} onClick={() => setActiveForm("add")}>
          Add Movie
        </button>
        <button className={`toggle-button ${activeForm === "delete" ? "active" : ""}`} onClick={() => setActiveForm("delete")}>
          Delete Movie
        </button>
      </div>

      {activeForm === "add" && (
        <div className={`movie-form-container ${imageAdded ? "expand" : ""}`}>
          <h2>Add New Movie</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Movie Name:</label>
              <input type="text" name="name" value={movieData.name} onChange={handleChange} placeholder="Enter movie name" required />
            </div>

            <div className="form-group">
              <label>Movie Title:</label>
              <input type="text" name="title" value={movieData.title} onChange={handleChange} placeholder="Enter movie title" required />
            </div>

            <div className="form-group">
              <label>Price (Rs):</label>
              <input type="number" name="price" value={movieData.price} onChange={handleChange} placeholder="Enter price" required />
            </div>

            <div className="form-group">
              <label>Upload Image:</label>
              <input type="file" accept="image/*" onChange={handleImageChange} required />
              {preview && <img src={preview} alt="Preview" className="preview-img" />}
            </div>

            <div className="form-group">
              <label>Added Time:</label>
              <input type="datetime-local" name="addedTime" value={movieData.addedTime} onChange={handleChange} required />
            </div>

            <button type="submit" className="submit-button">Add Movie</button>
          </form>
        </div>
      )}

      {activeForm === "delete" && (
        <div className="movie-form-container">
          <h2>Delete Movie</h2>
          <form onSubmit={handleDelete}>
            <div className="form-group">
              <label>Enter Movie Name:</label>
              <input type="text" value={deleteMovie} onChange={handleDeleteChange} placeholder="Movie name" required />
            </div>
            <button type="submit" className="delete-button">Delete Movie</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MovieManager;
