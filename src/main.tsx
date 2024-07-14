import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import * as React from "react";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <div className="font-poppins">
                <RouterProvider router={router} />
            </div>
        </Provider>
    </React.StrictMode>
);
