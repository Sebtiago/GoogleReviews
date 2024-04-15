import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RatingStars from '../src/Components/RatingStars.jsx';
import ThankYou from '../src/Components/ThankYou.jsx';
import FeedbackForm from '../src/Components/FeedbackForm.jsx';
import Confirmation from '../src/Components/Confirmation.jsx';
import ViewFeedback from './ViewFeedback.jsx';
import { saveFeedback } from '../src/Services/feedbackServices.js';
import '../src/App.css'

const App = () => {
  const [rating, setRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleRating = (newRating) => {
    setRating(newRating);
    if (newRating === 5) {
      setIsSubmitted(true); // Set isSubmitted to true immediately for 5 stars
    } else {
      setIsSubmitted(false); // Keep isSubmitted false for less than 5 stars
    }
  };

  const handleSubmitFeedback = async (feedbackText) => {
    try {
      await saveFeedback(rating, feedbackText);
      setIsSubmitted(true); // Marks the feedback as submitted after saving
      setFeedback(''); // Reset the feedback state after submission
    } catch (error) {
      console.error('Error sending feedback:', error);
    }
  };

  return (
    <Router>
      <div className="flex justify-center items-start md:items-center min-h-screen bg-candy-beige px-12 sm:px-6 lg:px-8 max-md:py-12 font-quicksand text-center">
        <Routes>
          <Route path="/" element={
            <div className="App">
              <img src="src/assets/Logo.jpg" alt="Logo Marquesitas" className="w-full md:w-1/2 mx-auto"/>

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
          } />
          <Route path="/feedback" element={<ViewFeedback />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
