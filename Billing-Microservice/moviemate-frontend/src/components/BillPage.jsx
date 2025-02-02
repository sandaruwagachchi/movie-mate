import { useState } from 'react';

const BillPage = () => {


    const [bill, setBill] = useState({
        name: '',
        filmName: '',
        seatNo: '',
        phone: '',
        total: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBill((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:8084/bills', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(bill)
            });

            if (response.ok) {
                const result = await response.json();
                alert(`Bill created with ID: ${result.id}`)

                // Reset form after successful submission
                setBill({
                    name: '',
                    filmName: '',
                    seatNo: '',
                    phone: '',
                    total: ''
                });

            } else {
                alert('Failed to create Bill');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred');
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-red-50 py-10">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-semibold text-center mb-6"><span className='text-red-600 font-bold'>MovieMate Bill</span></h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={bill.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Movie Name</label>
                        <input
                            type="text"
                            name="filmName"
                            value={bill.filmName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Seat Number</label>
                        <input
                            type="number"
                            name="seatNo"
                            value={bill.seatNo}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='phone' className="block text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={bill.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700">Total</label>
                        <input
                            type="number"
                            name="total"
                            value={bill.total}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BillPage;
