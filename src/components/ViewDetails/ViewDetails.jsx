import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import { HiOutlineMail } from "react-icons/hi";



const ViewDetails = () => {

    
     const toy = useLoaderData();

   
     const {name, image, price, rating, description, email, toyName, quantity}=toy;
     console.log(toy);
  
  

   
    
   
     const navigation = useNavigation();
     if(navigation.state === 'loading'){
        return <Loader></Loader>
     }


      return (
           <div className=' w-full bg-[#E5E4DF] p-20 '>
            <h1 className='heading p-8'>The details of {toyName}</h1>

             
             <div className='  bg-[#335882] mx-auto text-white md:flex justify-between p-6 md:p-20 rounded-md gap-8 space-y-6 md:space-y-0 items-center max-w-[800px]'>
                  <div className='w-full md:w-1/2'>
                        <img className='w-[400px] shadow-2xl rounded-lg'  src={image} alt="" />
                  </div>
                    
                  <div className=' w-full md:w-1/2'>
                        <p>Toy Name: {toyName}</p>
                        <p>seller: {name}</p>
                        <p><HiOutlineMail className='inline-block'></HiOutlineMail> {email} </p>
                        <div className="divider new max-w-full">Toy Zone</div>
                        <p>price:{price}</p>
                        <p>description:{description.slice(0,80)}</p>
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