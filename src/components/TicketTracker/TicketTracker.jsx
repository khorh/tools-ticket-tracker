import "./TicketTracker.scss";

import Ticket from "../Ticket/Ticket";

const TicketTracker = ({teamArr}) => {
    
    const ticketJsx = teamArr.map(elem => <Ticket elem={elem} />);

    return (
        <main className="ticket-container">
          {ticketJsx}
        </main>
    );
};

export default TicketTracker;
