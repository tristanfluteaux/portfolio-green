import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import Project from './components/Project';
import Home from './screens/Home';
import Header from './components/Head';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = '/'>
            <Home />
          </Route>
          <Route exact path='/project'>
            <Project />
          </Route>
          <Route exact path='/aboutme'>
            <AboutMe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
