const navItems = ["About", "Resume", "Portfolio", "Blog", "Contact"];

export default function Navbar({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {

    return (
        <>
            <nav className="h-16 bg-dark-5 px-5 rounded-bl-3xl rounded-tr-2xl border-l border-b border-border mb-4 absolute top-0 bottom-auto left-auto right-0 lg:flex hidden items-center w-max">
                <ul className="flex gap-12 px-5">
                    {navItems.map((item) => (
                        <li key={item}>
                            <button
                                onClick={() => setActiveTab(item)}
                                className={`font-semibold transition-colors ${
                                    activeTab === item ? "text-primary" : "text-gray-300 hover:text-lightgrey"
                                }`}
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>
            {/*<nav className="h-16 border border-border rounded-t-3xl lg:hidden flex items-center justify-center  bottom-0 w-screen backdrop-blur-md bg-dark-5">
                <ul className="flex gap-12 px-5">
                    {navItems.map((item) => (
                        <li key={item}>
                            <button
                                onClick={() => setActiveTab(item)}
                                className={`font-semibold transition-colors ${
                                    activeTab === item ? "text-primary" : "text-gray-300 hover:text-lightgrey"
                                }`}
                            >
                                {item}
                            </button>
                        </li>
                    ))}
                </ul>
            </nav>*/}
        </>
    );
}

