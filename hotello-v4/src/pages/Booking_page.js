//Detta är en fil som inte används. Vi försökte att ta bort samt flytta koden till ett annat projekt. Men då krashade appen. Därför låter vi dem vara kvar
import BookingForm from "../comp/Comp_Booking_form_information";
import BookingHero from "../comp/Comp_Booking_Hero";
import BookingOverview from "../comp/Comp_Booking_overview";
import Footer from "../comp/Comp_Footer";
import Header from "../comp/Comp_Header";

const Booking = () => {
  return (
    <>
      <Header />
      <BookingHero />
      <div style={{ paddingTop: "109.66px", paddingBottom: "109.66px" }}>
        <BookingOverview />
        <BookingForm />
      </div>
      <Footer />
    </>
  );
};

export default Booking;
