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
            <div className="hidden md:flex gap-8 flex-wrap">
                {tagList.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => handleTag(tag)}
                        className={clsx(
                            "py-2 cursor-pointer transition-all",
                            activeTag === tag
                                ? "text-primary font-medium"
                                : "text-light-4 dark:text-white font-medium"
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
                    className="w-full px-5 py-4 rounded-xl bg-transparent text-light-4 dark:text-white border border-light-3 dark:border-border focus-visible:ring-0 focus-visible:ring-offset-0"
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