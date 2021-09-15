import { useState } from "react";
import "./Ticket.scss";

const Ticket = ({elem}) => {
  const [counter, setCounter] = useState(0);
  const counterIncrement = () => setCounter(counter + 1);
  const counterDecrement = () => counter === 0 ? setCounter(0) : setCounter(counter - 1);

  return (
    <div className="ticket">
      <div>
        <h3 className="ticket__name">{elem.name}</h3>
        <h4 className="ticket__role">{elem.role}</h4>
      </div>
      <div className="ticket__counter-container">
        <h4 className="ticket__counter">Counter</h4>
        <h5 className="ticket__count">{counter}</h5>
        <button className="ticket__btn" onClick={counterDecrement}>-</button>
        <button className="ticket__btn" onClick={counterIncrement}>+</button>
      </div>
    </div>
  );
};

export default Ticket;
