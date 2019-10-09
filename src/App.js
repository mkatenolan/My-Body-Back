import React from "react";
import "./App.css";
import {
  Redirect,
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Menu from "./components/Menu/Menu";
import Welcome from "./components/Welcome/Welcome";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import FeelingOverwhelmed from "./components/FeelingOverwhelmed/FeelingOverwhelmed";
import HelpingOurselves from "./components/HelpingOurselves/HelpingOurselves";
import MyAppointment from "./components/MyAppointment/MyAppointment";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Emotions from "./components/Emotions/Emotions";
import FeelingBetter from "./components/FeelingBetter/FeelingBetter";
import HelpSupport from "./components/HelpSupport/HelpSupport";
import HelpSupport from "./components/NotesOfLove/NotesOfLove";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={PrivacyPolicy} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/about" component={About} />
          <Route path="/feelingoverwhelmed" component={FeelingOverwhelmed} />
          <Route path="/helpingourselves" component={HelpingOurselves} />
          <Route path="/myappointment" component={MyAppointment} />
          <Route path="/emotions" component={Emotions} />
          <Route path="/feelingbetter" component={FeelingBetter} />
          <Route path="/helpandsupport" component={HelpSupport} />
          <Route path="/notesoflove" component={NotesOfLove} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
