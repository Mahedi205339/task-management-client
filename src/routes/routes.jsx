import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddTask from "../components/AddTask";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

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
                element:<Dashboard/>
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
            }
        ]

    }
])

export default router