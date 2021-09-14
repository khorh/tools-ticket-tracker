import React, { useState } from "react";
import "./TicketTracker.scss";

const TicketTracker = ({teamArr}) => {
    const [counter, setCounter] = useState(0);

    const counterIncrement = (id) => setCounter(counter + 1);

    const counterDecrement = (id) => counter === 0 ? setCounter(0) : setCounter(counter - 1);

    const ticketJsx = teamArr.map(elem => {
        return (
          <div>
            <h3>{elem.name}</h3>
            <h4>{elem.role}</h4>
            <div data-id={elem.id}>
              <h4>Counter</h4>
              <h5>{counter}</h5>
                <button onClick={() => counterDecrement(elem.id)}>-</button>
                <button onClick={counterIncrement}>+</button>
            </div>
          </div>
        );
      });

    return (
        <section className="ticket-container">
          {ticketJsx}
        </section>
    );
};

export default TicketTracker;
