import "../styles/bookingHero.css";
import hoteldata from "..//hoteldata.json";
import { useState } from "react";

//Vi skall här hämta bilden från varje hotell eftersom bilden skall ändras här beroende av vilket hotell som man är inne på.

function BookingHero() {
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
