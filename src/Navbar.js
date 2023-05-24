import { Link } from "react-router-dom";

function Navbar() {
    return (
          <nav className="flex justify-center font-bold italic Bar text-lg">
            <ul className="flex flex-row">
              <li className="pr-5">
                <Link to="/">HomePage</Link> 
              </li>
              <li className="pr-5">
                <Link to="/About">About</Link> 
              </li>
              <li>
                <Link to="/Contact">Contact</Link> 
              </li>
            </ul>
          </nav>
    );
}

export default Navbar;