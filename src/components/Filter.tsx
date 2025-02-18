import React, { useState } from "react";
import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FilterProps {
    tagList: string[];
    activeTag: string;
    handleTag: (tag: string) => void;
}

const Filter: React.FC<FilterProps> = ({ tagList, activeTag, handleTag }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full flex flex-col">
            <div className="hidden md:flex gap-x-8 gap-y- flex-wrap">
                {tagList.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => handleTag(tag)}
                        className={clsx(
                            "cursor-pointer transition-all",
                            activeTag === tag
                                ? "text-light-5 font-medium font-semibold"
                                : "text-light-4 hover:text-light-5 dark:hover:text-dark-5 dark:text-white font-medium"
                        )}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className="md:hidden relative w-full">
                <select
                    value={activeTag}
                    onChange={(e) => handleTag(e.target.value)}
                    onFocus={() => setIsOpen(true)}
                    onBlur={() => setIsOpen(false)}
                    className="w-full px-5 py-4 rounded-xl bg-light-1 dark:bg-dark-1 text-light-4 dark:text-white focus-visible:ring-0 focus-visible:ring-offset-0"
                >
                    {tagList.map((tag) => (
                        <option key={tag} value={tag}>
                            {tag}
                        </option>
                    ))}
                </select>

                <span className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-gray-500 transition-transform duration-300">
                    {isOpen ? <ChevronUp height={18} width={18} /> : <ChevronDown height={18} width={18} />}
                </span>
            </div>
        </div>
    );
};

export default Filter;