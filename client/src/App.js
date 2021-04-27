import React from "react"
import Home from "./Pages/Home";
import "./app.css"
import Navbar from "./Components/NavBar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="main">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App