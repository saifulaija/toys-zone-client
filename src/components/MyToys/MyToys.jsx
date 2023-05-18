import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FiDelete } from "react-icons/fi";

import { GrUpdate } from "react-icons/gr";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toys, setToys] = useState([]);
  console.log(user?.email);

  // const url = `http://localhost:5000/allToys?email=${user?.email}`;

  const url = `http://localhost:5000/someToys?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, [user]);
  console.log(toys);

  return (
    <div className="">
      <h1 className="heading my-20">Your All Toys</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>

              <th>Image</th>
              <th>Toy Name</th>
              <th>Category</th>
              <th>sub Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Rating</th>
              <th>Edit</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {toys.map((toy, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>
                  <img className="w-16" src={toy.image} alt="" />
                </td>
                <td>{toy.toyName}</td>
                <td>{toy.Category}</td>
                <td>{toy.subCategory}</td>
                <td>{toy.quantity}</td>
                <td>{toy.price}</td>
                <td>{toy.rating}</td>
                <td>
                  <button className="bg-[#f9ebdf] px-4 py-2 text-yellow-700 rounded-lg  font-bold uppercase ">
                    Update{" "}
                    <GrUpdate className="inline-block text-yellow-700 ml-2"></GrUpdate>
                  </button>
                </td>
                <td>
                  <button className="bg-[#f9ebdf] px-4 py-2 text-yellow-700 rounded-lg  font-bold uppercase ">
                    Delete <FiDelete className="inline-block "></FiDelete>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;