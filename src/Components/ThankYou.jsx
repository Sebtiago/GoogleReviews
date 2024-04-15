const ThankYou = () => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className=" font-bold text-2xl">¡Gracias por tu calificación de 5 estrellas!</h2>
            <p>Si te ha gustado nuestro servicio, por favor, considera dejar una reseña en Google.</p>
            <a className=' px-10 py-4 rounded-2xl bg-candy-red font-bold text-white hover:bg-candy-lightred' href="https://reviewthis.biz/11ded4f9">Dejar reseña en Google</a>
        </div>
    );
};

export default ThankYou;
