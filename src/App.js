import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Accueil from "./Pages/Accueil";
import NotFound from "./Pages/NotFound";

import Menu from "./Components/Organisms/Menu";

function App() {
  return (
    <div>
      <Menu test={"ok"}/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Accueil />
          </Route>
          
          <Route path="/hello/:name" component={Accueil} />
          
          <Route path='*'>
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
