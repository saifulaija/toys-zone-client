import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';


const ViewDetails = () => {

   
   const toy = useLoaderData();
   console.log(toy);

    


      return (
            <div>
                <p>{toy.price}</p>
            </div>
      );
};

export default ViewDetails;