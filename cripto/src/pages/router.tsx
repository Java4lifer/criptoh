import { createBrowserRouter } from "react-router-dom";
import {Layout} from "../components/layout/layout.tsx"
import { Home } from "./home/index.tsx"
import { NotFound } from "./404/notfound.tsx"
import { Detail } from "./detail/index.tsx"

const router = createBrowserRouter ([
    {
        element:<Layout/>,
        children:[
            {
                path:"/",
                element: <Home/>
            },
            {
                path:"*",
                element: <NotFound/>
            },
            {
                path:"/detail",
                element: <Detail/>
            }
        ]
    }
    
    
]);

export{router};