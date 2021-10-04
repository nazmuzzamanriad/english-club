import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Services from './Components/Services/Services';
import Instructors from './Components/Instructors/Instructors';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/Aboutus/AboutUs';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>

          </Route>
          <Route path="/services">
            <Services></Services>

          </Route>
          <Route path="/instructors">
            <Instructors></Instructors>

          </Route>
          <Route path="/aboutus">
            <AboutUs></AboutUs>

          </Route>
          <Route path="/">
            <Home></Home>

          </Route>
          <Route path="*">
            <NotFound></NotFound>

          </Route>
        </Switch>

        <Footer></Footer>
      </Router>

    </div >
  );
}

export default App;
