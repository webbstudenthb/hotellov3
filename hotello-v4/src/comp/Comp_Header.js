//Importerar react router NavLink samt HashLink as Link
import { NavLink } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
//Importerar css fil
import "../styles/headerFooter.css";

function Header() {
  return (
    <>
      {/* Headern består av en enklare styling för att positionera alla länkar och navigeringen i headern styrs via react router. 
    För att "hoppa ner" till rätt delar så har HashLink as Link används på 2 av länkarna. 
    Vi använder även inline styling för lättare styling i form av att ta bort understeck samt ändra textfärgen.
    I css filen ligger det också styling för nav. 
  
    */}
      <header>
        <div className="topbar_darkslate"></div>

        <h1>
          <NavLink style={{ textDecoration: "none", color: "#fb7d03" }} to="/">
            Hotello
          </NavLink>
        </h1>
        <nav>
          <ul>
            <li>
              {" "}
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="#aboutUs"
                smooth
              >
                Om oss
              </Link>
            </li>
            <li>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/all_hotels"
              >
                Våra hotell
              </NavLink>
            </li>
            <li>
              {" "}
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="#contactInformation"
                smooth
              >
                Kontakt
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
