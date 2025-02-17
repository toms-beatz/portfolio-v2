const navItems = [
    {id: "About", title: "Présentation"},
    {id: "Resume", title: "Parcours"},
    {id: "Portfolio", title: "Projets"},
    {id: "Contact", title: "Contact"},
];

export default function MobileNav({activeTab, setActiveTab}: {
    activeTab: string;
    setActiveTab: (tab: string) => void
}) {
    return (
        <nav
            className="h-16 border border-light-3 dark:border-border rounded-t-2xl xl:hidden flex items-center w-full justify-center fixed bottom-0 left-0 backdrop-blur-xl bg-light-2 dark:bg-dark-5">

            <ul className="flex lg:gap-12 sm:gap-8 gap-4 px-5 justy-center items-center">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => setActiveTab(item.id)}
                            className={`font-semibold transition-colors text-sm md:text-base ${
                                activeTab === item.id ? "text-primary" : "text-light-5 dark:text-lightgrey"
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