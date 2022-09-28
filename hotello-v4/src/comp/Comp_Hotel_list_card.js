import Button from "./Comp_Button";
import "../styles/hotelListCards.css";

function HotelListCard() {
  return (
    <>
      <div className="MainHome">
        <div className="MainHomeGridItems">
          <div style={{ paddingTop: "109.66px" }}>
            <h2>Endast vuxna</h2>
            <p style={{ width: "70%", paddingBottom: "16px" }}>
              Boka din hotellen som är lugna utan barnskrik. Där ni kan sola och
              bada i en behaglig miljö.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "var(--whitesmoke)",
              height: "568.43px",
              borderRadius: "24px 24px 24px 24px",
              marginBottom: "16px",
            }}
            className="HotelListCards"
          >
            <div className="insideCardsGrid">
              <div className="insideImgCard"></div>
              <div className="insideTextCard">
                <h1>text</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, expedita. Nobis quidem hic voluptatum error fugiat beatae dolorum aperiam saepe aliquid? Beatae laudantium aut similique? Doloremque necessitatibus quibusdam ratione numquam!</p>
              </div>
              <div className="hotelListButton">
                <Button />
              </div>
            </div>
          </div>

          


          
          <div style={{ height: "100vh", backgroundColor: "lightcyan" }}>
            <p>Placeholder</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelListCard;
