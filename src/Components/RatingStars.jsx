import ReactStars from "react-rating-stars-component";

const RatingStars = ({ setRating }) => {
    return (
        <div>
            <h1>¡Nos encantaría conocer tu opinión!</h1>
            <p>¿Qué tal fue tu experiencia con nosotros? Califícanos con estrellas.</p>
            <ReactStars
                count={5}
                onChange={setRating}
                size={24}
                activeColor="#ffd700"
            />
        </div>
    );
};

export default RatingStars;
