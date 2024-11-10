import { useState } from "react";
import "./bar.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LuMenu } from "react-icons/lu";
import myntra from "../photo/myntra.png";
import { NavLink } from "react-router-dom";
function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <LuMenu onClick={handleShow} className="bar" />

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <img src={myntra}></img>
        <Offcanvas.Body>
          <div
            className="contain"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <NavLink className="link" to="/men" style={{ margin: "10px 50px" }}>
              Men
            </NavLink>

            <NavLink
              className="link"
              to="/women"
              style={{ margin: "10px 50px" }}
            >
              Women
            </NavLink>

            <NavLink
              className="link"
              to="/kids"
              style={{ margin: "10px 50px" }}
            >
              Kids
            </NavLink>

            <NavLink
              className="link"
              to="/beauty"
              style={{ margin: "10px 50px" }}
            >
              Beauty
            </NavLink>

            <NavLink
              className="link"
              to="/homeliving"
              style={{ margin: "10px 50px" }}
            >
              Home & living
            </NavLink>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
