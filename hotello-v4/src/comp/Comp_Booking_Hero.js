//Importerar css fil
import "../styles/bookingHero.css";
// Importerar json filen arraydata
import hoteldata from "..//hoteldata.json";
// Hämtar usestate
import { useState } from "react";

function BookingHero() {
  //Sätter bilden baserat på vilket state och filtrerar daran basear på hotel_tags
  //Styling och layout görs i CSs fil eller i inline styling
  //.map används för att skriva ut alla hotell medans filter används för att filtrera hotellen och endats visa dem som är aktuella.
  const [mydata, setData] = useState(hoteldata);
  return (
    <>
      {mydata
        .filter((person) => person.hotel_tags === "Familjehotell")
        .map((writeData) => (
          <div key={writeData.hotel_id} style={{}}>
            <div className="BookingHero">
              <img
                className="BookingHeroImg"
                src={writeData.hotel_img}
                alt="Bild av ett hotell som ligger direkt nere vid havet"
                style={{ height: "464.48px", objectFit: "cover" }}
              />
              <div className="HeroOverlay"></div>
            </div>
          </div>
        ))}
    </>
  );
}

export default BookingHero;
