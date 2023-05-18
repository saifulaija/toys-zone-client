import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import add1 from '../../../public/add.jpg'
import add2 from '../../../public/add2.jpg'
import add3 from '../../../public/add3.jpg'
import add4 from '../../../public/add4.jpg'
import { AuthContext } from "../../provider/AuthProvider";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";
import { VscFileSubmodule} from "react-icons/vsc";
import Swal from "sweetalert2";


const AddToy = () => {

  const [addToy, setAddToy] = useState(null);
  const {user} = useContext(AuthContext);

  
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


  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data =>{
     
      console.log(data);
      fetch('http://localhost:5000/setToys',{
            method:'POST',
            headers:{
                  'content-type':'application/json'
                  
            },
            body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(result=>{
            console.log(result);
            if(result.modifiedCount){
                  Swal.fire(
                        'Good job!',
                        'You clicked the button!',
                        'success'
                      )

            }
         
      })
  }








  return (
    <div className="w-full bg-black">
      <h1 className="heading py-10 ">Now You Can Added Toy</h1>
      <div className="md:flex justify-between gap-12 items-center p-8 my_container ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex w-1/2 flex-col p-5 bg-gray-300 space-y-4 mx-auto"
        >
          {errors.exampleRequired && <span>This field is required</span>}
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
            <option value="Sports Car">Sports Car</option>
            <option value="Mini Car">Mini Police Car</option>
            <option value="Regular Car">Regular Car</option>
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
          
          <input className="submit-btn bg-green-600 px-4 tracking-widest uppercase font-bold text-white inline-block py-2 rounded-md" value="Post Job" type="submit" /> <VscFileSubmodule className="inline-block"></VscFileSubmodule>
          
        
        </form>

        <div className="md:w-1/2">
            <img className=" shadow-2xl  rounded-lg" src={add3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AddToy;
