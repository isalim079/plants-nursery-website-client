import { createBrowserRouter } from "react-router-dom";
import Router from "./Router";
import Home from "../pages/Home/Home";
import PlantDetails from "../pages/PlantDetails/PlantDetails";
import ProductsPage from "../pages/ProductsPage/ProductsPage";
import Carts from "../pages/Carts/Carts";
import PlantsManagement from "../pages/PlantsManagement/PlantsManagement";
import AddPlants from "../pages/AddPlants/AddPlants";
import ManageCategories from "../pages/ManageCategories/ManageCategories";


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
            {
                path: '/plants',
                element: <ProductsPage />,
            },
            {
                path: '/carts',
                element: <Carts />,
            },
            {
                path: '/plantsManagement',
                element: <PlantsManagement />,
            },
            
            {
                path: '/addPlants',
                element: <AddPlants />,
            },
            {
                path: '/manageCategories',
                element: <ManageCategories />,
            },
           
        ]
    }
])

export default router