import React from 'react';
import { Link } from 'react-router-dom';

const EmptyState = ({message, address, label}) => {
      return (
            <div>
                  <p className='text-3xl font-mono font-semibold'>{}</p>
                 <Link type={address}> <button className='bg-rose-500 px-4 py-2 font-mono text-gray-500'>{label}</button></Link>
                  
            </div>
      );
};

export default EmptyState;