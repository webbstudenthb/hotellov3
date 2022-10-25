//Här importeras komponenterna från booking hero, Footer, HEader samt HotelList Card
import BookingHero from "../comp/Comp_Booking_Hero";
import Footer from "../comp/Comp_Footer";
import Header from "../comp/Comp_Header";
import HotelListCard from "../comp/Comp_Hotel_list_card";

//Nedan renderas komponenterna nedan ut. Det är allstå All_hotels som routingen är kopplad till.
function All_hotels() {
  return (
    <>
      <Header />
      <BookingHero />
      <HotelListCard />
      <Footer />
    </>
  );
}

export default All_hotels;
