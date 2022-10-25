//Detta är en fil som inte används. Vi försökte att ta bort samt flytta koden till ett annat projekt. Men då krashade appen. Därför låter vi dem vara kvar
import Footer from "../comp/Comp_Footer";
import Header from "../comp/Comp_Header";
import Hero from "../comp/Comp_Hero";
import HotelListCard from "../comp/Comp_Hotel_list_card";

const Focus = () => {
  return (
    <>
      <Header />
      <Hero/>

        <div className="MainHome">
          <div className="MainHomeGridItems">
            <div style={{ paddingTop: "109.66px" }}>
              <h2>Endast vuxna</h2>
              <p style={{ width: "70%", paddingBottom: "16px" }}>
                Boka din hotellen som är lugna utan barnskrik. Där ni kan sola och
                bada i en behaglig miljö.
              </p>
            </div>
          </div>
        </div>

      <HotelListCard />

      <Footer />
    </>
  );
};

export default Focus;
