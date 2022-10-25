//Här importeras Usestate
import { useState } from "react";
//Här importeras NavLink från React router för navigering
import { NavLink } from "react-router-dom";
//Import av CSS fil
import "../styles/searchbar.css";

const Searchbar = () => {
  //Använder UseState för att hämta vad användaren fyller i option i searchbaren
  //för att därefter navigera användaren vidare till rätt resekategori.
  //koden checkar helt enkelt ändringar som användaren gör i option och "skjuter"
  //in den datan i Navlink som ligger utanför knappen
  const [categoriChange, setcategoriChange] = useState("");
  const handleCategori = (event) => {
    setcategoriChange(event.target.value);
  };

  return (
    <>
      {/* MainHome används genomgående genom hela sidan och är till för att positionera 
    alla element i mitten. Detta görs via GRID. Eftersom vi ville ha searchbaren i 
    Hero men inte behöva skapa en med och en utan searchbar så har vi valt att lägga marginTop som -150px */}
      <div className="MainHome">
        <div className="MainHomeGridItems">
          <div
            style={{
              maxWidth: "1095px",
              height: "130px",
              backgroundColor: "#f7f7f7",
              borderRadius: "0px 24px 24px 24px",
              marginTop: "-150px",
            }}
            className="formWrapper"
          >
            <form className="searchForm" action="">
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
                      <img
                        style={{ height: "24px", paddingRight: "8px" }}
                        src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/earth-europe-solid.svg?v=1666687525184"
                        alt="En ikon som visar en jordglob"
                      />
                      {/* Här används select för att ge användaren val att välja mellan resekategorierna
                      selecten är kopplad itll en onChange som vid varje ändring som görs skicar detta 
                      vidare tiil useState som därefter skickar detta vidare till NavLink som omgärdar 
                      knappen. I detta fall så har själva värdet lagts till på varje option för att routingen skall ha ngt att gå på.*/}
                      <select
                        onChange={handleCategori}
                        style={{ border: 0, backgroundColor: "#f7f7f7" }}
                      >
                        <option value="/adultsonly">Endast vuxna</option>
                        <option value="/familyhotel">Familjehotell</option>
                        <option value="/sunhotel">Solsemester</option>
                        <option value="/winterhotel">Vintersport</option>
                      </select>
                    </div>

                    {/* Denna del är för att få in text under select */}
                    <div className="down_form">
                      <div className="location">
                        <p style={{ fontWeight: "bold" }}>Välj resemål</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* grid2 och grid3 används för att positionera select och button på rätt plats.  */}
              <div className="grid2"></div>
              <div className="grid3"></div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "right",
                  paddingRight: "32px",
                }}
                className="grid4"
              >
                {/* Här är NavLinken som omgärdar knappen och länkar vidare till det val som användaren gjort i selecten */}
                <NavLink to={categoriChange}>
                  <button
                    onClick={handleCategori}
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
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Searchbar;
