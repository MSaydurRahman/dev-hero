import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import FeedBacks from './components/FeedBacks/FeedBacks';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path='/courses'>
            <Courses></Courses>
          </Route>
          <Route path="/feedback">
            <FeedBacks></FeedBacks>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
