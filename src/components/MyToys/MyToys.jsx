import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { FiDelete } from "react-icons/fi";

import { GrUpdate } from "react-icons/gr";
import { Link, useNavigation } from "react-router-dom";

import useTitle from "../../hooks/useTitle";
import Loader from "../Loader/Loader";
import { toast } from "react-hot-toast";

const MyToys = () => {
  const navigation = useNavigation();
  const [asc, setAsc] = useState(true);
  const [toys, setToys] = useState([]);
  if (navigation.state === "loading") {
    return <Loader></Loader>;
  }

  const { user } = useContext(AuthContext);

  console.log(user?.email);
  useTitle("MyToys");

  useEffect(() => {
    fetch(
      `http://localhost:5000/products/${user?.email}?sort=${
        asc ? "asc" : "dsc"
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
      });
  }, [asc]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/setToys/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())

      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Deleted successful");
          //   setToys(remaining);
        }
        const remaining = toys.filter((toy) => toy._id !== id);
        setToys(remaining);
      });
  };

  return (
    <div className="">
      <h1 className="heading my-20">Your All Toys</h1>

      <div className="text-end mb-6 me-4">
        <button
          className="bg-rose-500 px-4 py-1 text-white rounded-lg"
          onClick={() => setAsc(!asc)}
        >
          {asc ? "Price: High To Low" : "Price: Low To High"}
        </button>
      </div>

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

              <th>Quantity</th>
              <th>Price</th>
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
                  <Link to={`/update/${toy._id}`}>
                    <button className="bg-[#f9ebdf] px-4 py-2 text-yellow-700 rounded-lg  font-bold uppercase ">
                      Update{" "}
                      <GrUpdate className="inline-block text-yellow-700 ml-2"></GrUpdate>
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(toy._id)}
                    className="bg-[#f9ebdf] px-4 py-2 text-yellow-700 rounded-lg  font-bold uppercase "
                  >
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
