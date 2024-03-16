import { useState } from 'react';

const FeedbackForm = ({ onSubmitFeedback }) => {
    const [feedback, setFeedback] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmitFeedback(feedback);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label>Ayúdanos a mejorar</label>
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    );
  };
  
  export default FeedbackForm;