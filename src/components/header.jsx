import "./header.css";
import { useCartContext } from "./cartcontext";


import { IoPersonOutline } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import Example from "./sidebar";

export const Header = () => {
  const { cart } = useCartContext();
  var itemscount=0;
  {
    cart.map((ele) => itemscount+=ele.amount);
  }
  return (
    <>
      <div className="header">
        <Example></Example>
        <div className="img">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://brandlogos.net/wp-content/uploads/2022/03/myntra-logo-brandlogos.net_-512x512.png"
              alt="Myntra"
              width="50"
            />
          </NavLink>
        </div>
        <div className="groups">
          <ul className="list">
            <li className="nav">
              <NavLink className="link" to="/men">
                Men
              </NavLink>
            </li>
            <li className="nav">
              <NavLink className="link" to="/women">
                Women
              </NavLink>
            </li>
            <li className="nav">
              <NavLink className="link" to="/kids">
                Kids
              </NavLink>
            </li>

            <li className="nav">
              <NavLink className="link" to="/beauty">
                Beauty
              </NavLink>
            </li>
            <li className="nav">
              <NavLink className="link" to="/homeliving">
                Home & living
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="search">
          <HiOutlineMagnifyingGlass />
          <input
            className="input"
            type="text"
            placeholder="Search for products,brands and more"
          ></input>
        </div>

        <NavLink className="profile adjust" to="/login">
          <IoPersonOutline />
          <p>Profile</p>
        </NavLink>
        <NavLink className="bag adjust" to="/bag">
     
        <div className="box">
            
        <BsHandbag />
            
            <div className="circle">
              {itemscount}
            </div>
        </div>
          

          <p>Bag</p>
        </NavLink>
      </div>
    </>
  );
};
