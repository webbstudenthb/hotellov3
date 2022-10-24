import hoteldata from "..//../hoteldata.json";
import { useState } from "react";
import Header from "../../comp/Comp_Header";
import BookingHero from "../../comp/Comp_Booking_Hero";
import Button from "../../comp/Comp_Button";
import { NavLink } from "react-router-dom";
import Rating from "react-rating";
import IconBeach from "../../comp/icons/iconBeach";
import IconRestaurant from "../../comp/icons/iconRestaurant";
import IconPool from "../../comp/icons/iconPool";
import IconWifi from "../../comp/icons/iconWifi";

function HogvallenFjallHotell() {
  const [mydata, setData] = useState(hoteldata);
  return (
    <>
      <Header />
      <BookingHero />

      {mydata
        .filter((person) => person.hotel_id === "5")
        .map((writeData) => (
          <div key={writeData.hotel_id} style={{}}>
            <div
              style={{ paddingTop: "109.66px", paddingBottom: "109.66px" }}
              className="HotelOverviewMain"
            >
              <div className="OverviewBox">
                <h2 className="OverviewHotelName">
                  {writeData.hotel_name}

                  <Rating
                    // fullSymbol="src/img/star-solid.svg"
                    initialRating={writeData.hotel_rating}
                    readonly
                  />

                  {/* <img
                    style={{
                      height: "2rem",
                      margin: "-1rem auto auto 2rem",
                    }}
                    className="starsForHotel"
                    src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/Star.svg?v=1664379295785"
                    alt="Stjärna"
                  /> */}
                </h2>
                <div className="starsForHotel">
                  {/** Skriva ut antal stjärnor för valt hotell från array*/}

                  <div className="full-hotel-icon-wrapper">
                    {/* <img
                      style={{ margin: "1rem" }}
                      src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/wifi-solid.svg?v=1664459875956"
                      alt="Ikon för trådlöst internet"
                    /> */}

                    {writeData.restaurant ? (
                      <div className="iconBoxWrapper-hotel">
                        <div className="iconImgBox-hotel">
                          <IconRestaurant />
                        </div>
                        <div className="iconTextBox-hotel">
                          <p>Restaurang</p>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}

                    {writeData.wifi ? (
                      <div className="iconBoxWrapper-hotel">
                        <div className="iconImgBox-hotel">
                          <IconWifi />
                        </div>
                        <div className="iconTextBox-hotel">
                          <p>Trådlöst internet</p>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}

                    {writeData.pool ? (
                      <div className="iconBoxWrapper-hotel">
                        <div className="iconImgBox-hotel">
                          <IconPool />
                        </div>
                        <div className="iconTextBox-hotel">
                          <p>Poolområde</p>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}

                    {writeData.beach ? (
                      <div className="iconBoxWrapper-hotel">
                        <div className="iconImgBox-hotel">
                          <IconBeach />
                        </div>
                        <div className="iconTextBox-hotel">
                          <p>Strand</p>
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                  {/**Skriva ut ikoner för valt hotell */}

                  <p>{writeData.hotel_description}</p>
                </div>
              </div>
              <div className="HotelInfoSummary">
                <h3 className="HeaderSummary">Bra att veta:</h3>
                <ul>
                  <li style={{ fontWeight: "bold" }}>Incheckning:</li>
                  <li style={{ padding: "0px" }}>{writeData.info_check_in}:</li>
                  <li style={{ fontWeight: "bold" }}>Utcheckning:</li>
                  <li style={{ padding: "0px" }}>{writeData.info_check_out}</li>
                  <li style={{ fontWeight: "bold" }}>Städning:</li>
                  <li style={{ padding: "0px" }}>{writeData.info_cleaning}</li>
                  <li style={{ fontWeight: "bold" }}>Frukost:</li>
                  <li style={{ padding: "0px" }}>{writeData.info_breakfast}</li>
                  <li style={{ fontWeight: "bold" }}>Rökning:</li>
                  <li style={{ padding: "0px" }}>{writeData.info_smooking}</li>
                  <li style={{ fontWeight: "bold" }}>Närmaste flygplats:</li>
                  <li style={{ padding: "0px" }}>{writeData.info_airport}</li>
                  <li style={{ fontWeight: "bold" }}>Transfer:</li>
                  <li style={{ padding: "0px" }}>{writeData.info_transfer}</li>
                  <li style={{ fontWeight: "bold" }}>Avbokning:</li>
                  <li style={{ padding: "0px" }}>
                    {writeData.info_cancellation}
                  </li>
                </ul>
                <div className="priceFrom">
                  <p style={{ margin: "auto auto -10px 1rem" }}>pris från:</p>
                  <h1 style={{ color: "black" }}>{writeData.hotel_price}kr</h1>
                  <div className="buttons">
                    <NavLink style={{ textDecoration: "none" }}>
                      <Button style={{ margin: "100px" }} />
                    </NavLink>
                  </div>
                </div>
              </div>

              <NavLink
                to="/winterhotel"
                style={{ textDecoration: "none" }}
                className="winterSport"
              >
                <div>
                  <h2 style={{ margin: "21px" }}>Vintersport</h2>
                  <img
                    style={{
                      height: "136px",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "0px 24px 24px 24px",
                    }}
                    src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/austria-salzburg-young-couple-skiing-on-mountain-2022-03-08-01-22-33-utc.jpeg?v=1664265142680"
                  ></img>
                </div>
              </NavLink>
              <NavLink
                to="/sunhotel"
                style={{ textDecoration: "none" }}
                className="summerVacation"
              >
                <div>
                  <h2 style={{ margin: "21px" }}>Solsemester</h2>
                  <img
                    style={{
                      height: "136px",
                      width: "100%",
                      objectFit: "cover",
                      borderRadius: "0px 24px 24px 24px",
                    }}
                    src="https://cdn.glitch.me/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/woman-in-bikini-on-beach-2022-02-02-03-49-15-utc.jpeg?v=1664268040112"
                  ></img>
                </div>
              </NavLink>
            </div>
          </div>
        ))}
    </>
  );
}

export default HogvallenFjallHotell;
