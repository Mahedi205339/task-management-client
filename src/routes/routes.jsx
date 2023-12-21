import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import AddTask from "../components/AddTask";

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
            }
        ]

    }
])

export default router