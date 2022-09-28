import {Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage_page";
import All_hotels from "../pages/All_hotels";
import Booking from "../pages/Booking_page"
import Focus from "../pages/Focus_page"
import Overview from "../pages/Overview_hotels"
import Tim from "../pages/Tim";
import "../styles/routing.css"


function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage/> }></Route>
        <Route path="/all_hotels" element={<All_hotels/> }></Route>
        <Route path="/booking" element={<Booking/> }></Route>
        <Route path="/fokus" element={<Focus/> }></Route>
        <Route path="/overview" element={<Overview/> }></Route>
    
        <Route path="/tim" element={<Tim/> }></Route>
      </Routes>
    </>
  );
}

export default Routing;
