import "./App.css";
import { PageBoard } from "./components/PageBoard";
import events from "./data/upcoming-events.json";

function App() {
  return (
    <>
      <PageBoard events={events}></PageBoard>
    </>
  );
}

export default App;
