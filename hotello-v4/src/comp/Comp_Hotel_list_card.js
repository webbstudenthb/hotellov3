import Button from "./Comp_Button";
import "../styles/hotelListCards.css";
import IconBeach from "./icons/iconBeach";
import IconRestaurant from "./icons/iconRestaurant";
import IconPool from "./icons/iconPool";
import IconWifi from "./icons/iconWifi";
import IconPoolbar from "./icons/iconPoolbar";

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
              <div className="insideImgCard">
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "0px 24px 24px 24px",
                  }}
                  src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/luxury-hotel-2021-08-26-16-16-13-utc.jpeg?v=1664359471636"
                  alt=""
                />
              </div>
              <div className="insideTextCard">
                <h2>Grand Hotel - Italiensk lyx </h2>
                <p>
                  Boka din semester hos oss på fantastisk Granne Hotel. Hos oss
                  kan du skämma bort dig rejält och njuta av våra mysiga
                  hotellrum. Boka din semester hos oss på fantastisk Catalonia
                  Plaza. Hos oss kan du skämma bort dig rejält och njuta av våra
                  mysiga hotellrum.
                </p>

                <div className="iconBoxWrapper">
                  <div className="iconImgBox">
                    <IconRestaurant />
                  </div>

                  <div className="iconTextBox">
                    <p>Restaurang</p>
                  </div>

                  <div className="iconImgBox">
                    <IconBeach />
                  </div>

                  <div className="iconTextBox">
                    <p>Strand</p>
                  </div>

                  <div className="iconImgBox">
                    <IconPool />
                  </div>

                  <div className="iconTextBox">
                    <p>Hotellpool</p>
                  </div>

                  <div className="iconImgBox">
                    <IconPoolbar />
                  </div>

                  <div className="iconTextBox">
                    <p>Poolbar</p>
                  </div>

                  <div className="iconImgBox">
                    <IconWifi />
                  </div>

                  <div className="iconTextBox">
                    <p>WiFi</p>
                  </div>
                </div>
              </div>

              <div className="hotelListPriceButtonWrapper">
                <div className="hotelListPrice">
                  <p style={{ textAlign: "end" }}>Pris från</p>
                  <h2 style={{ textAlign: "end" }}>1290 SEK</h2>
                </div>
                <div>
                  <Button />
                </div>
              </div>

              <div className="hotelListFlag">
                <img
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: "100%",
                  }}
                  src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/14b2d4d75b676cb53cf4950895de6726_swe-SE_90765.gif?v=1664460107687"
                  alt="spansk flagga"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default HotelListCard;
