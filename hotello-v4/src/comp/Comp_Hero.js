import Searchbar from "./Comp_Home_search_bar";

function Hero() {
  return (
    <>
      <div className="Hero">
        <img
          className="HeroImg"
          src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/aerial-view-of-beautiful-hotel-on-the-water-in-oce-2022-02-08-22-39-24-utc.jpeg?v=1664186909579"
          alt="Bild av ett hotell som ligger direkt nere vid havet"
          style={{ height: "464.48px",  objectFit: "cover" }}
        />

        <div className="HeroOverlay"></div>

        <div style={{padding: "0px 0px 16px 0px"}} className="HeroText">
            <h1 style={{ color: "white"}}>Boka ditt nästa resmål hos oss </h1>
            <p style={{ color: "white"}}>Book your vacation at one of our wonderful hotels. We have accommodation and rooms for the couple, child family and the party people. </p>
        </div>
        <div className="HeroSearch" style={{ paddingBottom: "32px" }}>
          <Searchbar />
        </div>
      </div>
    </>
  );
}

export default Hero;
