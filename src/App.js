/* eslint-disable indent */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import Projects from './Projects';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/projects">Projects</Link>
          <Link className="nav-link" to="/about">About</Link>
        </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/projects">
                <Projects />
              </Route>
              <Route exact path="/about">
                <AboutMe />
              </Route>
            </Switch>
      </div>
    </Router>
  );
}

export default App;
