//importerar css fil
import "../styles/bookingForm.css";
//Importerar bootstrap css fil
import "bootstrap/dist/css/bootstrap.min.css";
//Importerar Button och Form från Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//Importerar componenterna BookingPayment och Booking Summery
import BookingPayment from "./Comp_Booking_payment";
import BookingSummery from "./Comp_Booking_summery";

function BookingForm() {
  return (
    <>
      <div className="MainHome-Booking">
        <div className="MainHomeGridItems_FormBooking">
          <div className="bookingFormBox">
            <h3>Bokningsinformation</h3>
            {/* Här används Bootstraps Form för att skapa ett formulär 
            Positionering och styling görs antingen i CSS filen alt. i inline styling
            */}
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
                <Form.Control as="textarea" placeholder="Specialla önskemål" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  label="Jag godkänner att informationen är korrekt"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Skicka
              </Button>
            </Form>
          </div>
        </div>

        {/* Här renderas BookingSummery och BookingPayment        */}
        <BookingSummery />
        <BookingPayment />
      </div>
    </>
  );
}

export default BookingForm;
