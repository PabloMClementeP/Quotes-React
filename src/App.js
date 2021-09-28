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
import Footer from './components/Footer';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

const TitleHeader = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 70px;
  color: #ecf0f1;
  text-align: center;
`;

function App() {
  return (
    <Router>
      <TitleHeader>Random Quotes</TitleHeader>
      <Nav />
      <Contenedor>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/quotes" component={Quotes} />
          <Route path="/breaking" component={Breaking} />
          <Route path="*" component={Error404} />
        </Switch>
        <Footer />
      </Contenedor>
    </Router>
  );
}

export default App;
