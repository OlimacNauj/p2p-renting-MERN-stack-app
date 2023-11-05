import logo from "./logo.svg";
import "./App.css";
import Add from "./components/add";
import AddsList from "./components/AddsList";
import adds from "./helpers/adds.json";
import { useState } from "react";
import "./addStyle.css";
function App() {
  const [initialAdds, setAdds] = useState(adds);
  return (
    <div className="App">
      <h1 className="AppTitle">ShareAll</h1>
      <span>
        <AddsList adds={initialAdds} />
      </span>
    </div>
  );
}

export default App;
