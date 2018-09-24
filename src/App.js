import React, { Component } from 'react';
import './resources/styles.css';
import { Element } from 'react-scroll';

import Header from './components/header_footer/Header';
import Featured from './components/featured/index';
import VenueInfo from './components/venueinfo/index';
import Highlights from './components/highlights/index';
import Pricing from './components/pricing/index';
import Location from './components/google-map/index';
import Footer from './components/header_footer/footer';

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: '1500px', background: 'lightblue' }}
      >
        <Header />

        <Element name="featured">
          <Featured />
        </Element>

        <Element name="venueinfo">
          <VenueInfo />
        </Element>

        <Element name="highlights">
          <Highlights />
        </Element>

        <Element name="pricing">
          <Pricing />
        </Element>

        <Element name="location">
          <Location />
        </Element>

        <Footer />
      </div>
    );
  }
}

export default App;
