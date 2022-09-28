import "../styles/searchbar.css";

const Searchbar = () => {
  return (
    <>
      <div
        style={{
          width: "177.42px",
          height: "67.77px",
          backgroundColor: "#f5f5f5",
          display: "inline-block",
          borderRadius: "24px 0px 0px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <p style={{ color: "black", alignSelf: "center" }}>Sommar</p>
        </div>
      </div>
      <div
        style={{
          width: "177.42px",
          height: "67.77px",
          backgroundColor: "#FB7D03",
          display: "inline-block",
          borderRadius: "0px 24px 0px 0px",
        }}
      >
        <div
          style={{ height: "100%", display: "flex", justifyContent: "center" }}
        >
          <p style={{ color: "white", alignSelf: "center" }}>Vinter</p>
        </div>
      </div>
      <div
        style={{
          maxWidth: "1095px",
          height: "130px",
          backgroundColor: "#f7f7f7",
          borderRadius: "0px 24px 24px 24px",
        }}
        className="formWrapper"
      >
        <form className="searchForm" action="">
          {/*------------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------
        --------------------------------Avdelarare---------------------------------------------
        ---------------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------
        ----------------------------------------------------------------------------------- */}

          <div className="grid1">
            <div   style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "130px"
           
                }}>
              <div
                className="locationChooser"
              >
                <div className="up_form">
                  <img
                    style={{ height: "24px", paddingRight: "8px" }}
                    src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/geo-alt.svg?v=1664196942706"
                    alt="location icon"
                  />

                  <select style={{ border: 0, backgroundColor: "#f7f7f7" }}>
                    <option selected value="location">
                      Plats
                    </option>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>

                    <option value="mango">Mango</option>
                  </select>
                </div>

                <div className="down_form">
                  <div className="location">
                    <p style={{fontWeight: "bold"}}>Spanien</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*------------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------
        --------------------------------Avdelarare---------------------------------------------
        ---------------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------
        ----------------------------------------------------------------------------------- */}

          <div className="grid2">
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "130px",
                }}
                className="locationChooser"
              >
                <img
                  style={{ height: "24px", paddingRight: "8px" }}
                  src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/calendar3.svg?v=1664196888370"
                  alt="location icon"
                />

                <select style={{ border: 0, backgroundColor: "#f7f7f7" }}>
                  <option selected value="location">
                    Datum
                  </option>
                  <option value="1">1 rum</option>
                  <option value="2">2 rum</option>

                  <option value="3">3 rum</option>
                </select>
              </div>
              <div className="location"></div>
            </div>
          </div>

          {/*----------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------
        --------------------------------Avdelarare---------------------------------------------
        ---------------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------
        --------------------------------------------------------------------------------------- */}

          <div className="grid3">
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "130px",
                }}
                className="locationChooser"
              >
                <img
                  style={{ height: "24px", paddingRight: "8px" }}
                  src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/person-plus%20(1).svg?v=1664197036235"
                  alt="location icon"
                />

                <select style={{ border: 0, backgroundColor: "#f7f7f7" }}>
                  <option selected value="location">
                    Antal rum
                  </option>
                  <option value="1">1 rum</option>
                  <option value="2">2 rum</option>
                  <option value="3">3 rum</option>
                  <option value="4">4 rum</option>
                </select>
              </div>
              <div className="location"></div>
            </div>
          </div>

          {/*----------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------
        --------------------------------Avdelarare---------------------------------------------
        ---------------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------
        ---------------------------------------------------------------------------------------
        --------------------------------------------------------------------------------------- */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "right",
              paddingRight: "32px",
            }}
            className="grid4"
          >
            <button
              style={{
                backgroundColor: "#FB7D03",
                width: "180px",
                height: "63px",
                borderRadius: "24px 24px 24px 24px",
                border: "none",
                color: "white",
                fontSize: "16px"
              }}
            >
              Sök
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Searchbar;
