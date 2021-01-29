import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import About from './components/pages/about/About';
import Locations from './components/pages/locations/Locations';
import ContactUs from './components/pages/contactUs/ContactUs';
import './App.css';
import { Link } from 'react-router-dom';
import doctorTools from './image-files/doctortools.jpg';

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
              <div className = 'missionStyle'>
                  <div className = 'container1'>
                    <h2 className = 'headingStyle'>
                      We endeavor to promote and improve the health of individuals in
                      the post acute setting through evidence based medical treatment
                      and prevention strategies, effective use of data,  advocacy, and
                       collaboration.
                    </h2>
                    <Link to="/about"><button to="/about"
                    className = 'btnStyle'>
                      <div className = 'learn'>
                        Learn More
                      </div>
                    </button></Link>

                </div>
              </div>
              <Locations />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
            <Route path="/locations" component={Locations} />
            <Route path="/contactUs" component={ContactUs} />
          </div>
          <ContactUs />
        </div>
      </Router>
    );
  }
}
export default App;
