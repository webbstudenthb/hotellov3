//Filtrerad data för alla hotell enligt searchbar
import BookingHero from "../comp/Comp_Booking_Hero";
import Footer from "../comp/Comp_Footer";
import Header from "../comp/Comp_Header";
import HotelOverview from "../comp/Comp_Hotel_overview";

const Overview = () => {
  return (
    <>
      <Header />
      {/* Info från Tim
      Bytte ut Hero komponenter mot BookingHero. Min tanke är att denna skall 
      vara dynamisk kopplad till Arrayen och att den andra skall vara statisk. 
      Hero har just nu också Searchbaren som skall flyttas. Men skapade denna 
      eftersom vi ändå kommer behöva ha 2 olika.  */}
      <BookingHero />
      <div style={{ paddingTop: "109.66px", paddingBottom: "109.66px" }}>
        <HotelOverview />
      </div>
      <Footer />
    </>
  );
};

export default Overview;
