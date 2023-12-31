import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddTask from "../components/AddTask";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import UpdateTask from "../pages/UpdateTask/UpdateTask";
import About from "../pages/About/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'dashboard',
                element: <PrivateRoute><Dashboard/></PrivateRoute> 
            }
            ,
            {
                path:'add-task',
                element:<AddTask></AddTask>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path: 'signUp',
                element:<SignUp/>
            },
            {
                path: 'about',
                element:<About/>
            },
            {
                path: '/updateTask/:id',
                element:<UpdateTask/>,
                loader: ({params})=>fetch(`https://task-manager-server-tan.vercel.app/tasks/ongoing/${params.id}`)
            }
        ]

    }
])

export default router