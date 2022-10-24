import { useState } from "react";
import hoteldata from "..//hoteldata.json";
import Footer from "../comp/Comp_Footer";
import Header from "../comp/Comp_Header";
import Hero from "../comp/Comp_Hero";
import { NavLink } from "react-router-dom";
import IconBeach from "../comp/icons/iconBeach";
import IconRestaurant from "../comp/icons/iconRestaurant";
import IconPool from "../comp/icons/iconPool";
import IconWifi from "../comp/icons/iconWifi";


function WinterHotel() {
  const [mydata, setData] = useState(hoteldata);
  return (
    <>
      <Header />
      <Hero />

      <div className="MainHome">
        <div
          style={{ paddingTop: "109.66px", paddingBottom: "109.66px" }}
          className="MainHomeGridItems"
        >
          {mydata
            .filter((person) => person.hotel_tags === "Vintersemester")
            .map((writeData) => (
              <div
                key={writeData.hotel_id}
                style={{
                  backgroundColor: "var(--whitesmoke)",
                  height: "568.43px",
                  borderRadius: "24px 24px 24px 24px",
                  marginBottom: "16px",
                }}
                className="HotelListCards"
              >
                <div className="insideCardsGrid">
                  <div className="insideImgCard">
                    <img
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "0px 24px 24px 24px",
                      }}
                      src={writeData.hotel_img}
                      alt={writeData.hotel_img_alttext}
                    />
                  </div>
                  <div className="insideTextCard">
                  <h2>{writeData.hotel_name} </h2>
                  <p>{writeData.hotel_description}</p>

                  {/* {writeData.wifi ? <div><IconWifi/><p style={{display: "inline-block"}}>Trådlöst internet</p></div> : <p></p>} */}
          
                {writeData.restaurant ? 
                <div className="iconBoxWrapper">
                  <div className="iconImgBox">
                    <IconRestaurant/>
                  </div>
                  <div className="iconTextBox">
                    <p>Restaurang</p>
                  </div>
                </div> : <p></p>}    


                {writeData.wifi ? 
                <div className="iconBoxWrapper">
                  <div className="iconImgBox">
                    <IconWifi />
                  </div>
                  <div className="iconTextBox">
                    <p>Trådlöst internet</p>
                  </div>
                </div> : <p></p>}    


                {writeData.pool ? 
                <div className="iconBoxWrapper">
                  <div className="iconImgBox">
                    <IconPool />
                  </div>
                  <div className="iconTextBox">
                    <p>Poolområde</p>
                  </div>
                </div> : <p></p>}    


                {writeData.beach ? 
                <div className="iconBoxWrapper">
                  <div className="iconImgBox">
                    <IconBeach />
                  </div>
                  <div className="iconTextBox">
                    <p>Strand</p>
                  </div>
                </div> : <p></p>}    
                </div>


                  <div className="hotelListPriceButtonWrapper">
                    <div className="hotelListPrice">
                      <p style={{ textAlign: "end" }}>Pris från</p>
                      <h2 style={{ textAlign: "end" }}>
                        {writeData.hotel_price} SEK
                      </h2>
                    </div>
                    <div>
                      <NavLink
                        style={{ textDecoration: "none" }}
                        to={writeData.Hotel_Overview_Route}
                      >
                        <button className="defaultButton">Välj hotell</button>
                      </NavLink>
                    </div>
                  </div>

                  <div className="hotelListFlag">
                    <img
                      style={{
                        height: "100%",
                        width: "100%",
                        borderRadius: "100%",
                      }}
                      src={writeData.county_flag}
                      alt={writeData.country_flag_alttex}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default WinterHotel;
