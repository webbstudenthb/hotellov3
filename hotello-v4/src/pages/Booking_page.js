//Bokningssidan där man kommer in efter man klickat på boka från Focus page.
//Betala = Popup

import BookingForm from "../comp/Comp_Booking_form_information";
import BookingOverview from "../comp/Comp_Booking_overview";
import Footer from "../comp/Comp_Footer";
import Header from "../comp/Comp_Header";

const Booking = () => {
  return (
    <>
      <Header />
      <BookingOverview />
      <BookingForm />
      <Footer />
    </>
  );
};

export default Booking;
