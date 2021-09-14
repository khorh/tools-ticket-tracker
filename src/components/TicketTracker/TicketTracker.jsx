import React from "react";
import "./TicketTracker.scss";

const TicketTracker = ({teamArr}) => {
    const ticketJsx = teamArr.map(elem => {
        return (
          <div> 
          
            <h3>{elem.name}</h3>
            <h4>{elem.role}</h4>
            <div>
              <h4>Counter</h4>
              <button>-</button>
              <button>+</button>
            </div>
          </div>
          
        )
      })
    return (
        <section className="ticket-container">
          {ticketJsx}
        </section>
    );
};

export default TicketTracker;
