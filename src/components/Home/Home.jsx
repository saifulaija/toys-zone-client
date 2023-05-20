import React from 'react';
import Banner from '../Banner/Banner';
import Shop from '../Shop/Shop';
import Gallery from '../Gallery/Gallery';
import About from '../About/About';
import Service from '../Service/Service';
import Loader from '../Loader/Loader';

const Home = () => {
      return (
            <div>
                 <Banner></Banner>
                 <Gallery></Gallery>
                
                 <Shop></Shop>
                 <About></About>
                 <Service></Service>
            </div>
      );
};

export default Home;