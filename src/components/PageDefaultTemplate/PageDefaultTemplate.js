import { Outlet } from "react-router-dom";
import { CrewsProvider } from "../../context/Crews";
import { MessageProvider } from "../../context/Message";
import { PiratesProvider } from "../../context/Pirates";
import Banner from "../Banner";
import Footer from "../Footer";

export default function PageDefaultTemplate() {
    return (
        <>
            <Banner />
            <CrewsProvider>
                <PiratesProvider>
                    <MessageProvider>
                        <Outlet />
                    </MessageProvider>
                </PiratesProvider>
            </CrewsProvider>
            <Footer />
        </>
    )
}