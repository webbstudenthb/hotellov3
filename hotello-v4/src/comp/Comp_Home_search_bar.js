import "../styles/searchbar.css";
import Calender from "./Comp_Calender";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Searchbar = () => {
  return (
    <>
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "130px",
              }}
            >
              <div className="locationChooser">
                <div className="up_form">
                  {/* <img
                    style={{ height: "24px", paddingRight: "8px" }}
                    src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/geo-alt.svg?v=1664196942706"
                    alt="location icon"
                  /> */}

                  {/* <select style={{ border: 0, backgroundColor: "#f7f7f7" }}>
                    <option selected value="location">
                      Sverige
                    </option>
                    <option value="Spanien">Spanien</option>
                    <option value="England">England</option>

                    <option value="Italien">Italien</option>
                  </select> */}

                  <InputGroup>
                    <Form.Control
                      style={{
                        color: "black",
                        backgroundColor: "#f5f5f5",
                        border: "none",
                        textAlign: "start"
                      }}
                      placeholder="Check-in?"
                      type="date"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </div>

                <div className="down_form">
                  <div className="location">
                    <p style={{ fontWeight: "bold", marginLeft: "10px"}}>Välj land</p>
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "130px",
              }}
            >
              <div className="locationChooser">
                <div className="up_form">
                  <Calender />
                </div>

                <div className="down_form">
                  <div className="location">
                    <p style={{ fontWeight: "bold" }}>Incheckningsdatum</p>
                  </div>
                </div>
              </div>
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
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "130px",
              }}
            >
              <div className="locationChooser">
                <div className="up_form">
                  <img
                    style={{ height: "24px", paddingRight: "8px" }}
                    src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/person-plus%20(1).svg?v=1664197036235"
                    alt="location icon"
                  />

                  <select style={{ border: 0, backgroundColor: "#f7f7f7" }}>
                    <option value="1">1 person</option>
                    <option value="2">2 personer</option>
                    <option value="3">3 personer</option>

                    <option value="4">4 personer</option>
                  </select>
                </div>

                <div className="down_form">
                  <div className="location">
                    <p style={{ fontWeight: "bold" }}>Antal personer</p>
                  </div>
                </div>
              </div>
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
                fontSize: "16px",
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
