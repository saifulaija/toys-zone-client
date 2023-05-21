import React, { useContext } from "react";
import { BsFillArrowRightCircleFill} from "react-icons/bs";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import { FaLocationArrow } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
FaLocationArrow

const ShopCard = ({ toy }) => {

  
  const navigation = useNavigation();
  if(navigation.state === 'loading'){
     return <Loader></Loader>
  }
      const navigate = useNavigate()

      const {user} = useContext(AuthContext);
      


  const  handleTo = ()=>{
      if(!user){
        alert('You have to login first to view details')
        navigate('/login')
      }
  }
 


  return (
    <div className="border shadow-md border-dashed rounded-lg border-yellow-400 outline-none p-8 bg-[#161D32] ">

      <div className=" p-4 flex items-center justify-center ">
        <img className="w-[300px] h-[200px] hover:scale-110 duration-100  rounded-lg shadow-xl" src={toy?.image} alt="" />
      </div>
      <div className="h-1 bg-yellow-700 mt-2"></div>

      <div className=" text-gray-600">
        <p>name: {toy?.toyName}</p>
        <p>category:{toy?.Category}</p>
        <p>price: ${toy?.price}</p>
        <div className="flex justify-between items-center mt-8 bottom-0">

           <div>
           <Rating style={{maxWidth:80}} value={toy?.rating} readOnly />
           </div>
          <Link to={`/homeDetails/${toy?._id}`}>
          <button onClick={handleTo} className="primary-button bg-[#5A4C42] shadow-2xl"> View details <FaLocationArrow className="inline-block"></FaLocationArrow> </button>
          </Link>
        </div>
        
      </div>
       
     


    </div>
  );
};

export default ShopCard;
