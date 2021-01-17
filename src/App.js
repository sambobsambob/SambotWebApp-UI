import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import withAuth from "./components/Auth/WithAuth.jsx"
import Home from "./views/Home/Home.jsx"
import Login from "./views/Login/Login.jsx"
import DiscordBot from "./views/DiscordBot/DiscordBot.jsx"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/" component = {Home}/>
        <Route exact path = "/Login" component = {Login}/>
        <Route exact path = "/DiscordBot" component = {withAuth(DiscordBot)}/>
        <Route path = "*" componenet = {() => "Error 404, page not found!"}/>
      </Switch>
    </Router>
  );
}

export default App;
