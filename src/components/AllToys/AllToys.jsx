// import React, { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
// import { Link, useNavigation } from "react-router-dom";
// import { BiStreetView } from "react-icons/bi";
// import useTitle from "../../hooks/useTitle";
// import Loader from "../Loader/Loader";

// const AllToys = () => {

//   const navigation = useNavigation();
//   if(navigation.state === 'loading'){
//      return <Loader></Loader>
//   }

//   const [searchText, setSearchText] = useState('');
//   const {user} = useContext(AuthContext);
//   const [toys, setToys] = useState([]);
//   useTitle('allToys')

//   useEffect(()=>{
//       fetch(' https://assignment-11-server-saifulaija.vercel.app/allToys')
//       .then(res=>res.json())
//       .then(data=>{
//             console.log(data);
//             setToys(data)
//       })
//   },[user])

//   const handleSearch =()=>{
//       fetch(` https://assignment-11-server-saifulaija.vercel.app/toysSearch/${searchText}`)
//       .then(res=>res.json())
//       .then(data=>{
//             setToys(data);
//       })
//   }

//   return (
//     <div className=" my-container my-6">
//       <h1 className="heading my-10"> All Toys </h1>

//      <div className="flex items-center justify-center]">

//      <div className="form-control mx-auto my-10 ">
//         <div className="input-group">
//           <input
//            onChange={(e)=>setSearchText(e.target.value)}

//             type="text"
//             placeholder="Search toys"
//             className="input input-bordered"
//           />
//           <button onClick={handleSearch} className="btn btn-square">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//      </div>

//      <div className="overflow-x-auto my_container">
//         <table className="table w-full ">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>#</th>

//               <th>Seller Name</th>
//               <th>Toy Name</th>
//               <th> Sub Category</th>

//               <th>Price</th>
//               <th>Quantity</th>

//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {toys.map((toy, index) => (
//               <tr>
//                 <th>{index + 1}</th>
//                 <td>
//                  {toy.name}
//                 </td>
//                 <td>{toy.toyName}</td>
//                 <td>{toy.Category}</td>

//                 <td>{toy.price}</td>
//                 <td>{toy.quantity}</td>

//                 <td>
//                   <Link to={`/viewDetails/${toy?._id}`}>
//                     <button className="border-[2px] px-4 rounded-lg border-[#DF437E]">
//                       details{" "}
//                       <BiStreetView className="inline-block text-yellow-700 ml-2"></BiStreetView>
//                     </button>
//                   </Link>
//                 </td>

//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//     </div>
//   );
// };

// export default AllToys;

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigation } from "react-router-dom";
import { BiStreetView } from "react-icons/bi";
import useTitle from "../../hooks/useTitle";
import Loader from "../Loader/Loader";
import { IoIosArrowForward } from "react-icons/io";
import { BsSearch } from "react-icons/bs";

const AllToys = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loader />;
  }

  const [searchText, setSearchText] = useState("");
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const toysPerPage = 6;
  const indexOfLastToy = currentPage * toysPerPage;
  const indexOfFirstToy = indexOfLastToy - toysPerPage;

  useTitle("All Toys");

  useEffect(() => {
    fetch("https://assignment-11-server-saifulaija.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, [user]);

  const handleSearch = () => {
    fetch(`https://assignment-11-server-saifulaija.vercel.app/toysSearch/${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(toys.length / toysPerPage);
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const currentToys = toys.slice(indexOfFirstToy, indexOfLastToy);

  return (
    <div className=" container mx-auto my-6">
      <h1 className="heading my-10">All Toys</h1>

      <div className="flex items-center justify-center">
        <div className="form-control mx-auto my-10">
          <div className="input-group">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Search toys"
              className="input input-bordered"
            />
            <button onClick={handleSearch} className="btn btn-square">
              <BsSearch className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {currentToys.map((toy, index) => (
          <div
            key={toy._id}
            className=" border text-white rounded-lg p-4 hover:shadow-xl transition duration-300"
          >
            <img
              src={toy.image}
              alt={toy.toyName}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <p className="text-lg font-bold text-gray-300">{toy.toyName}</p>
            <p className="text-gray-200">{toy.Category}</p>
            <p className="text-yellow-600 mt-2">${toy.price}</p>
            <div className="flex justify-between items-center mt-4">
              <Link to={`/viewDetails/${toy._id}`}>
                <button className="border-[2px] px-4 py-2 rounded-lg border-white hover:bg-gray-500 hover:text-white transition duration-300">
                  Details{" "}
                  <BiStreetView className="inline-block text-yellow-700 ml-2" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePagination(pageNumber)}
            className={`mx-1 px-4 py-2 rounded-full ${
              pageNumber === currentPage
                ? "bg-[#DF437E] text-white"
                : "bg-white text-[#DF437E] border-[#DF437E] border"
            }`}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
