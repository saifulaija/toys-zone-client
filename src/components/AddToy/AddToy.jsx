import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import add1 from "../../../public/add.jpg";
import add2 from "../../../public/add2.jpg";
import add3 from "../../../public/add3.jpg";
import add4 from "../../../public/add4.jpg";
import { AuthContext } from "../../provider/AuthProvider";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { VscFileSubmodule } from "react-icons/vsc";

import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
  const [addToy, setAddToy] = useState(null);
  const { user } = useContext(AuthContext);
  useTitle("AddToys");

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { price, ...remaining } = data;
    const toysData = {
      price: parseInt(price),
      ...remaining,
    };

    console.log(data);
    fetch(" http://localhost:5000/setToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(toysData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          Swal.fire({
            title: "success",
            text: "toy added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="w-full pb-10 md:p-10">
      <h1 className="heading py-10 ">Now You Can Added Toy</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex md:w-1/2 flex-col  bg-[#1d1d1b] p-10 rounded-md space-y-4 mx-auto"
      >
        <input
          className="text-input outline-none border-2"
          {...register("name")}
          placeholder="seller name"
          value={user?.displayName}
        />
        <input
          className="text-input"
          {...register("email", { required: true })}
          placeholder="seller email"
          value={user?.email}
        />

        <input
          className="text-input"
          {...register("toyName", { required: true })}
          placeholder="toy name"
          type="text"
        />

        <select className="text-input" {...register("Category")}>
          <option value="Sports">Sports</option>
          <option value="Police">Police</option>
          <option value="Regular">Regular</option>
        </select>
        <select className="text-input" {...register("subCategory")}>
          <option value="Big car">Big Car</option>
          <option value="Small car">Small Car</option>
        </select>
        <input
          className="text-input"
          {...register("image")}
          placeholder="image link"
          type="url"
        />
        <input
          className="text-input"
          {...register("price")}
          placeholder="price"
          type="text"
        />
        <input
          className="text-input"
          {...register("rating")}
          placeholder="rating"
          type="text"
        />
        <input
          className="text-input"
          {...register("quantity")}
          placeholder="Available quantity"
          type="text"
        />

        <input
          className="text-input"
          {...register("description")}
          placeholder="description"
        />

        <input
          className="submit-btn cursor-pointer bg-[#DF437E] px-4 tracking-widest uppercase font-bold text-white inline-block py-2 rounded-md"
          value="Post Job"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddToy;
