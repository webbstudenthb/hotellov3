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
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../../styles/booking.css";

function BlueHotels() {
  const [mydata, setData] = useState(hoteldata);
  return (
    <>
      <Header />
      <BookingHero />

      {mydata
        .filter((person) => person.hotel_id === "4")
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

// export default BlueHotels;

function BlueHotelscheckout() {
  const [mydata, setData] = useState(hoteldata);
  const [message, setMessage] = useState('');
  const handleChange = (event) => {
    setMessage(event.target.value);

    console.log("value is:", event.target.value);
  };


  return (
    <>
      {mydata
        .filter((person) => person.hotel_id === "1")
        .map((writeData) => (
          <div key={writeData.hotel_id}>
            <div className="MainHome">
              <div className="MainHomeGridItems">
                <div
                  style={{
                    backgroundColor: "var(--whitesmoke)",
                    height: "364px",
                    borderRadius: "24px 24px 24px 24px",
                    marginBottom: "16px",
                  }}
                  className="BookingHotelListCards"
                >
                  <div className="insideCardsGrid">
                    <div className="insideImgCard">
                      <img
                        style={{
                          height: "300px",
                          width: "100%",
                          borderRadius: "0px 24px 24px 24px",
                          marginTop: "32px",
                        }}
                        src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/luxury-hotel-2021-08-26-16-16-13-utc.jpeg?v=1664359471636"
                        alt=""
                      />
                    </div>
                    <div className="insideTextCard">
                      <h2>Grand Hotel - Italiensk lyx </h2>
                      <p>
                        Boka din semester hos oss på fantastisk Granne Hotel.
                        Hos oss kan du skämma bort dig rejält och njuta av våra
                        mysiga hotellrum. Boka din semester hos oss på
                        fantastisk Catalonia Plaza. Hos oss kan du skämma bort
                        dig rejält och njuta av våra mysiga hotellrum.
                      </p>
                    </div>

                    <div className="hotelListFlag">
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          borderRadius: "100%",
                        }}
                        src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/14b2d4d75b676cb53cf4950895de6726_swe-SE_90765.gif?v=1664460107687"
                        alt="spansk flagga"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="MainHome-Booking">
              <div className="MainHomeGridItems_FormBooking">
                <div className="bookingFormBox">
                  <h3>Bokningsinformation</h3>

                  <Form>
                    <Form.Group
                      style={{
                        display: "inline-block",
                        width: "45%",
                        marginRight: "16px",
                      }}
                      className="mb-3"
                      controlId="formBasicEmail"
                    >
                      <Form.Control
                        type="text"
                        placeholder="Förnamn"
                        className="textbox"
                        name="cardNumber"
                      />
                    </Form.Group>

                    <Form.Group
                      style={{ display: "inline-block", width: "45%" }}
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Control type="text" placeholder="Efternamn" />
                    </Form.Group>

                    <Form.Group
                      style={{
                        display: "inline-block",
                        width: "35%",
                        marginRight: "16px",
                      }}
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Control type="text" placeholder="Gatuadress" />
                    </Form.Group>

                    <Form.Group
                      style={{
                        display: "inline-block",
                        width: "20%",
                        marginRight: "16px",
                      }}
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Control type="text" placeholder="Husnr" />
                    </Form.Group>

                    <Form.Group
                      style={{
                        display: "inline-block",
                        width: "30%",
                        marginRight: "16px",
                      }}
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Control type="text" placeholder="Postnummer" />
                    </Form.Group>

                    <Form.Group
                      style={{
                        display: "inline-block",
                        width: "50%",
                        marginRight: "16px",
                      }}
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Control type="text" placeholder="Stad" />
                    </Form.Group>

                    <Form.Group
                      style={{ width: "50%", marginRight: "16px" }}
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Control type="text" placeholder="Epost" />
                    </Form.Group>

                    <Form.Group
                      style={{ width: "50%", marginRight: "16px" }}
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Control type="text" placeholder="Telefonnummer" />
                    </Form.Group>

                    <Form.Group
                      style={{ width: "90%", marginRight: "16px" }}
                      className="mb-3"
                      controlId="formBasicPassword"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Specialla önskemål"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="Jag godkänner att informationen är korrekt"
                      />
                    </Form.Group>
                
                  </Form>
                </div>
              </div>

              <div className="MainHomeGridItems-Summery_Booking">
                <div className="bookingSummeryBox">
                  <h3>Sammanfattning</h3>
                  <div className="innerBookingSummeryBox">
                    <p style={{ fontWeight: "bold" }}>Hotell</p>
                    <p>{writeData.hotel_name}</p>
                    <p style={{ fontWeight: "bold" }}>Antal rum</p>
                    <p>{writeData.number_of_rooms}</p>
                    <p style={{ fontWeight: "bold" }}>Datum</p>
                    <p>{}</p>
                    <p style={{ fontWeight: "bold" }}>Pris</p>
                    <p>{writeData.hotel_price}:-/rum</p>
                    <p style={{ fontWeight: "bold" }}>Avbokningsavgift</p>
                    <p>{writeData.cancellation_price}:-</p>
                  </div>
                </div>
              </div>

              <div className="MainHomeGridItems-Payment_Booking">
                <div className="bookingPaymentBox">
                  <h3>Betalning</h3>

                  <div className="formPaymentBoxWrapper">
                    <div className="innerPaymentBoxWrapper">
                      <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                          <img
                            style={{ height: "20px" }}
                            src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/credir%20card4.png?v=1664962363655"
                            alt="bild på olika kredtkorts utgivare"
                          />
                        </InputGroup.Text>
                        <Form.Control
                          placeholder="Kortnummer"
                          aria-label="CreditCardNumber"
                          aria-describedby="basic-addon1"
                          maxLength={16}
                        />
                      </InputGroup>

                      <Form>
                        <Form.Select
                          style={{ display: "inline-block", width: "5em" }}
                          aria-label="Default select example"
                        >
                          <option>Mån</option>
                          <option value="1">Jan</option>
                          <option value="2">Feb</option>
                          <option value="3">Mars</option>
                          <option value="4">April</option>
                          <option value="5">Maj</option>
                          <option value="6">Juni</option>
                        </Form.Select>

                        <Form.Select
                          style={{
                            display: "inline-block",
                            width: "5em",
                            marginLeft: "16px",
                          }}
                          aria-label="Default select example"
                        >
                          <option>År</option>
                          <option value="2022">2022</option>
                          <option value="2023">2023</option>
                          <option value="2024">2024</option>
                          <option value="2025">2025</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                        </Form.Select>

                        <Form.Group
                          style={{
                            display: "inline-block",
                            width: "5em",
                            marginLeft: "16px",
                          }}
                          className="mb-3"
                          controlId="exampleForm.ControlInput1"
                        >
                          <Form.Control type="email" placeholder="CVC" />
                        </Form.Group>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="MainHomeGridItems-Submit_Booking">
                <div className="bookingSubmitBox">
                  <div className="formSubmitBoxWrapper">
                    <div className="innerSubmitBoxWrapper">
                    <p style={{ margin: "0px" }}>Välj hur många rum som du vill boka</p>
                    <p style={{ fontSize: "9.89px" }}>Rummet är avsedda för {writeData.number_of_rooms}</p>
            
                    <Form.Select
                          style={{
                            display: "inline-block",
                            width: "10em",
                         
                          }}
                          aria-label="Default select example"
                          onChange={handleChange}
                        >
                          <option value="0">Antal rum</option>
                          <option value="1">1 rum</option>
                          <option value="2">2 rum</option>
                          <option  value="3">3 rum</option>
                          <option  value="4">4 rum</option>
                          <option value="5">5 rum</option>
                          <option  value="6">6 rum</option>
                        </Form.Select>
                         
                      
                    </div>
                    <div className="innerSubmitButtonWrapper">
                          <p>Totalpris för bokningen är <b> {message * writeData.hotel_price}kr </b></p>

                          <div className="positionSubmitButtonBooking">
                          <button style={{justifyContent: "center"}} className="defaultButton">Boka hotell</button>
                          </div>
                                
                          </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export { BlueHotels, BlueHotelscheckout };
