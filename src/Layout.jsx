import { Outlet } from "react-router-dom";
import Navber from "./component/Nabvar/Nabvar";

import Footer from "./component/Footer/Footer";


export default function Layout() {
    return(
        <>
        <Navber />
        <Outlet />
        <Footer />
        </>
    )
}