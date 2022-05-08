import { Header } from "components";
import RoutingConfigs from "configs";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RoutingConfigs />
      <Toaster />
      <Header />
    </div>
  );
}

export default App;
