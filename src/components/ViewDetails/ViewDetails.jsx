import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { HiOutlineMail } from "react-icons/hi";



const ViewDetails = () => {

   
   const toy = useLoaderData();
   const {name, image, price, rating, description, email, toyName, quantity}=toy;
   console.log(toy);

    


      return (
           <div className=' w-full bg-black max-h-vh '>
            <h1 className='heading mt-10'>The details of {toyName}</h1>

             
             <div className=' my-32 border-2 border-dashed border-red-200 mx-auto primary-color text-gray-500 md:flex justify-between p-20 rounded-md  items-center max-w-[800px]'>
                  <div className='md:w-1/2'>
                        <img className='w-[300px] shadow-2xl rounded-lg'  src={image} alt="" />
                  </div>
                    
                  <div className='md:w-1/2'>
                        <p>Toy Name: {toyName}</p>
                        <p>seller: {name}</p>
                        <p><HiOutlineMail className='inline-block'></HiOutlineMail> {email} </p>
                        <div className="divider max-w-full">Toy Zone</div>
                        <p>price:{price}</p>
                        <p>description:{description}</p>
                        <p>Available quantity:{quantity}</p>
                       <div>
                       <p>rating:{rating}</p>
                       </div>



                  </div>
             </div>
           </div>
      );
};

export default ViewDetails;