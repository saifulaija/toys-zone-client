// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../provider/AuthProvider";
// import { FiDelete } from "react-icons/fi";

// import { GrUpdate } from "react-icons/gr";
// import { Link, useNavigation } from "react-router-dom";

// import useTitle from "../../hooks/useTitle";
// import Loader from "../Loader/Loader";
// import { toast } from "react-hot-toast";

// const MyToys = () => {
//   const navigation = useNavigation();
//   const [asc, setAsc] = useState(true);
//   const [toys, setToys] = useState([]);
//   if (navigation.state === "loading") {
//     return <Loader></Loader>;
//   }

//   const { user } = useContext(AuthContext);

//   console.log(user?.email);
//   useTitle("MyToys");

//   useEffect(() => {
//     fetch(
//       ` https://assignment-11-server-saifulaija.vercel.app/products/${user?.email}?sort=${
//         asc ? "asc" : "dsc"
//       }`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setToys(data);
//       });
//   }, [asc]);

//   const handleDelete = (id) => {
//     fetch(` https://assignment-11-server-saifulaija.vercel.app/setToys/${id}`, {
//       method: "DELETE",
//     })
//       .then((res) => res.json())

//       .then((data) => {
//         if (data.deletedCount > 0) {
//           toast.success("Deleted successful");
//           //   setToys(remaining);
//         }
//         const remaining = toys.filter((toy) => toy._id !== id);
//         setToys(remaining);
//       });
//   };

//   return (
//     <div className=" w-full pb-16">
//       <h1 className="heading my-10">Your All Toys</h1>

//       <div className="text-end mb-6 me-4">
//         <button
//           className="bg-[#DF437E] px-4 py-1 text-white rounded-lg"
//           onClick={() => setAsc(!asc)}
//         >
//           {asc ? "Price: High To Low" : "Price: Low To High"}
//         </button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="table w-full">
//           {/* head */}
//           <thead>
//             <tr>
//               <th>#</th>

//               <th>Image</th>
//               <th>Toy Name</th>
//               <th>Category</th>
//               <th>sub Category</th>

//               <th>Quantity</th>
//               <th>Price</th>
//               <th>Rating</th>
//               <th>Edit</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {toys.map((toy, index) => (
//               <tr>
//                 <th>{index + 1}</th>
//                 <td>
//                   <img className="w-16" src={toy.image} alt="" />
//                 </td>
//                 <td>{toy.toyName}</td>
//                 <td>{toy.Category}</td>
//                 <td>{toy.subCategory}</td>
//                 <td>{toy.quantity}</td>
//                 <td>{toy.price}</td>
//                 <td>{toy.rating}</td>
//                 <td>
//                   <Link to={`/update/${toy._id}`}>
//                     <button className=" border-[2px] border-[#DF437E] px-4 text-yellow-700 rounded-lg  font-bold uppercase ">
//                       Update{" "}
//                       <GrUpdate className="inline-block text-yellow-700 ml-2"></GrUpdate>
//                     </button>
//                   </Link>
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => handleDelete(toy._id)}
//                     className=" border-[2px] border-[#DF437E] px-4 text-yellow-700 rounded-lg  font-bold uppercase "
//                   >
//                     Delete <FiDelete className="inline-block "></FiDelete>
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyToys;



import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FiTrash2, FiEdit } from "react-icons/fi";
import { Link, useNavigation } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import Loader from "../Loader/Loader";
import { toast } from "react-hot-toast";
import { AiFillStar, AiOutlineTag, AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillClockFill } from "react-icons/bs";

const MyToys = () => {
  const navigation = useNavigation();
  const [asc, setAsc] = useState(true);
  const [toys, setToys] = useState([]);
  if (navigation.state === "loading") {
    return <Loader />;
  }

  const { user } = useContext(AuthContext);

  console.log(user?.email);
  useTitle("MyToys");

  useEffect(() => {
    fetch(
      `https://assignment-11-server-saifulaija.vercel.app/products/${user?.email}?sort=${asc ? "asc" : "dsc"}`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [asc]);

  const handleDelete = (id) => {
    fetch(`https://assignment-11-server-saifulaija.vercel.app/setToys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted successfully");
        }
        const remaining = toys.filter((toy) => toy._id !== id);
        setToys(remaining);
      });
  };

  return (
    <div className=" container mx-auto pb-16">
      <h1 className="heading my-10">Your All Toys</h1>

      <div className="text-end mb-6 me-4">
        <button
          className="bg-[#DF437E] px-4 py-1 text-white rounded-lg"
          onClick={() => setAsc(!asc)}
        >
          {asc ? "Price: High To Low" : "Price: Low To High"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {toys.map((toy, index) => (
          <div
            key={toy._id}
            className="shadow-lg rounded-lg bg-white overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover"
              src={toy.image}
              alt={toy.toyName}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{toy.toyName}</h2>
              <div className="flex items-center my-2">
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <AiFillStar className="text-yellow-500" />
                <span className="ml-2 text-gray-600">({toy.rating})</span>
              </div>
              <p className="flex items-center text-gray-600">
                <AiOutlineTag className="mr-2" /> {toy.Category}
              </p>
              <p className="flex items-center text-gray-600">
                <AiOutlineTag className="mr-2" /> {toy.subCategory}
              </p>
              <p className="flex items-center text-gray-600">
                <BsFillClockFill className="mr-2" /> {toy.quantity}
              </p>
              <p className="flex items-center text-gray-600">
                <AiOutlineShoppingCart className="mr-2" /> ${toy.price}
              </p>
            </div>
            <div className="flex items-center justify-evenly">
              <Link to={`/update/${toy._id}`}>
                <button className="text-white bg-[#DF437E] px-3 py-1 rounded-md hover:bg-[#992752] mr-2">
                  <FiEdit className="inline-block mr-1" />
                  Edit
                </button>
              </Link>
              <button onClick={() => handleDelete(toy._id)} className="text-white bg-[#DF437E] px-3 py-1 rounded-md hover:bg-[#992752] mr-2">
                <FiTrash2 className="inline-block mr-2"  />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyToys;
