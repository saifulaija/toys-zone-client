import React from 'react';
import Banner from '../Banner/Banner';
import Shop from '../Shop/Shop';
import Gallery from '../Gallery/Gallery';
import About from '../About/About';

const Home = () => {
      return (
            <div>
                 <Banner></Banner>
                 <Gallery></Gallery>
                 <About></About>
                 <Shop></Shop>
            </div>
      );
};

export default Home;