// MarquesitasFeedback.jsx
import React, { useState,useEffect } from 'react';
import RatingStars from '../Components/RatingStars.jsx';
import ThankYou from '../Components/ThankYou.jsx';
import FeedbackForm from '../Components/FeedbackForm.jsx';
import Confirmation from '../Components/Confirmation.jsx';
import { saveFeedback } from '../Services/feedbackServices.js';
import '../App.css'


const MarquesitasFeedback = () => {
    
    useEffect(() => {
        document.title = "Las Marquesitas | Armalas como quieras";
      }, []);

  const [rating, setRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleRating = (newRating) => {
    setRating(newRating);
    setIsSubmitted(newRating === 5);
  };

  const handleSubmitFeedback = async (feedbackText) => {
    try {
      await saveFeedback(rating, feedbackText);
      setIsSubmitted(true);
      setFeedback('');
    } catch (error) {
      console.error('Error sending feedback:', error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-start md:items-center min-h-screen bg-candy-beige px-12 sm:px-6 lg:px-8 max-md:py-12 font-quicksand text-center mx-auto">
              <img src="Logo.jpg" alt="Logo Marquesitas" className="w-full md:w-1/4 mx-auto"/>
      {isSubmitted ? (
        rating === 5 ? <ThankYou /> : <Confirmation />
      ) : (
        rating === null ? (
          <RatingStars onRatingChange={handleRating} />
        ) : (
          <FeedbackForm
            onSubmitFeedback={handleSubmitFeedback}
            onFeedbackChange={setFeedback}
            feedback={feedback}
          />
        )
      )}
    </div>
  );
};

export default MarquesitasFeedback;
