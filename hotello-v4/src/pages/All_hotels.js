//Här listas alla hotell

import BookingHero from "../comp/Comp_Booking_Hero";
import Footer from "../comp/Comp_Footer";
import Header from "../comp/Comp_Header";
import HotelListCard from "../comp/Comp_Hotel_list_card";



function All_hotels() {
  return ( 
    <>
    <Header />
    <BookingHero/>
    
    <HotelListCard/>

    <Footer />
  </>
   );
}

export default All_hotels;