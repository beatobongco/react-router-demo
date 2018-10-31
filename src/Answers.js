import React from 'react';
import {
  // BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Home = () => <h2>I am the home from BasicRouting</h2>;
const Home2 = () => <h2>I am the home from NestedRouting</h2>;
const About = () => <h2>I am the about from BasicRouting</h2>;
const About2 = () => <h2>I am the About from NestedRouting</h2>;
const Users = () => <h2>Users</h2>;

const BasicRouting = ({ match }) => (
  // We can remove since we only need one top-level Router
  // <Router>
  <div>
    {JSON.stringify(match)}
    <nav>
      <ul>
        <li>
          <Link to={`${match.url}`}>Home</Link>
        </li>
        <li>
          <Link to={`${match.url}/about`}>About</Link>
        </li>
        <li>
          <Link to={`${match.url}/users`}>Users</Link>
        </li>
      </ul>
    </nav>

    <Route path={`${match.path}`} exact component={Home} />
    <Route path={`${match.path}/about`} component={About} />
    <Route path={`${match.path}/users`} component={Users} />
  </div>
  // </Router>
);

// Heuristic
// nested Routes, use match.path
// nested Links, use match.url
// Consider the route "/users/:userId". match.path would be "/users/:userId" while match.url would have the :userId value filled in, e.g. "users/5

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
  // <Router>
  <div>
    <ul>
      <li>
        <Link to={`${match.url}`}>Home</Link>
      </li>
      <li>
        <Link to={`${match.url}/about`}>About</Link>
      </li>
      <li>
        <Link to={`${match.url}/topics`}>Topics</Link>
      </li>
    </ul>
    <Route exact path={`${match.path}/`} component={Home2} />
    <Route path={`${match.path}/about`} component={About2} />
    <Route path={`${match.path}/topics`} component={Topics} />
  </div>
  // </Router>
);

// Bonus 1: If you go to localhost:3000/nested/ and click another link you will an error. What is it?
// Bonus 2: How do you fix it?

export { BasicRouting, NestedRouting };
