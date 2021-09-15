import "./App.scss";

import Header from "./components/Header/Header";
import TicketTracker from "./components/TicketTracker/TicketTracker";

import team from "./data/team";

const App = () => {
  return (
    <div className="App">
      <Header heading="TICKET TRACKER"/>
      <TicketTracker teamArr={team}/>
    </div>
  );
};

export default App;
