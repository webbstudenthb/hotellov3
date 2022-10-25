//Importerar CSS filen
import "../styles/hero.css";


//Detta är hero komponenet som används på flera sidor. Bilden är här statisk och positionering samt 
//layout styrs via CSS filen samt viss inline styling. 
function Hero() {
  return (
    <>
      <div className="Hero">
        <img
          className="HeroImg"
          src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/aerial-view-of-beautiful-hotel-on-the-water-in-oce-2022-02-08-22-39-24-utc.webp?v=1665430788608"
          alt="Bild av ett hotell som ligger direkt nere vid havet"
          style={{ height: "464.48px", objectFit: "cover" }}
        />

        <div className="HeroOverlay"></div>
      </div>
    </>
  );
}

export default Hero;
