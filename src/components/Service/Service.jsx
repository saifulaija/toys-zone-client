import React from 'react';
import { FaLaptopMedical } from "react-icons/fa";
import { AiFillCustomerService } from "react-icons/ai";
import { GrDeliver } from "react-icons/gr";
import Marquee from "react-fast-marquee";

AiFillCustomerService
const Service = () => {

      return (
            <div className='w-full bg-[#E5E4DF] p-16 '>
                  <h1 className='heading my-6'>our Service</h1>
                  <p className='text-center'>Toy Zone  during, and after a purchase or interaction. It involves addressing customer  inquiries, resolving issues, providing information, <br /> and ensuring customer satisfaction</p>
                 
                 <div className='grid gap-8 my-6 md:grid-cols-3 '>
                        <div className='service'  >
                              <div className='flex items-center justify-center'>
                              <FaLaptopMedical className='text-7xl text-center animate-bounce'></FaLaptopMedical>
                              </div>
                              <h3 className='text-xl font-bold '>Tecnical support.</h3>
                              <p>Customer service refers to the assistance and support provided by a company or organization to its customers before, during, and after a purchase or interaction. It involves addressing customer inquiries, resolving issues, providing information, and ensuring customer satisfaction</p>
                              <button className=' secondary-button '>now more</button>
                          </div>
                          
                          <div className='service'>
                              <div className='flex items-center justify-center'>
                              <AiFillCustomerService className='text-7xl text-center animate-bounce'></AiFillCustomerService>
                              </div>
                              <h3 className='text-xl font-bold '>Cutomer Service</h3>
                             <div>
                             <p>Customer service refers to the assistance and support provided by a company or organization to its customers before, during, and after a purchase or interaction. It involves addressing customer inquiries, resolving issues, providing information, and ensuring customer satisfaction</p>
                             </div>
                              <button className=' secondary-button '>now more</button>
                        </div>
                          
                        
                        
                        <div className='service'>
                             <div className='flex items-center justify-center'>
                             <GrDeliver  className='text-7xl text-center animate-bounce'></GrDeliver>
                             </div>
                              <h3 className='text-xl font-bold '>Home Delivery</h3>
                              <p>Home delivery service refers to the assistance and support provided by a company or organization to its customers before, during, and after a purchase or interaction. It involves addressing customer inquiries, resolving issues, providing information, and ensuring customer satisfaction</p>
                              <button className=' secondary-button '>now more</button>
                        </div>
                  </div>
                 

                  
            </div>
      );
};

export default Service;