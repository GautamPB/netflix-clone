import './App.css';
import Header from './Header'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Watchlist from './Watchlist'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route path='/watchlist'>
            <Header />
            <Watchlist />
          </Route>

          <Route path='/'>
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
