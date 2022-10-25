//Här importeras iseState från react
import { useState } from "react";
//Här importeras HotelData från vår json fil
import hoteldata from "..//hoteldata.json";
//Här importeras komponenterna Footer, Header, Hero, samt komponenterna för ikonerna
import Footer from "../comp/Comp_Footer";
import Header from "../comp/Comp_Header";
import Hero from "../comp/Comp_Hero";
import IconBeach from "../comp/icons/iconBeach";
import IconRestaurant from "../comp/icons/iconRestaurant";
import IconPool from "../comp/icons/iconPool";
import IconWifi from "../comp/icons/iconWifi";
//Här importeras NavLink från react router
import { NavLink } from "react-router-dom";

function AdultsOnly() {
  //Här används useState för att checka State kopplat till vår json fil samt .map
  const [mydata, setData] = useState(hoteldata);

  return (
    <>
      {/* Här renderas komponenterna Header och Hero ut */}
      <Header />
      <Hero />

      <div className="MainHome">
        <div
          style={{ paddingTop: "109.66px", paddingBottom: "109.66px" }}
          className="MainHomeGridItems"
        >
          <div>
            <h2>Endast vuxna</h2>
            <p style={{ width: "70%", paddingBottom: "16px" }}>
              För vuxna som vill ha lugn och ro så passar våra kategori{" "}
              <b>Endast Vuxna</b> perfekt.
            </p>
          </div>
          {/* 
          Här filtras datan via .filter och skrivs ut via .map 
          Vi använder då {writeData.[den data som vi vill skriva ut] för att skriva ut text, bilder eller likannde från json filen */}
          {mydata
            .filter((person) => person.hotel_tags === "Endast vuxna")
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

                    {/* Här skrivs ikonerna ut om de är markerade som true i arrayen. Det är alltså en boolian */}
                    {writeData.restaurant ? (
                      <div className="iconBoxWrapper">
                        <div className="iconImgBox">
                          <IconRestaurant />
                        </div>
                        <div className="iconTextBox">
                          <p>Restaurang</p>
                        </div>
                      </div>
                    ) : (
                      <p></p>
                    )}

                    {writeData.wifi ? (
                      <div className="iconBoxWrapper">
                        <div className="iconImgBox">
                          <IconWifi />
                        </div>
                        <div className="iconTextBox">
                          <p>Trådlöst internet</p>
                        </div>
                      </div>
                    ) : (
                      <p></p>
                    )}

                    {writeData.pool ? (
                      <div className="iconBoxWrapper">
                        <div className="iconImgBox">
                          <IconPool />
                        </div>
                        <div className="iconTextBox">
                          <p>Poolområde</p>
                        </div>
                      </div>
                    ) : (
                      <p></p>
                    )}

                    {writeData.beach ? (
                      <div className="iconBoxWrapper">
                        <div className="iconImgBox">
                          <IconBeach />
                        </div>
                        <div className="iconTextBox">
                          <p>Strand</p>
                        </div>
                      </div>
                    ) : (
                      <p></p>
                    )}
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

export default AdultsOnly;
