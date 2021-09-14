import "./App.scss";

import TicketTracker from "./components/TicketTracker/TicketTracker";

import team from "./data/team";

const App = () => {
  return (
    <div className="App">
      <header>
          <h1>Ticket Tracker</h1>
      </header>
      <main>
        <TicketTracker teamArr={team}/>
      </main>
    </div>
  );
}

export default App;
