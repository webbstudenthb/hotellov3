//Här listas alla hotell

import Footer from "../comp/Comp_Footer";
import Header from "../comp/Comp_Header";
import HotelListCard from "../comp/Comp_Hotel_list_card";



function All_hotels() {
  return ( 
    <>
    <Header />
    
    <HotelListCard/>

    <Footer />
  </>
   );
}

export default All_hotels;