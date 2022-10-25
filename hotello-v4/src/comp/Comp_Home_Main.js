//Importerar komponenten Homecard
import Homecards from "./Comp_Home_cards";
//Importerar komponenten award
import Award from "./Comp_Home_award";
//Importerar css fil
import "../styles/main.css";

//här sammanställs och renderaras de delkomponeneter som ligger i main på startsidan.
function MainHome() {
  return (
    // Mainhome används på de flesta sidor för att positionera alla komponenter i mitten genom GRID
    <div className="MainHome">
      <div className="MainHomeGridItems">
        <Homecards />
        <Award />
      </div>
    </div>
  );
}

export default MainHome;
