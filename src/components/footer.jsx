import { NavLink } from "react-router-dom";
import "./footer.css";
export const Footer = () => {
  return (
    <div className="container footer">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item">
            <NavLink to="/" className="nav-link px-2 text-body-secondary foot">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/men" className="nav-link px-2 text-body-secondary foot">
              Men
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/women" className="nav-link px-2 text-body-secondary foot">
              Women
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/kids" className="nav-link px-2 text-body-secondary foot">
              Kids
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/beauty" className="nav-link px-2 text-body-secondary foot">
              Beauty
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/homeliving"
              className="nav-link px-2 text-body-secondary foot"
            >
              Decor
            </NavLink>
          </li>
        </ul>
        <p className="text-center text-body-secondary">© 2024 Company, Inc</p>
      </footer>
    </div>
  );
};
