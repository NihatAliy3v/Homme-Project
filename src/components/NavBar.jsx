// Router
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="newin" className="nav-link">New In</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">Home decor</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">Dining</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">Bathroom</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">Kitchen</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">Kids</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">Living room</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link">Collections</Link>
        </li>
      </ul>
    </nav>
  );
};
