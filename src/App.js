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
          <section>
            <Route exact path="/" component={Home} />
          </section>
        </Switch>
        <Switch>
          <section>
            <Route exact path="/about" component={About} />
          </section>
        </Switch>
        <Switch>
          <section>
            <Route exact path="/services" component={Services} />
          </section>
        </Switch>
        <Switch>
          <section>
            <Route exact path="/skills" component={Skills} />
          </section>
        </Switch>
        <Switch>
          <section>
            <Route exact path="/teams" component={Teams} />
          </section>
        </Switch>
        <Switch>
          <section>
            <Route exact path="/contact" component={Contact} />
          </section>
        </Switch>
      </div>
    </>
  );
}

export default App;
