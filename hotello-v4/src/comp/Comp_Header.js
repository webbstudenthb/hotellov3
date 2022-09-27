import { NavLink } from "react-router-dom";
import { HashLink as Link} from "react-router-hash-link";


function Header() {
  return (
    <>
      <header>
        <div className="topbar_darkslate"></div>

       
          <h1>Hotello</h1>
  
        <nav>
          <ul>
            <li> <Link to="#footer" smooth>Om oss</Link></li>
            <li>
              <NavLink to="/all_hotels">Hotels</NavLink>
            </li>
            <li> <Link to="#test" smooth>Kontakt</Link></li>
          </ul>
        </nav>
      </header>

      
    </>
  );
}

export default Header;