import ThemeProvider from "@/components/ThemeProvider";

const navItems = [
    { id: "About", title: "Présentation" },
    { id: "Resume", title: "Parcours" },
    { id: "Portfolio", title: "Projets" },
    { id: "Contact", title: "Contact" },
];

export default function Navbar({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (tab: string) => void }) {
    return (
        <nav
            className="h-16 dark:bg-dark-5 bg-light-2 px-5 rounded-bl-3xl rounded-tr-2xl border-l border-b border-light-3 dark:border-border mb-4 absolute top-0 bottom-auto left-auto right-0 xl:flex hidden items-center w-max"
        >
            <ul className="flex gap-12 px-5 items-center">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => setActiveTab(item.id)}
                            className={`font-semibold transition-colors ${
                                activeTab === item.id ? "text-primary" : "dark:text-gray-300 text-light-5 hover:dark:text-lightgrey hover:text-primary"
                            }`}
                        >
                            {item.title}
                        </button>
                    </li>
                ))}
                <li>
                    <ThemeProvider/>
                </li>
            </ul>
        </nav>
    );
}