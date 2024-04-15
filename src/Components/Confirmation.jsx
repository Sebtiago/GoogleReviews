const Confirmation = () => {
  return (
    <div className="Confirmation flex flex-col gap-8">
      <div>
        <h2 className=" font-bold text-2xl">¡Gracias por tu valiosa opinión!</h2>
        <p className=" font-semibol text-lg">Juntos, haremos que cada momento sea aún más especial.</p>
      </div>
      <aside className="flex flex-col gap-4">
        <p className=" font-semibol text-md font-medium">¿Quieres más dulzura en tu feed? Síguenos en redes sociales</p>
      <div>
        <a className="flex flex-row w-fit gap-4 items-center mx-auto"   referrerpolicy="no-referrer" href="https://www.instagram.com/marquesitas.villavo/"> 
          <img src="src\assets\Instagram.svg" alt="Logo Instagram" />
          <p className=" font-bold text-candy-red text-md hover:text-candy-lightred">@marquesitas.villavo</p>
        </a>
      </div>
      <div>
        <a className="flex flex-row w-fit gap-4 items-center mx-auto"  referrerpolicy="no-referrer" href="https://www.tiktok.com/@marquesitas.villavo"> 
          <img src="src\assets\Tiktok.svg" alt="Logo TikTok" />
          <p className=" font-bold text-candy-red text-md hover:text-candy-lightred">@marquesitas.villavo</p>
        </a>
      </div>
      </aside>
    </div>
  );
};

export default Confirmation;
