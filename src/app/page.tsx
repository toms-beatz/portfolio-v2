"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import MobileNav from "@/components/MobileNav";
import TabContent from "@/components/TabContent";

export default function Home() {
    const [activeTab, setActiveTab] = useState("About"); // Manage active tab
    return (
        <>
            <main className="flex w-full lg:px-28 lg:py-14 md:py-14 py-4 px-3 gap-6 lg:flex-row flex-col lg:justify-start justify-center lg:items-start items-center">
                <Sidebar/>
                <section className="w-9/12 bg-dark-2 rounded-2xl relative border border-border h-screen p-4 md:p-8">
                    <h2 className="md:text-4xl text-lg font-semibold">{activeTab}</h2>
                    <div className="bg-primary h-1 w-12 rounded mt-5"></div>
                    <Navbar activeTab={activeTab} setActiveTab={setActiveTab}/>
                    <TabContent activeTab={activeTab} />
                </section>
                <MobileNav activeTab={activeTab} setActiveTab={setActiveTab}/>
            </main>
        </>
    );
}
