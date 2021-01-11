import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./views/Home/Home.jsx"
import DiscordBot from "./views/DiscordBot/DiscordBot.jsx"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/DiscordBot" component = {DiscordBot}/>
        <Route path = "*" componenet = {() => "Error 404, page not found!"}/>
      </Switch>
    </Router>
  );
}

export default App;
