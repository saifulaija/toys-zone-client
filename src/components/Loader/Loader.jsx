import React from 'react';
import { ImSpinner4 } from "react-icons/im";



const Loader = () => {
      return (
            <div >
 <div className='flex justify-center items-center h-[calc(100vh-68px)]'>
      <button className='bg-yellow-700 p-4 rounded-xl ms-2 text-white uppercase  font-semibold'>
          <span className='animate-spin'> <ImSpinner4 className='inline-block'></ImSpinner4> </span>  processing....
      </button>
    </div>
              
            </div>
          
      );
};

export default Loader;