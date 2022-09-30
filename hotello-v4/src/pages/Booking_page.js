//Bokningssidan där man kommer in efter man klickat på boka från Focus page. 
//Betala = Popup

import BookingOverview from "../comp/Comp_Booking_overview";
import Footer from "../comp/Comp_Footer";
import Header from "../comp/Comp_Header";
import Hero from "../comp/Comp_Hero"

const Booking= () => {
  return (
    <>
     <Header />
     
       <BookingOverview/>
     
      <Footer />
     
    </>
  );
};

export default Booking;




