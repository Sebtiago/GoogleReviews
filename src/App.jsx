import { useState } from 'react';
import RatingStars from '../src/Components/RatingStars.jsx';
import ThankYou from '../src/Components/ThankYou.jsx';
import FeedbackForm from '../src/Components/FeedbackForm.jsx';
import Confirmation  from './Components/Confirmation.jsx';

const App = () => {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  

  const handleRating = (newRating) => {
    setRating(newRating);
    // Si es una calificación de 5 estrellas, pasa directamente al agradecimiento
    if (newRating === 5) {
      setSubmitted(true);
    }
  };

  const handleSubmitFeedback = async (feedback) => {
    try {
      // Asegúrate de que la URL es la proporcionada por Google Apps Script
      const scriptUrl = 'https://script.google.com/macros/s/AKfycby4WjiITrssWB6GO9Y83H1I42kwXAymx9ONm-ekfl4deGlRGq4mu7nCeMUABu9fQ6Ku/exec';
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: JSON.stringify({ rating, feedback }),
        headers: {
          'Content-Type': 'application/json',
        },
        mode: 'cors', // Asegúrate de que el modo CORS está activado
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
  
      const data = await response.json();
      console.log(data);
      setSubmitted(true); // Indicar que se ha enviado el feedback
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="App">
      {/* Si se envió el feedback, muestra la confirmación */}
      {submitted ? (
        <Confirmation />
      ) : (
        <>
          {/* Si no se ha calificado, muestra las estrellas */}
          {rating === null && <RatingStars setRating={setRating} />}
          {/* Si se seleccionó una calificación pero no se ha enviado el feedback, muestra el formulario */}
          {rating !== null && <FeedbackForm onSubmitFeedback={handleSubmitFeedback} />}
        </>
      )}
    </div>
  );
};

export default App;