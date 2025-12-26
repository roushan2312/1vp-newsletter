import { createBrowserRouter  } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Service from "../pages/ServicePage";
import Podcast from "../pages/Podcast";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/services",
                element: <Service />
            },
            {
                path: "/podcasts",
                element: <Podcast/>
            },
            {
                path:"/*",
                element: <Home />
            }
        ]
    }
]);

export default router;