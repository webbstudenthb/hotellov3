import "../styles/homeCards.css";
import { NavLink } from "react-router-dom";

function Homecards() {
  return (
    <>
      <div style={{ paddingTop: "109.66px" }}>
        <h2>Välj ett av våra fantastiska resmål</h2>
        <p style={{ width: "70%", paddingBottom: "16px" }}>
          Boka din resa hos oss. Vi har resor för allt från solsemestern,
          skidsemestern till utmanande tränings och äventyrsresor.{" "}
        </p>
      </div>

      <div className="Homecards_grid">
        <NavLink style={{ textDecoration: "none" }} to="/adultsonly">
          <div className="Homecard">
            <h2>Endast vuxna</h2>
            <img
              style={{
                height: "136px",
                width: "100%",
                objectFit: "cover",
                borderRadius: "0px 24px 24px 24px",
              }}
              src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/colosseum-in-rome-italy-2021-08-26-16-34-15-utc.jpeg?v=1664265152632"
              alt="Bild på Colosseum"
            />
          </div>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/familyhotel">
        <div className="Homecard">
          <h2>Familjehotell</h2>
          <img
            style={{
              height: "136px",
              width: "100%",
              objectFit: "cover",
              borderRadius: "0px 24px 24px 24px",
            }}
            src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/kids-playing-on-the-edge-of-the-pool-2022-05-03-05-17-48-utc.jpeg?v=1664265142892"
            alt="Bild på barn vid pool"
          />
        </div>
        </NavLink>
        
      </div>

      
      <div style={{ paddingBottom: "109.66px" }} className="Homecards_grid2">

        <NavLink style={{ textDecoration: "none" }} to="/sunhotel">
        <div className="Homecard">
          <h2>Solsemester </h2>
          <img
            style={{
              height: "136px",
              width: "100%",
              objectFit: "cover",
              borderRadius: "0px 24px 24px 24px",
            }}
            src="https://cdn.glitch.me/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/woman-in-bikini-on-beach-2022-02-02-03-49-15-utc.jpeg?v=1664268040112"
            alt="Bild på en kvinna på en strand"
          />
        </div>
        </NavLink>
       
       <NavLink style={{ textDecoration: "none" }} to="/winterhotel">
       <div className="Homecard">
          <h2>Vintersport</h2>
          <img
            style={{
              height: "136px",
              width: "100%",
              objectFit: "cover",
              borderRadius: "0px 24px 24px 24px",
            }}
            src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/austria-salzburg-young-couple-skiing-on-mountain-2022-03-08-01-22-33-utc.jpeg?v=1664265142680"
            alt="Bild på en skidåkare"
          />
        </div>
       </NavLink>
        
      </div>
    </>
  );
}

export default Homecards;
