import React, { useContext } from "react";
import { BsFillArrowRightCircleFill} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { FaLocationArrow } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
FaLocationArrow

const ShopCard = ({ toy }) => {
      const navigate = useNavigate()

      const {user} = useContext(AuthContext);


  const  handleTo = ()=>{
     if(!user){



      Swal.fire({
            title: 'Are you sure?',
            text: "You have to log in first to view details",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {

           
            if (result.isConfirmed) {
                 
              Swal.fire(
                'Go',
                'Go to Login',
                'success'
              )
            }
            navigate('/login')
          })
    



     }
  }
 


  return (
    <div className="border shadow-md border-dashed rounded-lg border-yellow-400 outline-none p-8 bg-[#F1E7C7] hover:bg-green-300 duration-200">

      <div className=" p-4 flex items-center justify-center ">
        <img className="w-[300px] h-[200px]  rounded-lg shadow-xl" src={toy?.image} alt="" />
      </div>
      <div className="divider new">Toy Zone</div>

      <div className=" text-gray-600">
        <p>name: {toy?.toyName}</p>
        <p>price: ${toy?.price}</p>
        <div className="flex justify-between items-center mt-8 bottom-0">

           <div>
           <Rating style={{maxWidth:80}} value={toy?.rating} readOnly />
           </div>
          <button className="primary-button bg-[#F8D96D] shadow-2xl"> View details <FaLocationArrow className="inline-block"></FaLocationArrow> </button>
        </div>
        
      </div>
       
     


    </div>
  );
};

export default ShopCard;
