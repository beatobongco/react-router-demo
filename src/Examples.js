import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

const Home = () => <h2>I am the home from BasicRouting</h2>;
const Home2 = () => <h2>I am the home from NestedRouting</h2>;
const About = () => <h2>I am the about from BasicRouting</h2>;
const About2 = () => <h2>I am the About from NestedRouting</h2>;
const Users = () => <h2>Users</h2>;

const BasicRouting = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </div>
  </Router>
);

const Topic = ({ match }) => <h3>Requested param: {match.params.id}</h3>;

const Topics = ({ match }) => (
  <div>
    <p>The contents of the match object are...</p>
    <pre>{JSON.stringify(match)}</pre>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/one`}>One</Link>
      </li>
      <li>
        <Link to={`${match.url}/two`}>Two</Link>
      </li>
    </ul>

    <Route path={`${match.path}/:id`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const NestedRouting = ({ match }) => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <Route exact path="/" component={Home2} />
      <Route path="/about" component={About2} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

// Bonus 1: If you go to localhost:3000/nested/ and click another link you will an error. What is it?
// Bonus 2: How do you fix it?

export { BasicRouting, NestedRouting };
