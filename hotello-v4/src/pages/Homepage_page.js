import Footer from "../comp/Comp_Footer";
import Header from "../comp/Comp_Header";
import Hero from "../comp/Comp_Hero";
import MainHome from "../comp/Comp_Home_Main";
import Searchbar from "../comp/Comp_Home_search_bar";

//Homepage är den huvudkomponent som användaren kommer till först. Den besgtår av flera delkomponenter i form av Header, Hero, Searchbar, Mainhome och Footer. MainHome består i sin tur av två delkomponener i form av Home_Cards och Home_Award
const Homepage = () => {
  return (
    <>
      <Header />
      <Hero />  

      <Searchbar/>
      <MainHome />
      <Footer />
      
    </>
  );
};

export default Homepage;