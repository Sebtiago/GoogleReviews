// FeedbackForm.jsx

import React from 'react';

const FeedbackForm = ({ onSubmitFeedback, onFeedbackChange, feedback }) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitFeedback(feedback); // Utilizamos la prop feedback directamente
  };

  return (
    <div >
      <form onSubmit={handleSubmit} className=' flex flex-col gap-4'>
        <label htmlFor="feedback" className=' texl-3xl font-bold text-center'>Queremos que cada bocado sea una experiencia.</label>
        <textarea
          className=' px-4 py-2  min-h-32 border border-black rounded-xl'
          id="feedback"
          placeholder='¿Qué podemos mejorar para lograrlo?'
          value={feedback}
          onChange={(e) => onFeedbackChange(e.target.value)} // Utilizamos la prop onFeedbackChange
          required
        ></textarea>
        <button className=' px-10 py-4 rounded-2xl bg-candy-red font-bold text-white hover:bg-candy-lightred' type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
