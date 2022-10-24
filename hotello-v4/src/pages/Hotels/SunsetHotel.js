import hoteldata from "..//../hoteldata.json";
import { useState } from "react";
import Header from "../../comp/Comp_Header";
import BookingHero from "../../comp/Comp_Booking_Hero";

import { NavLink } from "react-router-dom";
import Rating from "react-rating";
import IconBeach from "../../comp/icons/iconBeach";
import IconRestaurant from "../../comp/icons/iconRestaurant";
import IconPool from "../../comp/icons/iconPool";
import IconWifi from "../../comp/icons/iconWifi";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "../../styles/booking.css";
import Footer from "../../comp/Comp_Footer";

function SunsetHotel() {
  const [mydata, setData] = useState(hoteldata);
  return (
    <>
      <Header />

      {mydata
        .filter((person) => person.hotel_id === "3")
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

              {/* Sammanfattningen hotellvy startar här */}
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
                    <NavLink
                      to={writeData.Hotel_Checkout_Route}
                      style={{ textDecoration: "none" }}
                    >
                      <div>
                        <button className="defaultButton">Boka</button>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* Sammanfattningen hotellvy slutar här */}

              {/* Gå tillbaka till andra kategorier börjar här */}
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

              {/* Gå tillbaka till andra kategorier slutar här */}
            </div>
          </div>
        ))}

      <Footer />
    </>
  );
}

// export default BlueHotels;

