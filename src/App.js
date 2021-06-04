import "./App.css";
import "./index.css";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import Teams from "./Teams";

function App() {
  return (
    <>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Navbar} />
          <Route exact path="/teams" component={Teams} />
        </Switch>
      </div>
    </>
  );
}

export default App;
