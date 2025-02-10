const navItems = ["About", "Resume", "Portfolio", "Blog", "Contact"];

export default function MobileNav({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {

    return (
        <nav className="h-16 border border-border rounded-t-2xl lg:hidden flex items-center justify-center fixed bottom-0 w-screen backdrop-blur-md bg-dark-5">
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
    );
}