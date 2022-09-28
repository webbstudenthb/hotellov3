import Homecards from "./Comp_Home_cards";
import Award from "./Comp_Home_award";

function MainHome() {
    return ( 

        <div className="MainHome">
            <div className="MainHomeGridItems">
                <Homecards/>    
                <Award/>
            </div>
                  
        </div>

     );
}

export default MainHome;