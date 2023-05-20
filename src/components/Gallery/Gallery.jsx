import React from 'react';

import image1 from '../../../public/gallery1.jpg'
import image2 from '../../../public/gallery2.jpg'
import image3 from '../../../public/gallery3.jpg'
import image4 from '../../../public/gallery4.jpg'
import image5 from '../../../public/gallery5.jpg'
import image6 from '../../../public/gallery6.jpg'
import image7 from '../../../public/gallery7.jpg'
import image8 from '../../../public/gallery8.jpg'
import image9 from '../../../public/gallery9.jpg'

const Gallery = () => {
      return (
            <div className='w-full bg-black p-28 '>
                  <h1 className='heading mb-10'>Gallery </h1>
                  <div className='grid md:grid-cols-3 gap-4 my_container '>
                        <img className='image' src={image1} alt="" />
                        <img className='image'  src={image2} alt="" />
                        <img className='image'  src={image3} alt="" />
                        <img className='image'  src={image4} alt="" />
                        <img className='image'  src={image5} alt="" />
                        <img className='image'  src={image6} alt="" />
                        <img className='image'  src={image7} alt="" />
                        <img className='image'  src={image8} alt="" />
                        <img className='image'  src={image9} alt="" />
                        
                  </div>
            </div>
      );
};

export default Gallery;