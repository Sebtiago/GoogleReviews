import { useState } from 'react';
import RatingStars from '../src/Components/RatingStars.jsx';
import ThankYou from '../src/Components/ThankYou.jsx';
import FeedbackForm from '../src/Components/FeedbackForm.jsx';
import Confirmation from '../src/Components/Confirmation';

const App = () => {
  const [rating, setRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRating = (newRating) => {
    setRating(newRating);
    if (newRating === 5) {
      setIsSubmitted(true);
    }
  };

  const handleSubmitFeedback = async (feedback) => {
    const scriptUrl = 'https://script.google.com/macros/s/AKfycby4WjiITrssWB6GO9Y83H1I42kwXAymx9ONm-ekfl4deGlRGq4mu7nCeMUABu9fQ6Ku/exec';
    try {
      const response = await fetch(scriptUrl, {
        method: 'POST',
        body: JSON.stringify({ rating, feedback }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const result = await response.json();
      console.log(result); // Para fines de depuración
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error sending feedback:', error);
      setIsSubmitted(true); // Asegúrate de cambiar este flujo según tu manejo de errores preferido
    }
  };

  return (
    <div className="App">
      {isSubmitted ? (
        rating === 5 ? <ThankYou/> : <Confirmation />
      ) : rating === null ? (
        <RatingStars setRating={handleRating} />
      ) : (
        <FeedbackForm onSubmitFeedback={handleSubmitFeedback} />
      )}
    </div>
  );
};

export default App;
