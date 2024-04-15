import ReactStars from "react-rating-stars-component";
import { useState } from 'react';
import '@fontsource-variable/quicksand';


const RatingStars = ({ onRatingChange }) => {
    const [rating, setRating] = useState(0);

    // Función para manejar el cambio de calificación
    const handleRatingChange = (newRating) => {
        setRating(newRating);
        onRatingChange(newRating); // Llama a la función proporcionada por el padre para actualizar la calificación
    };

    return (
        <div className="flex flex-col items-center"  >
            <h3 className=" text-base font-semibold">¡Hola! Queremos que cada momento sea especial.</h3>
            <h1 className=" text-4xl  font-bold">¿Qué tal estuvo tu visita?</h1>
            <ReactStars
                count={5}
                value={rating} // Establece el valor de la calificación
                onChange={handleRatingChange} // Maneja el cambio de calificación
                size={53}
                activeColor="#E56263"
                />
        </div>
    );
};

export default RatingStars;
