import { HashLink as Link} from "react-router-hash-link";
import "../styles/headerFooter.css";

function Footer() {

  return (
  <>

<footer>

<ul className="column1">
  <li style={{textDecoration: 'none'}}><h2><Link className="h2Hotello"  to="/">Hotello</Link></h2></li>
  <p id="aboutUs" >Boka din semester på ett av våra underbara hotel. Vi har olika typer av rum för par, barnfamiljen och festmänniskorna</p>
</ul>

<ul className="column2"> 
  <li><h3>Länkar</h3></li>
  <li>Alla hotell</li>
  <li>Integritetspolicy</li>
</ul>
 
<ul className="column3">
  <li><h3>Resemål</h3></li>
  <li>Endast vuxna</li>
  <li>Familjehotell</li>
  <li>Solsemester</li>
  <li>Vintersport</li>
</ul>

<ul className="column4">
  <li><h3>Kontakt</h3></li>
  <li><p className="address">Sverige <br></br>
  Högskolan i Borås <br></br>
  Allegatan 1, 50332 Borås</p></li>
  <li id="contactInformation">Alla hotell</li>
  <li>Integritetspolicy</li>
</ul>

<div className="copyright">
<p className="copyrightText">© 2022 HOTELLO All rights reserver</p>  
</div>
    
</footer>
</>
  )
}

export default Footer;