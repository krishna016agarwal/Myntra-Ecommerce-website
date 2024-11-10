import "./bag.css";

export const Cart = ({ prop }) => {
  console.log(prop);
  return (
    <>
      <div className="item">
        <div className="image">
          <img src={prop.image} className="img2" alt="..." />
        </div>
        <div className="details">
          <div className="title">{prop.name}</div>
          <div className="title2">{prop.deatils}</div>
          <div className="quantity">Qty:{prop.amount}</div>
          <span className="price">price:{prop.price}</span>

          <span className="price2">{prop.price2}</span>
          <br></br>
          <button
            type="button"
            className="btn btn-outline-danger btt"
          
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
};
