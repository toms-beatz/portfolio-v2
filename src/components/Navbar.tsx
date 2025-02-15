const navItems = [
    { id: "About", title: "Présentation" },
    { id: "Resume", title: "Parcours" },
    { id: "Portfolio", title: "Projets" },
    { id: "Contact", title: "Contact" },
];

export default function Navbar({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
    return (
        <nav
            className="h-16 bg-dark-5 px-5 rounded-bl-3xl rounded-tr-2xl border-l border-b border-border mb-4 absolute top-0 bottom-auto left-auto right-0 lg:flex hidden items-center w-max"
        >
            <ul className="flex gap-12 px-5">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => setActiveTab(item.id)}
                            className={`font-semibold transition-colors ${
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