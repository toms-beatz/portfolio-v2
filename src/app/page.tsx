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
            <main className="flex w-full lg:px-28 lg:py-14 md:py-14 py-4 px-3 gap-8 lg:flex-row flex-col lg:justify-start justify-center lg:items-start items-center">
                <Sidebar activeTab={activeTab} />
                <section className="w-full bg-dark-2 rounded-2xl relative border border-border p-4 md:p-8 max-h-full h-full md:mb-0 mb-20">
                    <h2 className="md:text-4xl text-lg font-semibold">
                        {activeTabData?.title}
                    </h2>
                    <div className="bg-primary h-1 w-12 rounded mt-5"></div>
                    <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
                    <TabContent activeTab={activeTab} />
                </section>
                <MobileNav activeTab={activeTab} setActiveTab={setActiveTab} />
            </main>
        </>
    );
}