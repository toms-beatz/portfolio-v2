"use client";

import About from "./tabs/About";
import Resume from "./tabs/Resume";
import Contact from "./tabs/Contact";

export default function TabContent({ activeTab }: { activeTab: string }) {
    return (
        <div className="py-6 mt-6">
            {activeTab === "About" && <About />}
            {activeTab === "Resume" && <Resume />}
            {activeTab === "Contact" && <Contact />}
        </div>
    );
}