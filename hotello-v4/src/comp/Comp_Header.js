import { NavLink } from "react-router-dom";
import { HashLink as Link} from "react-router-hash-link";


function Header() {
  return (
    <>
      <header>
        <div className="topbar_darkslate"></div>

        <NavLink to="/">
          <h1>Hotello</h1>
        </NavLink>
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



{/* <NavLink to="/booking">Booking</NavLink>
<NavLink to="/fokus">Fokus</NavLink>
<NavLink to="/overview">Overview</NavLink> */}


{/* <Link
  to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}
/> */}