//HÄR IMPORTERAS CSS FILEN OCH DEN GÄLLER DÅ FÖR ALLT KOMPONENTER SÅ DEN BEÖHVER INTE LÄGGAS IN PÅ VARJE FIL
import "./App.css";
//Här importeras Routingen och Route och Router
import Routing from "./comp/Comp_Routing";


function App() {
  return (
    <div className="App">

      {/* HÄR ANVÄNDER VI BARA ROUTING FÖR ATT SKRIVA UT VILKEN KOMPONENT SOM SKALL VISAS */}
      <Routing />
    </div>
  );
}

export default App;
