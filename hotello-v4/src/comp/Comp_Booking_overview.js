import "../styles/bookingOverview.css";

function BookingOverview() {
  return (
    <>
      <div className="MainHome">
        <div className="MainHomeGridItems">
          <div
            style={{
              backgroundColor: "var(--whitesmoke)",
              height: "364px",
              borderRadius: "24px 24px 24px 24px",
              marginBottom: "16px",
            }}
            className="BookingHotelListCards"
          >
            <div className="insideCardsGrid">
              <div className="insideImgCard">
                <img
                  style={{
                    height: "300px",
                    width: "100%",
                    borderRadius: "0px 24px 24px 24px",
                    marginTop: "32px",
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

export default BookingOverview;
