import "./bag.css";
import { Cartvalue } from "./cartvalue";
import { useCartContext } from "./cartcontext";
import React, { useEffect, useState } from "react";

export const Cart = ({ prop }) => {

  const [value, setvalue] = useState(prop.amount);
  const setincrease = () => {
    value < 10 ? setvalue(value + 1) : setvalue(10);
  };
  const setDecrease = () => {
    value > 1 ? setvalue(value - 1) : setvalue(1);
  };
  const { removeItem } = useCartContext();
  
  
  return (
    <>
      <div className="item">
        <div className="image">
          <img src={prop.image} className="img2" alt="..." />
        </div>
        <div className="details">
          <div className="title">{prop.name}</div>
          <div className="title2">{prop.deatils}</div>
          <div className="quantity">
            Qty:{value}
            <Cartvalue
              setDecrease={setDecrease}
              setincrease={setincrease}
              value={value}
            ></Cartvalue>
          </div>
          <span className="price">price:{prop.price}</span>

          <span className="price2">{prop.price2}</span>
          <br></br>
          <button
            type="button"
            className="btn btn-outline-danger btt"
            onClick={() => removeItem(prop.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};
