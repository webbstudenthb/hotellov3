//Filtrerad data för alla hotell enligt searchbar

import Footer from "../comp/Comp_Footer";
import Header from "../comp/Comp_Header";
import Hero from "../comp/Comp_Hero";
import HotelOverview from "../comp/Comp_Hotel_overview";

const Overview = () => {
  return (
    <>
      <Header />
      <Hero />
      <HotelOverview />
      <Footer />
    </>
  );
};

export default Overview;
