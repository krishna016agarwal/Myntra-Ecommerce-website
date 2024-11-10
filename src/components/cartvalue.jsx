import "./cardvalue.css";
export const Cartvalue = ({ value, setDecrease, setincrease }) => {
  return (
    <div className="val">
      <span onClick={() => setDecrease()} className="dec countdown">
        -
      </span>
      <span className="value countdown">{value}</span>
      <span onClick={() => setincrease()} className="dec countdown">
        +
      </span>
    </div>
  );
};
