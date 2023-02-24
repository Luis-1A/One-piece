import { Outlet } from "react-router-dom";
import { CrewsProvider } from "../../context/Crews";
import { PiratesProvider } from "../../context/Pirates";
import Banner from "../Banner";
import Footer from "../Footer";

export default function PageDefaultTemplate() {
    return (
        <>
            <Banner />
            <CrewsProvider>
                <PiratesProvider>
                    <Outlet />
                </PiratesProvider>
            </CrewsProvider>
            <Footer />
        </>
    )
}