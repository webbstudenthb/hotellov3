import "../styles/bookingHero.css";

//Vi skall här hämta bilden från varje hotell eftersom bilden skall ändras här beroende av vilket hotell som man är inne på. 

function BookingHero() {
  return (
    <>
      <div className="BookingHero">
        <img
          className="BookingHeroImg"
          src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/aerial-view-of-beautiful-hotel-on-the-water-in-oce-2022-02-08-22-39-24-utc.jpeg?v=1664186909579"
          alt="Bild av ett hotell som ligger direkt nere vid havet"
          style={{ height: "464.48px", objectFit: "cover" }}
        />

        <div className="HeroOverlay"></div>

      </div>
    </>
  );
}

export default BookingHero;
