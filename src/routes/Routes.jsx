import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddToy from "../components/AddToy/AddToy";
import PrivateRoute from "../provider/PrivateRoute";
import MyToys from "../components/MyToys/MyToys";
import Update from "../components/Update/Update";

  export const router = createBrowserRouter([
      {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
           {
            path:'addToy',
            element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
           },
           {
            path:'myToys',
            element:<MyToys></MyToys>
           },
           {
           path:'update/:id',
           element:<Update></Update>,
           loader:({params})=> fetch(`http://localhost:5000/update/${params.id}`)
           }
        ]

      }
])