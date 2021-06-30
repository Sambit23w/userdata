import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Router from './components/router';
import Page from './components/page.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router />
        <Container>
          <Page />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
