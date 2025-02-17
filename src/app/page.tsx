"use client"
import { useState } from "react";
import Navbar from "../components/Navbar";
import TabContent from "../components/TabContent";
import Sidebar from "../components/Sidebar";
import MobileNav from "../components/MobileNav";


const navItems = [
    { id: "About", title: "Présentation" },
    { id: "Resume", title: "Parcours" },
    { id: "Portfolio", title: "Projets" },
    { id: "Contact", title: "Contact" },
];

export default function Home() {
    const [activeTab, setActiveTab] = useState("About"); // Default to "About"

    const activeTabData = navItems.find((item) => item.id === activeTab); // Find the active tab object

    return (
        <>
            <main className="flex w-full lg:px-28 md:py-14 md:pb-24 xl:pb-4 -mt-10 px-3 md:gap-8 gap-[75px] lg:flex-row flex-col lg:justify-start justify-center lg:items-start items-center">
                <Sidebar activeTab={activeTab} />
                <section className="w-full dark:bg-dark-2 bg-light-2 rounded-2xl relative p-4 md:p-8 max-h-full h-full md:mb-0 mb-20">
                    <h2 className="font-heading md:text-3xl md:m-0 mt-2 text-2xl font-semibold text-light-3 dark:text-dark-3">
                        {activeTabData?.title}
                    </h2>
                    <div className="dark:bg-dark-5 bg-light-5 h-1 w-12 rounded mt-5"></div>
                    <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabContent activeTab={activeTab} />
                </section>
                <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
            </main>
        </>
    );
}