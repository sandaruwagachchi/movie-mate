import axios from 'axios';

const API_URL = 'http://localhost:8084/bills';

export const getBill = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching the bill:', error);
    throw error;
  }
};
