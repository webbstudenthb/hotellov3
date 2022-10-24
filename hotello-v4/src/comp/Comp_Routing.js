import {Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage_page";
import All_hotels from "../pages/All_hotels";
import Booking from "../pages/Booking_page"
import Focus from "../pages/Focus_page"
import Overview from "../pages/Overview_hotels"
import Tim from "../pages/Tim";
import "../styles/routing.css"
import AdultsOnly from "../pages/Adults_only";
import WinterHotel from "../pages/Winter_hotel";
import FamilyHotel from "../pages/Family_hotel";
import SunHotel from "../pages/Sun_hotel";



import {GrandHotel, GrandHotelcheckout} from "../pages/Hotels/GrandHotel";

import {BlueHotels, BlueHotelscheckout} from "../pages/Hotels/BlueHotels";
import {SunsetHotel, SunsetHotelcheckout} from "../pages/Hotels/SunsetHotel";
import {SalsSkiResort, SalsSkiResortcheckout} from "../pages/Hotels/SalsSkiResort";
import {HogvallenFjallHotell, HogvallenFjallHotellcheckout} from "../pages/Hotels/HogvallenFjallHotell";


function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/> }></Route>
        <Route path="/all_hotels" element={<All_hotels/> }></Route>
        <Route path="/booking" element={<Booking/> }></Route>
        <Route path="/fokus" element={<Focus/> }></Route>
        <Route path="/overview" element={<Overview/> }></Route>
        <Route path="/overview" element={<Overview/> }></Route>
        <Route path="/adultsonly" element={<AdultsOnly/> }></Route>
        <Route path="/familyhotel" element={<FamilyHotel/> }></Route>
        <Route path="/sunhotel" element={<SunHotel/> }></Route>
        <Route path="/winterhotel" element={<WinterHotel/> }></Route>
        <Route path="/sunsethotel" element={<SunsetHotel/> }></Route>
        <Route path="/salsskiresort" element={<SalsSkiResort/>}></Route>
        <Route path="/HogvallenFjallHotell" element={<HogvallenFjallHotell/>}></Route>
        <Route path="/grandhotell" element={<GrandHotel/>}></Route>
        <Route path="/bluehotels" element={<BlueHotels/>}></Route>
        <Route path="/tim" element={<Tim/> }></Route>

        <Route path="bluehotelscheckout" element={<BlueHotelscheckout/>}></Route>
        <Route path="grandhotelcheckout" element={<GrandHotelcheckout/>}></Route>
        <Route path="sunsethotelcheckout" element={<SunsetHotelcheckout/>}></Route>
        <Route path="salsskiresortcheckout" element={<SalsSkiResortcheckout/>}></Route>
        <Route path="hogvallenfjallhotellcheckout" element={<HogvallenFjallHotellcheckout/>}></Route>
      </Routes>
    </>
  );
}

export default Routing;
