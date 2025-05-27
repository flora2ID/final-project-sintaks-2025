import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function AppLayout() {
    return (
        <>
            <Navbar />
            <main >
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default AppLayout;
