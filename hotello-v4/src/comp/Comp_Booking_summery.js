//Detta är en fil som inte används. Vi försökte att ta bort samt flytta koden till ett annat projekt. Men då krashade appen. Därför låter vi dem vara kvar

import "../styles/bookingSummery.css";
import "../styles/bookingForm.css";


function BookingSummery() {
  return (
    <>
      <div className="MainHomeGridItems-Summery_Booking">
        <div className="bookingSummeryBox">
          <h3>Sammanfattning</h3>
            <div className="innerBookingSummeryBox">
                <p style={{fontWeight: "bold"}}>Hotell</p>
                <p>Grand Hotel - Italiensk lyx</p>
                <p style={{fontWeight: "bold"}}>Antal rum</p>
                <p>1 rum för 2 personer</p>
                <p style={{fontWeight: "bold"}}>Datum</p>
                <p>{}</p>
                <p style={{fontWeight: "bold"}}>Pris</p>
                <p >{}</p>
                <p style={{fontWeight: "bold"}}>Avbokningsavgift</p>
                <p>{}</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default BookingSummery;
