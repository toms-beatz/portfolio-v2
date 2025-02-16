const navItems = [
    { id: "About", title: "Présentation" },
    { id: "Resume", title: "Parcours" },
    { id: "Portfolio", title: "Projets" },
    { id: "Contact", title: "Contact" },
];

export default function MobileNav({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
    return (
        <nav className="h-16 border border-border rounded-t-2xl xl:hidden flex items-center justify-center fixed bottom-0 left-0 w-screen backdrop-blur-md bg-dark-5">
            <ul className="flex lg:gap-12 gap-8 px-5">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => setActiveTab(item.id)}
                            className={`font-semibold transition-colors text-sm md:text-base ${
                                activeTab === item.id ? "text-primary" : "text-gray-300 hover:text-lightgrey"
                            }`}
                        >
                            {item.title}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}