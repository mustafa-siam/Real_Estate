import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./Pages/Home";
import Estatedetails from "./Pages/properties/view property/Estatedetails";

const router = createBrowserRouter([
    {
    path:'/',
    element:<Root></Root>,
    children:[{
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/estates.json')
    },
    {
        path:'/estatedetails/:id',
        element:<Estatedetails></Estatedetails>,
        loader:()=>fetch('/estates.json')
    }
]
}
])
;
export default router;