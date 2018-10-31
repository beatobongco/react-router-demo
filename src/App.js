import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

const App = () => (
  <Router>
    <div className="app">
      <h1>Welcome to Corgi Viewer 3.0!</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/machine">Corgi Machine</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          path="/about"
          render={() => (
            <div className="about">
              <h2>About</h2>
              <p>
                This is a simple <code>Route</code> that uses the render prop.
              </p>
              <p>
                It is not <code>exact</code> so you can append to the route and
                still get this content.
              </p>
            </div>
          )}
        />
        <Route path="/machine" component={CorgiMachine} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Router>
);

const Home = () => (
  <div className="home">
    <h2>Home</h2>
    <p>You came here to check out corgis, yes?</p>
    <img
      alt="Corgi tongue stuck in jar"
      src="https://i.ytimg.com/vi/mRnvAhhckOM/hqdefault.jpg"
    />
  </div>
);

const FourOhFour = () => (
  <div className="fourohfour">
    <h2>Ruh oh! 404!</h2>
    <img src="/butt.gif" alt="corgi butt" />
    <p>Page not found!</p>
  </div>
);

const CorgiMachine = ({ match }) => (
  <div className="machine">
    <h2>Corgi Machine</h2>
    <Switch>
      <Route
        exact
        path={match.path}
        render={() => (
          <div>
            <p>
              What kind of corgi do you want to produce? Try these on for size:
            </p>
            <ul>
              <li>
                <Link to={`${match.url}/500/200`}>Long corgi</Link>
              </li>
              <li>
                <Link to={`${match.url}/200/500`}>Tall corgi</Link>
              </li>
            </ul>
            <p>You can also make your own corgis by playing with the url.</p>
            <ul>
              <li>
                <code>machine/width/height</code>
              </li>
              <li>
                <code>machine/dogname/width/height</code>
              </li>
              <li>
                <Link to={`${match.url}/Ein/300/300`}>Here's an example!</Link>
              </li>
            </ul>
            <small>
              Note that this doesn't have validation, it just cares about the
              number of routes
            </small>
          </div>
        )}
      />
      <Route
        exact
        path={`${match.path}/:width/:height`}
        component={CorgiSizer}
      />
      <Route
        exact
        path={`${match.path}/:dogName/:width/:height`}
        component={CorgiSizerWithName}
      />
      <Route component={FourOhFour} />
    </Switch>
  </div>
);

const CorgiSizer = ({ match }) => (
  <div className="sizer">
    <img
      src={`http://placecorgi.com/${match.params.width}/${match.params.height}`}
      alt={`A ${match.params.width}x${match.params.height} corgi`}
    />
  </div>
);

const CorgiSizerWithName = ({ match }) => (
  <div className="sizer-with-name">
    <h4>{`Hi, my name is ${match.params.dogName}!`}</h4>
    <CorgiSizer match={match} />
  </div>
);

export default App;
