import "../styles/bookingPayment.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function BookingPayment() {
  //   const getInputPaymentData = { paymentInput };
  // let getPaymentData = "1234567890123456";
  // let res = [...getPaymentData]
  //   .map((d, i) => (i % 4 == 0 ? " " + d : d))
  //   .join("")
  //   .trim();

  // console.log(res);
  return (
    <>
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
    </>
  );
}

export default BookingPayment;
