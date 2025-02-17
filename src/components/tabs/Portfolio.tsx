'use client';
import Filter from "@/components/Filter";
import {useCallback, useState} from "react";
import Image from "next/image";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import {Eye, X} from "lucide-react";

// Define the structure of the project data
interface Project {
    title: string;
    desc: string;
    img: string;
    links: {
        direct: string;
        repo: string;
    };
    year: string | number;
}

export default function Project() {
    // The list of years
    const generateYearList = (startYear: number): string[] => {
        const currentYear = new Date().getFullYear();
        const years = Array.from(
            {length: currentYear - startYear + 1},
            (_, i) => (startYear + i).toString()
        );
        return ["Tout", ...years];
    };

    const tagList = generateYearList(2020);


    const data: Project[] = [
        {
            title: "Kouiz Mobile",
            desc: "Description for Project 1",
            img: "/kouiz-mobile.png",
            links: {direct: "https://project1.com", repo: "https://github.com/project1"},
            year: "2024",
        },
        {
            title: "Kouiz Desktop",
            desc: "Description for Project 2",
            img: "/kouiz-desktop.png",
            links: {direct: "https://project2.com", repo: "https://github.com/project2"},
            year: "2024",
        },
        {
            title: "Kouiz Web",
            desc: "Interface web de Kouiz, application de quiz en ligne.",
            img: "/kouiz.png",
            links: {direct: "https://kouiz.vercel.com", repo: "https://github.com/project3"},
            year: "2024",
        },
    ];

    const [activeTag, setActiveTag] = useState("Tout");

    const filterTags = (array: Project[]): Project[] => {
        if (activeTag.toLowerCase() === "tout") {
            return array;
        } else {
            return array.filter(
                (el) => el.year.toString() === activeTag
            );
        }
    };

    const filteredList = filterTags(data);

    // Click handler for year filters (memoized for performance)
    const handleTag = useCallback((tag: string) => {
        setActiveTag(tag);
    }, []);


    return (
        <div className="flex flex-col md:gap-0 gap-4">

            <Filter tagList={tagList} activeTag={activeTag} handleTag={handleTag}/>

            <div
                className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-col gap-x-8 gap-y-4 pt-4">
                {filteredList.length > 0 ? (
                    filteredList.map((project) => (
                        <Dialog key={project.title}>
                            <DialogTrigger>
                                <div className="group relative w-full flex flex-col">
                                    <div className="relative overflow-hidden rounded-2xl border dark:border-0 border-light-3">
                                        <div
                                            className="z-10 absolute inset-0 flex justify-center items-center group-hover:bg-dark-4/30 rounded-2xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                            <div
                                                className="flex flex-row gap-6 lg:justify-center items-center p-2 bg-dark-3 [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                                                <Eye className="text-primary w-8 h-8"/>
                                            </div>
                                        </div>
                                        <Image
                                            src={project.img}
                                            alt={project.title}
                                            width={250}
                                            height={50}
                                            className="rounded-2xl w-full h-48 object-cover bg-white dark:bg-dark-3 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                                        />
                                    </div>
                                    <div
                                        className="py-3 px-2 flex flex-col justify-start items-start transition-colors duration-300 ease-in-out rounded-b-2xl">
                                        <h2 className="text-md font-semibold text-light-4 dark:text-white">{project.title}</h2>
                                        <p className="text-light-4 dark:text-lightgrey">{project.year}</p>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="bg-light-1 dark:bg-dark-2 border-0 md:w-full w-10/12 !rounded-3xl p-0 pb-12 [&>button]:hidden">
                                <DialogHeader className="">
                                    <DialogDescription className="flex flex-col justify-center gap-4">

                                        <Image src={project.img} alt={project.title} width={250} height={50}
                                               className="rounded-3xl w-full object-cover rounded-b-3xl dark:border-0 border border-light-3"/>

                                        <span className="flex flex-col gap-8 items-start px-4">
                                            <DialogTitle className="text-primary text-xl">{project.title}</DialogTitle>
                                            <DialogDescription className="">
                                                <span className="text-light-4 dark:text-white !text-left md:text-base text-sm">
                                                    {project.desc}
                                                </span>
                                            </DialogDescription>
                                        </span>
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogClose asChild className="absolute top-2 right-2">
                                    <X className="text-light-3 w-6 h-6 cursor-pointer backdrop-blur-lg rounded-lg border"/>
                                </DialogClose>
                            </DialogContent>

                        </Dialog>
                    ))
                ) : (

                    <div className="text-white text-md">
                        Aucun projet trouvé 😔
                    </div>
                )}
            </div>

        </div>
    )
        ;
}