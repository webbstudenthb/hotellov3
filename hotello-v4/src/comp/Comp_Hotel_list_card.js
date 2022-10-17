import Button from "./Comp_Button";
import "../styles/hotelListCards.css";
import IconBeach from "./icons/iconBeach";
import IconRestaurant from "./icons/iconRestaurant";
import IconPool from "./icons/iconPool";
import IconWifi from "./icons/iconWifi";
import IconPoolbar from "./icons/iconPoolbar";

//importera från Array
import { useState } from "react";
import hoteldata from "../hoteldata.json";

function HotelListCard() {
  const [mydata, setData] = useState(hoteldata);

  // const filterItem = (hotel_tim_tags) => {
  //   const newItem = Data.filter((newVal) => {
  //     return newVal.category === hotel_tim_tags; 
  //       	// comparing category for displaying data
  //   });
  //   setItem(newItem);
  // };


  return (
    <>
      <div className="MainHome">
        <div className="MainHomeGridItems">
          {mydata.map((writeData) => (
            <div
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

                  <div className="iconBoxWrapper">
                    <div className="iconImgBox">
                      <IconRestaurant />
                    </div>

                    <div className="iconTextBox">
                      <p>Restaurang</p>
                    </div>

                    <div className="iconImgBox">
                      <IconBeach />
                    </div>

                    <div className="iconTextBox">
                      <p>Strand</p>
                    </div>

                    <div className="iconImgBox">
                      <IconPool />
                    </div>

                    <div className="iconTextBox">
                      <p>Hotellpool</p>
                    </div>

                    <div className="iconImgBox">
                      <IconPoolbar />
                    </div>

                    <div className="iconTextBox">
                      <p>Poolbar</p>
                    </div>

                    <div className="iconImgBox">
                      <IconWifi />
                    </div>

                    <div className="iconTextBox">
                      <p>WiFi</p>
                    </div>
                  </div>
                </div>

                <div className="hotelListPriceButtonWrapper">
                  <div className="hotelListPrice">
                    <p style={{ textAlign: "end" }}>Pris från</p>
                    <h2 style={{ textAlign: "end" }}>
                      {writeData.hotel_price} SEK
                    </h2>
                  </div>
                  <div>
                    <Button />
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
