"use client";

import About from "./tabs/About";
import Resume from "./tabs/Resume";
import Contact from "./tabs/Contact";

export default function TabContent({ activeTab }: { activeTab: string }) {
    return (
        <div className="p-6 mt-20">
            {activeTab === "About" && <About />}
            {activeTab === "Resume" && <Resume />}
            {activeTab === "Contact" && <Contact />}
        </div>
    );
}