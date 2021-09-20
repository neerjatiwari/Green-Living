import './App.css';
import About from './Components/About';
import './Components/nav.css';
import Shopping from './Components/Shopping';
import Slid from './Components/Slider';
import Task from './Components/Task';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <div className="Nav">
            <img src="./img/logo.png" alt="" className="Logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>About us</li>
                <li><Link to="/Task">Task</Link></li>
                <li>Incentive</li>
                <li><Link to="/Shopping">Shop</Link></li>
                <li>Contact Us</li>
            </ul>
            <h3>Login/Sign Up</h3>
            <img src="./img/user.png" alt="" className="User"/>
        </div>
        <Switch>
          <Route path="/Shopping">
            <Shopping />
          </Route>
          <Route path="/Task">
            <Task />
          </Route>
          <Route path="/">
            <Slid />
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
