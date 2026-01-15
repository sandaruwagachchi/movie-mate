import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ViewBills = () => {
    const [bills, setBills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBills = async () => {
            try {
                const response = await fetch('http://localhost:8084/bills');
                if (!response.ok) {
                    throw new Error('Failed to fetch bills');
                }
                const data = await response.json();
                setBills(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBills();
    }, []);

    const handleDelete = async (id) => {
        // Display confirmation dialog
        const isConfirmed = window.confirm('Are you sure you want to delete this bill?');
        if (!isConfirmed) return; // Exit if the user cancels

        try {
            const response = await fetch(`http://localhost:8084/bills/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete bill');
            }
            // Remove the bill from the state after successful deletion
            setBills(bills.filter((bill) => bill.id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    if (loading) {
        return <div className="text-center text-gray-500">Loading bills...</div>;
    }

    if (error) {
        return <div className="text-center text-red-500">Error: {error}</div>;
    }

    return (
        <div className="min-h-screen bg-red-50 py-10 px-4">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-5xl mx-auto">
                <h1 className="text-2xl font-bold text-center mb-6">Your Bills</h1>
                <table className="w-full table-auto text-left">
                    <thead>
                        <tr className="bg-red-50">
                            <th className="px-4 py-2 font-medium text-gray-700">Bill ID</th>
                            <th className="px-4 py-2 font-medium text-gray-700">Name</th>
                            <th className="px-4 py-2 font-medium text-gray-700">Film Name</th>
                            <th className="px-4 py-2 font-medium text-gray-700">Seat Number</th>
                            <th className="px-4 py-2 font-medium text-gray-700">Phone</th>
                            <th className="px-4 py-2 font-medium text-gray-700">Total</th>
                            <th className="px-4 py-2 font-medium text-gray-700">Date</th>
                            <th className="px-4 py-2 font-medium text-gray-700"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {bills.map((bill) => (
                            <tr key={bill.id} className="border-t">
                                <td className="px-4 py-2">{bill.id}</td>
                                <td className="px-4 py-2">{bill.name}</td>
                                <td className="px-4 py-2">{bill.filmName}</td>
                                <td className="px-4 py-2">{bill.seatNo}</td>
                                <td className="px-4 py-2">{bill.phone}</td>
                                <td className="px-4 py-2">{bill.total}</td>
                                <td className="px-4 py-2">{(bill.date).toLocaleString()}</td>
                                <td className="px-4 py-2 flex items-center">
                                    <Link
                                        to={`/view/${bill.id}`}
                                        className="flex items-center justify-center text-black border border-black font-semibold hover:bg-gray-300 px-3 py-1 rounded-full mr-2"
                                    >
                                        View Bill
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(bill.id)}
                                        className="text-white bg-red-600 hover:bg-red-700 font-semibold px-3 py-1 rounded-full"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewBills;

