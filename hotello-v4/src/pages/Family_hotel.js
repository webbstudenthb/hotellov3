import { useState } from "react";
import hoteldata from "..//hoteldata.json";
import Footer from "../comp/Comp_Footer";
import Header from "../comp/Comp_Header";
import Hero from "../comp/Comp_Hero";

function FamilyHotel() {
  const [mydata, setData] = useState(hoteldata);
  return (
    <>
      <Header />
      <Hero />

      <h2>Familjehotell</h2>
      <div>
        {mydata
          .filter((person) => person.hotel_tags === "Familjehotell")
          .map((writeData) => (
            <div>
              <p>{writeData.hotel_price}</p>
              <p>{writeData.hotel_name}</p>
            </div>
          ))}
      </div>

      <Footer />
    </>
  );
}

export default FamilyHotel;