function SunsetHotelcheckout() {
  //code get data from array inside the json file.
  const [mydata, setData] = useState(hoteldata);

  //this get the number of rooms selected
  const [message, setMessage] = useState("");
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  //this get the date
  const [dateMessage, setDateMessage] = useState("");
  const handleDateChange = (event) => {
    setDateMessage(event.target.value);
  };

  //this get the name from the form
  const [nameMessage, setNameMessage] = useState("");
  const nameChange = (event) => {
    setNameMessage(event.target.value);
  };

  //this gets the lastname from form
  const [lastName, setLastName] = useState("");
  const lastNameChange = (event) => {
    setLastName(event.target.value);
  };

  //this gets the Cansellation option from form
  const [cancellationChange, setCancellationChange] = useState("");
  const handleCancellationChange = (event) => {
    setCancellationChange(event.target.value);
  };

  //this gets the lastname from form
  const [nightsChange, setNightChange] = useState("");
  const handleNightsChange = (event) => {
    setNightChange(event.target.value);
  };

  //this is a modal open and close function from react bootstrap
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // event on submit

  // const somefunction = async (...args) => {
  //   let result = await feedReducer(args);
  //   console.log(result);
  //   // do something
  // }

  return (
    <>
      <Header />

      {/* Here we import the data from hoteldata.json file, we also filter the information here */}
      {mydata
        .filter((person) => person.hotel_id === "3")
        .map((writeData) => (
          // Here we have a key connected to the hotels id
          <div key={writeData.hotel_id}>
            <div className="BookingHero">
              <img
                className="BookingHeroImg"
                src={writeData.hotel_img}
                alt="Bild av ett hotell som ligger direkt nere vid havet"
                style={{ height: "464.48px", objectFit: "cover" }}
              />

              <div className="HeroOverlay"></div>
            </div>
            {/* Main home and mainhomeGrid items is used to position the data  */}
            <div className="MainHome">
              <div className="MainHomeGridItems">
                {/* Detta är den övre delen start */}
                <div
                  style={{
                    marginTop: "109.66px",
                    backgroundColor: "var(--whitesmoke)",
                    height: "364px",
                    borderRadius: "24px 24px 24px 24px",
                    marginBottom: "16px",
                  }}
                  className="BookingHotelListCards"
                >
                  <div className="insideCardsGrid">
                    <div className="insideImgCardBooking">
                      <img
                        style={{
                          height: "300px",
                          width: "100%",
                          borderRadius: "0px 24px 24px 24px",
                        }}
                        src={writeData.hotel_img}
                        alt={writeData.hotel_img_alttext}
                      />
                    </div>
                    <div className="insideTextCard">
                      <h2>{writeData.hotel_name}</h2>
                      <p>{writeData.hotel_description}</p>
                    </div>

                    {/* Code to get and show the flag of the country where the hotel is located */}
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

                {/* Detta är den övre delen slut */}
              </div>
            </div>

            {/* Här börjar nedre delen för booking */}
            <Form>
                
              <div style={{marginBottom: "109.66px"}} className="MainHome-Booking">
                <div className="MainHomeGridItems_FormBooking">
                  <div className="bookingFormBox">
                    <h3>Bokningsinformation</h3>

                    <Form.Group
                      style={{
                        display: "inline-block",
                        width: "45%",
                        marginRight: "16px",
                      }}
                      className="mb-3"
                      // controlId="formBasicEmail"
                    >
                      <Form.Control
                        required
                        onChange={nameChange}
                        type="text"
                        placeholder="Förnamn"
                        className="textbox"
                        name="name"
                      />
                    </Form.Group>

                    <Form.Group
                      style={{ display: "inline-block", width: "45%" }}
                      className="mb-3"
                      // controlId="formBasicPassword"
                    >
                      <Form.Control
                        required
                        onChange={lastNameChange}
                        type="text"
                        placeholder="Efternamn"
                      />
                    </Form.Group>

                    <Form.Group
                      style={{
                        display: "inline-block",
                        width: "35%",
                        marginRight: "16px",
                      }}
                      className="mb-3"
                      // controlId="formBasicPassword"
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
                      // controlId="formBasicPassword"
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
                      // controlId="formBasicPassword"
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
                      // controlId="formBasicPassword"
                    >
                      <Form.Control type="text" placeholder="Stad" />
                    </Form.Group>

                    <Form.Group
                      style={{ width: "50%", marginRight: "16px" }}
                      className="mb-3"
                      // controlId="formBasicPassword"
                    >
                      <Form.Control required type="text" placeholder="Epost" />
                    </Form.Group>

                    <Form.Group
                      style={{ width: "50%", marginRight: "16px" }}
                      className="mb-3"
                      // controlId="formBasicPassword"
                    >
                      <Form.Control type="text" placeholder="Telefonnummer" />
                    </Form.Group>

                    <Form.Group
                      style={{ width: "90%", marginRight: "16px" }}
                      className="mb-3"
                      // controlId="formBasicPassword"
                    >
                      <Form.Control
                        as="textarea"
                        placeholder="Specialla önskemål"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check
                        required
                        type="checkbox"
                        label="Jag godkänner att informationen är korrekt"
                      />
                    </Form.Group>
                  </div>
                </div>

                <div className="MainHomeGridItems-Summery_Booking">
                  <div className="bookingSummeryBox">
                    <h3>Sammanfattning</h3>
                    <div className="innerBookingSummeryBox">
                      <p style={{ fontWeight: "bold" }}>Hotell</p>
                      <p>{writeData.hotel_name}</p>
                      <p style={{ fontWeight: "bold" }}>Antal bokade rum</p>
                      <p>{message}</p>
                      <p style={{ fontWeight: "bold" }}>Datum</p>
                      <p>{dateMessage}</p>
                      <p style={{ fontWeight: "bold" }}>Pris</p>
                      <p>{writeData.hotel_price}:-/rum</p>
                      <p style={{ fontWeight: "bold" }}>Avbokning</p>
                      <p>{writeData.info_cancellation}.</p>
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

                        <Form.Select
                          style={{ display: "inline-block", width: "6em" }}
                          aria-label="Default select example"
                        >
                          <option>Mån</option>
                          <option value="1">Jan</option>
                          <option value="2">Feb</option>
                          <option value="3">Mars</option>
                          <option value="4">April</option>
                          <option value="5">Maj</option>
                          <option value="6">Juni</option>
                          <option value="7">Juli</option>
                          <option value="8">Aug</option>
                          <option value="9">Sep</option>
                          <option value="10">Okt</option>
                          <option value="11">Nov</option>
                          <option value="12">Dec</option>
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
                      </div>
                    </div>
                  </div>
                </div>
                <div className="MainHomeGridItems-Submit_Booking">
                  <div className="bookingSubmitBox">
                    <div className="formSubmitBoxWrapper">
                      <div className="innerSubmitBoxWrapper">
                        <p style={{ margin: "0px" }}>Välj antal rum</p>
                        <p style={{ fontSize: "9.89px" }}>
                          Rummet är avsedda för {writeData.number_of_rooms}
                        </p>

                        <Form.Select
                          style={{
                            display: "inline-block",
                            width: "10em",
                          }}
                          aria-label="Default select example"
                          onChange={handleChange}
                          required
                        >
                          <option value="0">Antal rum</option>
                          <option value="1">1 rum</option>
                          <option value="2">2 rum</option>
                          <option value="3">3 rum</option>
                          <option value="4">4 rum</option>
                          <option value="5">5 rum</option>
                          <option value="6">6 rum</option>
                        </Form.Select>
                      </div>
                      <div className="innerSubmitButtonWrapper">
                        <p>
                          Totalpris för bokningen är{" "}
                          <b>
                            {" "}
                            {message *
                              writeData.hotel_price *
                              nightsChange}kr{" "}
                          </b>
                        </p>

                        <div className="positionSubmitButtonBooking">
                          {/* <button
                            onClick={handleShow}
                            style={{ justifyContent: "center" }}
                            className="defaultButton"
                          >
                            Boka hotell 
                          </button> */}
                          <Button
                            className="defaultButton"
                            type="submit"
                            onClick={handleShow}
                            value="submit"
                          >
                            Boka hotell
                          </Button>
                        </div>
                      </div>

                      <div className="innerCheckInDateWrapper">
                        <div className="positionCheckInDateBooking">
                          <p style={{ margin: "0px" }}>
                            Välj incheckningsdatum.
                          </p>
                          <p style={{ fontSize: "9.89px" }}>
                            Dagen då du planerar att checka in.
                          </p>
                          <InputGroup>
                            <Form.Control
                              required
                              onChange={handleDateChange}
                              style={{
                                color: "black",
                                textAlign: "start",
                              }}
                              placeholder="Check-in?"
                              type="date"
                              aria-describedby="basic-addon1"
                            />
                          </InputGroup>
                        </div>
                      </div>

                      <div className="innerCheckOutDateWrapper">
                        <div className="positionCheckOutDateBooking">
                          <p style={{ margin: "0px" }}>Välj antal nätter.</p>
                          <p style={{ fontSize: "9.89px" }}>
                            Välj antal nätter som ni vill bo.
                          </p>
                          <Form.Select
                            style={{
                              display: "inline-block",
                              width: "10em",
                            }}
                            aria-label="Default select example"
                            onChange={handleNightsChange}
                            required
                          >
                            <option value="0">Antal nätter</option>
                            <option value="1">1 natt</option>
                            <option value="2">2 nätter</option>
                            <option value="3">3 nätter</option>
                            <option value="4">4 nätter</option>
                            <option value="5">5 nätter</option>
                            <option value="6">6 nätter</option>
                          </Form.Select>
                        </div>
                      </div>

                      <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Tack för din bokning </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <p>
                            {" "}
                            Hej {nameMessage}, du har nu bokat{" "}
                            {writeData.hotel_name} den <b>{dateMessage}</b> till
                            ett pris av{" "}
                            <b>
                              {" "}
                              {message *
                                writeData.hotel_price *
                                nightsChange}kr{" "}
                            </b>{" "}
                            som kommer att dras från ditt kreditkort.
                          </p>
                          <br></br>

                          <h3>Bokningsuppgifter</h3>

                          <p>
                            <b>Hotel: </b>
                            {writeData.hotel_name}
                          </p>

                          <p>
                            <b>Boendet är bokat i namn: </b>
                            {nameMessage} {lastName}
                          </p>

                          <p>
                            <b>Bokningsnummer: </b>B
                            {writeData.hotel_id +
                              dateMessage +
                              nameMessage +
                              message * writeData.hotel_price}
                          </p>
                          <p>
                            <b>Pris: </b>
                            {message * writeData.hotel_price * nightsChange}kr
                          </p>
                          <p>
                            <b>Datum: </b>
                            {dateMessage}
                          </p>

                          <p>
                            <b>Antal rum: </b>
                            {message}st
                          </p>

                          <p>
                            <b>Antal nätter: </b>
                            {nightsChange}st
                          </p>
                        </Modal.Body>
                        <Modal.Footer>
                          <NavLink to="/" style={{ textDecoration: "none" }}>
                            <button
                              className="defaultButton"
                              onClick={handleClose}
                            >
                              Stäng
                            </button>
                          </NavLink>

                          <button
                            className="defaultButton"
                            onClick={handleClose}
                          >
                            Skriv ut
                          </button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </Form>

            {/* Här slutar nedre delen för booking */}
          </div>
        ))}

      <Footer />
    </>
  );
}

export { SunsetHotel, SunsetHotelcheckout };
