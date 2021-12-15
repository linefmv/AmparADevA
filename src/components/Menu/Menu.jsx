import { Link } from "react-router-dom";
import Ampara from "../../assets/logo.png";
import "./menu.styles.css";

const Menu = () => {
  return (
    <nav>
      <ul>
        <li className="links">
          <Link to="/"><img src={Ampara} className="logo-link" alt="AmparA Devas logo"/></Link>
        </li>
        <li className="links">
          <Link to="/subscribe">Inscreva-se</Link>
        </li>
        <li className="links">
          <Link to="/contact">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
