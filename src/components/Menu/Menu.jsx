import { Link } from "react-router-dom";
import "./menu.styles.css";
const Menu = () => {
  return (
    <nav>
      <ul>
        <li className="links">
          <Link to="/">Home</Link>
        </li>
        <li className="links">
          <Link to="/">Inscreva-se</Link>
        </li>
        <li className="links">
          <Link to="/">Contato</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
