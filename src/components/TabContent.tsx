"use client";

import About from "./tabs/About";
import Resume from "./tabs/Resume";
import Contact from "./tabs/Contact";
import Portfolio from "./tabs/Portfolio";

export default function TabContent({ activeTab }: { activeTab: string }) {
    return (
        <div className="pt-6 pb-4">
            {activeTab === "About" && <About />}
            {activeTab === "Resume" && <Resume />}
            {activeTab === "Contact" && <Contact />}
            {activeTab === "Portfolio" && <Portfolio />}
        </div>
    );
}