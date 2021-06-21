import "./App.css";
import "./index.css";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import Teams from "./Teams";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Switch>
          <Route exact path="/about" component={About} />
        </Switch>
        <Switch>
          <Route exact path="/services" component={Services} />
        </Switch>
        <Switch>
          <Route exact path="/skills" component={Skills} />
        </Switch>
        <Switch>
          <Route exact path="/teams" component={Teams} />
        </Switch>
        <Switch>
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </>
  );
}

export default App;
