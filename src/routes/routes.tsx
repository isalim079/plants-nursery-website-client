import { createBrowserRouter } from "react-router-dom";
import Router from "./Router";
import Home from "../pages/Home/Home";
import PlantDetails from "../pages/PlantDetails/PlantDetails";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Router />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/plantDetails/:id',
                element: <PlantDetails />,
            },
        ]
    }
])

export default router