import React from "react";
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/excursiones">Excursiones</Link>
            </li>
            <li>
              <Link to="/cursos">Cursos</Link>
            </li>
            <li>
              <Link to="/lugares">Lugares</Link>
            </li>
            <li>
              <Link to="/galeria">Galeria</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/galeria">
            <Galeria/>
          </Route>
          <Route path="/lugares">
            <Lugares />
          </Route>
          <Route path="/excursiones">
            <Excursiones/>
          </Route>
          <Route path="/cursos">
            <Cursos />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );   
}

function Home() {
  return <h2>Home</h2>;
}

function Cursos() {
  return <h2>Cursos</h2>;
}

function Excursiones() {
  return <h2>Excursiones</h2>;
}

function Lugares() {
  return <h2>Lugares</h2>;
}

function Galeria() {
  return <h2>Galeria</h2>;
}