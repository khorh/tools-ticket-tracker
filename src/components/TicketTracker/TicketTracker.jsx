
import "./TicketTracker.scss";

import Ticket from "../Ticket/Ticket"

const TicketTracker = ({teamArr}) => {
    
    const ticketJsx = teamArr.map(elem => <Ticket elem={elem} />);

    return (
        <section className="ticket-container">
          {ticketJsx}
        </section>
    );
};

export default TicketTracker;
