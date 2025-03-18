import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home";
import Estatedetails from "../Pages/properties/view property/Estatedetails";
import Login from "../Pages/LoginRegistration/Login";
import Registration from "../Pages/LoginRegistration/Registration";
import Privateroute from "./Privateroute";
import Errorpage from "../Pages/error page/Errorpage";

const router = createBrowserRouter([
    {
    path:'/',
    element:<Root></Root>,
    errorElement:<Errorpage></Errorpage>,
    children:[{
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/estates.json')
    },
    {
        path:'/estatedetails/:id',
        element:<Privateroute><Estatedetails></Estatedetails></Privateroute>,
        loader:()=>fetch('/estates.json')
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Registration></Registration>
    }
]
}
])
;
export default router;