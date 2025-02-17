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
            className="z-20 h-16 rounded-t-2xl xl:hidden flex items-center w-full justify-center fixed bottom-0 left-0 bg-light-4/20 dark:bg-dark-4/50 backdrop-blur-3xl">

            <ul className="flex lg:gap-12 sm:gap-8 gap-4 px-5 justy-center items-center">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <button
                            onClick={() => setActiveTab(item.id)}
                            className={`font-semibold transition-colors text-sm md:text-base ${
                                activeTab === item.id ? "dark:text-dark-3 text-light-5" : "dark:text-white text-light-4"
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