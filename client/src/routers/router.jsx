import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import App from "../App.jsx";
import Home from "../home/home.jsx";
import Shop from "../Shop/Shop.jsx";
import SingleBook from "../Shop/SingleBook.jsx";
import About from "../components/ABOUT.JSX";
import { DashboardLayout } from "../Dashboard/DashboardLayout.jsx";
import { Dashboard } from "../Dashboard/Dashboard.jsx";
import UploadBook from "../Dashboard/UploadBook.jsx";
import ManageBooks from "../Dashboard/ManageBooks.jsx";
import EditBooks from "../Dashboard/EditBooks.jsx";
import Signup from "../components/Signup.jsx";
import { Login } from "../components/Login.jsx";
import PrivateRoute from "../PrivateRoute/PrivateRoute.jsx";
import { Logout } from "../components/Logout.jsx";



const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path: '/',
                element: <Home/>,
            },
            {
                path: "/shop",
                element: <Shop/>

            },
            {
                
                path: "/about",
                element: <About/>
            },
            {
                path:"/book/:id",
                element:<SingleBook/>,
                loader:({params})=> fetch(`http://localhost:8080/book/${params.id}`)
            }

        ]
        
    },
    {
        path:"/admin/dashboard",
        element:<DashboardLayout/>,
        children:[
            {
                path:"/admin/dashboard",
                element:<PrivateRoute><Dashboard/></PrivateRoute>
            },
            {
                path:"/admin/dashboard/upload",
                element:<UploadBook/>
            },
            {
                
                path:"/admin/dashboard/manage",
                element:<ManageBooks/>
            },
            {
                
                path:"/admin/dashboard/edit-books/:id",
                element:<EditBooks/>,
                loader: ({params}) => fetch(`http://localhost:8080/book/${params.id}`)
            },
            
            
                
        ]
    },
    {
        path:"sign-up",
        element: <Signup/>
    },
    {
        path:"login",
        element: <Login/>
    },
    {
        path: "logout",
        element: <Logout/>
    }
]);

export default router;