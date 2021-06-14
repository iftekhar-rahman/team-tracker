import './App.css';
import '@fontsource/roboto';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer/Footer';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route>
          <LeagueDetail path="/league/:idLeague"></LeagueDetail>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
