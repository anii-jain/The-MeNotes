// import './App.css';
import Navbar from './Navbar';
import Home from './Home'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from'./Create';
import NoteDetails from './NoteDetails';
import NotFound from './NotFound';
import AboutUs from './AboutUs';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="Content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Create">
              <Create />
            </Route>
            <Route path="/AboutUs">
              <AboutUs />
            </Route>
            <Route path="/notes/:id">
              <NoteDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
