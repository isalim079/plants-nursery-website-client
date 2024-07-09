import { createBrowserRouter } from "react-router-dom";
import Router from "./Router";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Router />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])

export default router