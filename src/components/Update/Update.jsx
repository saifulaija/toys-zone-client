import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { VscFileSubmodule} from "react-icons/vsc";
import Swal from "sweetalert2";
import Loader from "../Loader/Loader";

const Update = () => {

  

  const navigation = useNavigation();
  if(navigation.state === 'loading'){
     return <Loader></Loader>
  }

  const toy = useLoaderData();
  console.log(toy);
  

  


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch(`https://assignment-11-server-ivory.vercel.app/setToys/${toy?._id} `, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if(result.modifiedCount){
            Swal.fire("Updated!", "Your coffee has been updated.", "success");

        }
       
      });
  };

  return (
    <div className="w-full bg-[#E5E4DF] p-20">
      <h1 className="heading py-10 "> You Can Update Toy</h1>
      <div className="md:flex justify-between gap-12 items-center p-8 my_container ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex w-1/2 flex-col p-5 bg-gray-300 space-y-4 mx-auto"
        >
          {errors.exampleRequired && <span>This field is required</span>}
          <input
            className="text-input"
            {...register("price")}
            placeholder="update price"
            defaultValue={toy.price}
            type="text"
          />
          <input
            className="text-input"
            {...register(" quantity")}
            placeholder="update Available quantity"
            defaultValue={toy.quantity}
            type="text"
          />
          <input
            className="text-input"
            {...register("description")}
            defaultValue={toy.description}
            placeholder="update description"
          />
          <input
            className="submit-btn bg-green-600 px-4 tracking-widest uppercase font-bold text-white inline-block py-2 rounded-md"
            value="Update Toy"
            type="submit"
          />{" "}
         
        </form>

        {/* <div className="md:w-1/2">
          <img className=" shadow-2xl  rounded-lg" src={add3} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Update;
