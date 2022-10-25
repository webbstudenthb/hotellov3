//Importerar css fil
import "../styles/hotelListCards.css";

//Importera ikon komponenterna
import IconBeach from "./icons/iconBeach";
import IconRestaurant from "./icons/iconRestaurant";
import IconPool from "./icons/iconPool";
import IconWifi from "./icons/iconWifi";

//Importerar useState
import { useState } from "react";
//importera data från Array sjon fil
import hoteldata from "../hoteldata.json";
//Importera NavLink från React router
import { NavLink } from "react-router-dom";

function HotelListCard() {
  //funktionen används för att update state kopplat till array datan i json filen.
  //Nedan används .map för att skriva ut alla hotell samt viss av den information
  //som vi använder i denna komponent från arraydatan
  //vi använder alltså {writeData.[vad vi nu vill hämta från array]} för att skriva ut datan
  const [mydata, setData] = useState(hoteldata);

  return (
    <>
      <div
        style={{ paddingTop: "109.66px", paddingBottom: "109.66px" }}
        className="MainHome"
      >
        <div className="MainHomeGridItems">
          {/* .map används för att skriva hämta från arrayen i json filen */}
          {mydata.map((writeData) => (
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

                  {/* Här har vi en lösning som checkar om ikonen skall skrivas ut eller ej. 
                  Detta kopplat till boolian i arrayen true eller false  
                  alla ikoner är uppbyggda på samma vis*/}
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
    </>
  );
}

export default HotelListCard;
