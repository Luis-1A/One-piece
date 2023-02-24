import { Outlet } from "react-router-dom";
import Banner from "../Banner";
import Footer from "../Footer";

export default function PageDefaultTemplate() {
    return (
        <>
            <Banner />            
            <Outlet />
            <Footer />
        </>
    )
}