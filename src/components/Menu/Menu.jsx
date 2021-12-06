import { Link } from "react-router-dom";
import './menu.styles.css';
const Menu = () => {
  return (
    <nav>
    <ul>
      <li className="links">
        <Link to="/">Home</Link>
      </li>
    </ul>
    </nav>
  );
};

export default Menu;
          