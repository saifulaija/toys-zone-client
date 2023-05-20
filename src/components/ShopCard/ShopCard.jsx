import React, { useContext } from "react";
import { BsFillArrowRightCircleFill} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";

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
    <div>
      <div className="card card-side bg-[#637373] shadow-2xl p-4 text-white border-dashed hover:scale-105 duration-200 ">
        <figure>
          <img className="shadow-2xl rounded-lg" src={toy.image} alt="Movie" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{toy.Category} Car</h2>
          <p>price: {toy.price}</p>
          <p>rating: {toy.rating}</p>
           <p>details: {toy.description.slice(0,80)}...</p>

         
          <div className="divider divide-red-500">Toys Zone</div>
          <div>
          <Link to={`/homeDetails/${toy._id}`}>
          <button onClick={handleTo}  className="primary-button bg-[#FFEADB]">details <BsFillArrowRightCircleFill className="inline-block"></BsFillArrowRightCircleFill> </button>
          </Link>
          </div>
        </div>
      

      </div>
    </div>
  );
};

export default ShopCard;
