import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Breaking from './components/Breaking';
import Error404 from './components/Error404';
import Home from './components/Home';
import Nav from './components/Nav';
import Quotes from './components/Quotes';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/quotes" component={Quotes} />
        <Route path="/breaking" component={Breaking} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}

export default App;
