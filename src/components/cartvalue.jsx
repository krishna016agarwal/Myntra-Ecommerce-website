import "./cardvalue.css";
export const Cartvalue = ({ value, setDecrease, setincrease }) => {
  return (
    <div className="val">
      <button onClick={() => setDecrease()} className="dec">
        -
      </button>
      <p className="value">{value}</p>
      <button onClick={() => setincrease()} className="dec">
        +
      </button>
    </div>
  );
};
