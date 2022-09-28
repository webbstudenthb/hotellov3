import { NavLink } from "react-router-dom";
import { HashLink as Link} from "react-router-hash-link";


function Header() {
  return (
    <>
      <header>
        <div className="topbar_darkslate"></div>

       
          <h1><NavLink style={{textDecoration: 'none', color: "#fb7d03"}} to="/Homepage_page">Hotello</NavLink></h1>
  
        <nav>
          <ul>
            <li> <Link style={{textDecoration: 'none', color: "black"}}  to="#footer" smooth>Om oss</Link></li>
            <li>
              <NavLink style={{textDecoration: 'none', color: "black"}}  to="/all_hotels">Hotels</NavLink>
            </li>
            <li> <Link style={{textDecoration: 'none', color: "black"}} to="#test" smooth>Kontakt</Link></li>
          </ul>
        </nav>
      </header>

      
    </>
  );
}

export default Header;