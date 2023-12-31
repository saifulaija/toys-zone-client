import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddToy from "../components/AddToy/AddToy";
import PrivateRoute from "../provider/PrivateRoute";
import MyToys from "../components/MyToys/MyToys";
import Update from "../components/Update/Update";
import AllToys from "../components/AllToys/AllToys";
import ViewDetails from "../components/ViewDetails/ViewDetails";
import Blog from "../components/Blog/Blog";
import Error from "../components/Error/Error";
import HomeDetails from "../components/HomeDetails/HomeDetails";

  export const router = createBrowserRouter([
      {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
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
           loader:({params})=> fetch(` https://assignment-11-server-saifulaija.vercel.app/update/${params.id}`)
           },
           {
            path:'allToys',
            element:<AllToys></AllToys>
           },
           {
            path:'viewDetails/:id',
            element:<PrivateRoute>
                <ViewDetails></ViewDetails>
            </PrivateRoute>,
            loader:({params})=> fetch(` https://assignment-11-server-saifulaija.vercel.app/detailsId/${params.id}`)
           },
           {
            path:'blog',
            element:<Blog></Blog>
           },
           {
            path:'homeDetails/:id',
            element:<PrivateRoute>
                <HomeDetails></HomeDetails>
            </PrivateRoute>,
             loader:({params})=> fetch(` https://assignment-11-server-saifulaija.vercel.app/detailsId/${params.id}`)
           }

        ]

      }
])