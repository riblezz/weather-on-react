import "./styles/App.css";
import LeftCard from "./components/LeftCard";
import CenterCard from "./components/CentralCard";
import RightCard from "./components/RightCard";

function App() {
  return (
    <div className="container-card">
      <LeftCard />
      <CenterCard />
      <RightCard />
    </div>
  )
}

export default App;
