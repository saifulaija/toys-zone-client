import React from "react";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { VscFileSubmodule } from "react-icons/vsc";

import Loader from "../Loader/Loader";
import { toast } from "react-hot-toast";

const Update = () => {
  const navigation = useNavigation();
  const navigate = useNavigate();

  const toy = useLoaderData();
  console.log(toy);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { price, description, quantity } = data;
    const updatedData = {
      price: parseFloat(price),
      description,
      quantity,
    };
    console.log(updatedData);
    fetch(`http://localhost:5000/setToys/${toy?._id} `, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.modifiedCount) {
          navigate("/myToys");
          reset();
          toast.success("Updated successfull");
        }
      });
  };

  if (navigation.state === "loading") {
    return <Loader></Loader>;
  }

  return (
    <div className="w-full md:p-20">
      <h1 className="heading py-10 "> You Can Update Toy</h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" bg-[#669bbc] rounded-xl flex w-full md:w-1/2 flex-col p-10 shadow-2xl space-y-4 mx-auto"
      >
        <div className="flex flex-col">
          <label className="text-neutral-300 font-bold font-mono">Price</label>
          <input
            className="text-input"
            {...register("price")}
            placeholder="update price"
            defaultValue={toy.price}
            type="number"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-neutral-300 font-bold font-mono">
            Quantity
          </label>
          <input
            className="text-input"
            {...register("quantity")}
            placeholder="update Available quantity"
            defaultValue={toy.quantity}
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="text-neutral-300 font-bold font-mono">
            Description
          </label>
          <input
            className="text-input"
            {...register("description")}
            defaultValue={toy.description}
            placeholder="update description"
          />
        </div>
        <input
          className="submit-btn cursor-pointer bg-rose-500 px-4 tracking-widest uppercase font-bold text-white inline-block py-2 rounded-md"
          value="Update Toy"
          type="submit"
        />{" "}
      </form>

      {/* <div className="md:w-1/2">
          <img className=" shadow-2xl  rounded-lg" src={add3} alt="" />
        </div> */}
    </div>
  );
};

export default Update;
