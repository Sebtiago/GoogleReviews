import React, { useState, useEffect } from 'react';
import { getAllFeedbacks, deletePreviousMonthFeedbacks } from '../src/Services/feedbackServices';

const ViewFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const loadFeedbacks = async () => {
      try {
        const fetchedFeedbacks = await getAllFeedbacks();
        setFeedbacks(fetchedFeedbacks.map(f => ({
          ...f,
          date: f.date.toDate(), // Convierte Timestamp a Date
        })));
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      }
    };

    loadFeedbacks();
  }, []);

  const handleDeletePreviousMonthFeedbacks = async () => {
    try {
      await deletePreviousMonthFeedbacks();
      await loadFeedbacks(); // Recarga los feedbacks después de eliminar los del mes anterior
    } catch (error) {
      console.error('Error deleting previous month feedbacks:', error);
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold text-gray-900 my-6">Feedbacks</h1>
      <button
        onClick={handleDeletePreviousMonthFeedbacks}
        className="mb-4 bg-candy-red hover:bg-candy-lightred text-white font-bold py-2 px-4 rounded"
      >
        Eliminar feedbacks del mes anterior
      </button>
      {feedbacks.length > 0 ? (
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Estrellas
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Feedback
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Fecha
              </th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedbackItem) => (
              <tr key={feedbackItem.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {feedbackItem.rating}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {feedbackItem.feedback || 'No feedback provided.'}
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  {feedbackItem.date.toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-900">No hay feedbacks para mostrar.</p>
      )}
    </div>
  );
};

export default ViewFeedback;
