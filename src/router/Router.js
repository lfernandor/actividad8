import React from "react";
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";

import Home from "../views/Home";
import Excursiones from "../views/Excursiones";
import Cursos from "../views/Cursos";
import Lugares from "../views/Lugares";
import Galeria from "../views/Galeria";

function Routers() {
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
  export default Routers;