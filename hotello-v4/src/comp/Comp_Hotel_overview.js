
import "../styles/hotelOverview.css";
import { NavLink } from "react-router-dom";
import "../styles/bookingOverview.css";
import Button from "../comp/Comp_Button";

{/** Hämta info från Hotell-array samt userstate*/}



function HotelOverview() {

    {/**Sätta en const till Arrayen och userstate */}
    return ( 
        <>
        <div className="HotelOverviewMain">


            <div className="OverviewBox">
                
                
                    <h2 className="OverviewHotelName">{/**JS till Array */}Sunset Hotel - Kurreklubben
                    <img style={{height: "2rem", margin: "-1rem auto auto 2rem"}} className="starsForHotel"
                     src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/Star.svg?v=1664379295785" alt="Stjärna" />
                     </h2>
                    <div className="starsForHotel"> 
                    
            
                     {/** Skriva ut antal stjärnor för valt hotell från array*/}

                       
                       <div className="iconsForHotel"> <img style={{margin: "1rem"}} src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/wifi-solid.svg?v=1664459875956" alt="Ikon för trådlöst internet" /></div>
                       {/**Skriva ut ikoner för valt hotell */}
                
                
                      <p>{/**JS till Array */}Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor incididunt ut labore et dolore 
                     magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                      irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                       fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                       sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut 
                       perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                       doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
                        inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                         Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                          sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                           Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                           adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                            dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum 
                            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                            Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, 
                            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                        
                            
            </div>
            </div>
            <div className="HotelInfoSummary">
            <h3 className="HeaderSummary">Bra att veta:</h3>
            <ul>
                <li>Incheckning:</li>
                <li>Utcheckning:</li>
                <li>Städning:</li>
                <li>Frukost:</li>
                <li>Rökning:</li>
                <li>Transfer:</li>
                <li>Närmaste flygplats:</li>
                <li>Avbokning:</li>
            </ul>
            <div className="priceFrom">

                <p style={{margin: "auto auto -10px 1rem"}}>pris från:</p>
                <h1 style={{color: "black"}}>
                    1295 kr</h1>
            <div className="buttons">
            <Button style={{margin: "100px"}}/>
            </div>
            </div>
         </div>
         <div className="winterSport">
            <h2
            style={{margin: "21px"}}>
                Vintersport</h2>
            <img 
            style={{height: "136px", width: "100%",   objectFit: "cover", borderRadius: "0px 24px 24px 24px"}}
            src="https://cdn.glitch.global/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/austria-salzburg-young-couple-skiing-on-mountain-2022-03-08-01-22-33-utc.jpeg?v=1664265142680">
                
            </img>
            </div>
         <div className="summerVacation">
            <h2 
            style={{margin: "21px"}}>
            Solsemester</h2>
            <img 
            style={{height: "136px", width: "100%",   objectFit: "cover", borderRadius: "0px 24px 24px 24px"}}
            src="https://cdn.glitch.me/b8bfc950-5347-4077-bd94-1e2db9ffd2ee/woman-in-bikini-on-beach-2022-02-02-03-49-15-utc.jpeg?v=1664268040112">
                
            </img>
            </div>
        </div>
 
        </>
     );
  }
  
  export default HotelOverview;