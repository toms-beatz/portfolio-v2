'use client';
import Filter from "@/components/Filter";
import { useCallback, useState } from "react";
import Image from "next/image";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Eye, X } from "lucide-react";

interface Project {
    title: string;
    desc: string;
    img: string;
    links: {
        direct: string;
        repo: string;
    };
    type: string[];
}

const typeColors: Record<string, string> = {
    "Application Web": "bg-blue-500",
    "Application Mobile": "bg-green-500",
    "Application Desktop": "bg-purple-500",
    "API": "bg-red-500",
    "SaaS": "bg-teal-500",
};

export default function Project() {
    const tagList = ["Tout", "Application Web", "Application Mobile", "Application Desktop", "API", "SaaS"];
    const data: Project[] = [
        {
            title: "Kouiz Mobile",
            desc: "Application mobile pour quiz interactifs.",
            img: "/projects/kouiz-mobile.png",
            links: { direct: "https://project1.com", repo: "https://github.com/project1" },
            type: ["Application Mobile"],
        },
        {
            title: "Kouiz Desktop",
            desc: "Version desktop de Kouiz avec des fonctionnalités avancées.",
            img: "/projects/kouiz-desktop.png",
            links: { direct: "https://project2.com", repo: "https://github.com/project2" },
            type: ["Application Desktop"],
        },
        {
            title: "Kouiz Web",
            desc: "Interface web de Kouiz, accessible via navigateur.",
            img: "/projects/kouiz.png",
            links: { direct: "https://kouiz.vercel.com", repo: "https://github.com/project3" },
            type: ["Application Web"],
        },
        {
            title: "Kouiz API",
            desc: "API pour gérer les quiz et les scores.",
            img: "/projects/kouiz-api.png",
            links: { direct: "https://kouizapi.com", repo: "https://github.com/project4" },
            type: ["API", "SaaS"],
        },
    ];

    const [activeTag, setActiveTag] = useState("Tout");

    const filterTags = (array: Project[]): Project[] => {
        if (activeTag === "Tout") {
            return array;
        } else {
            return array.filter((el) => el.type.includes(activeTag));
        }
    };

    const filteredList = filterTags(data);

    const handleTag = useCallback((tag: string) => {
        setActiveTag(tag);
    }, []);

    return (
        <div className="flex flex-col md:gap-0 gap-4">
            <Filter tagList={tagList} activeTag={activeTag} handleTag={handleTag} />

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-col gap-x-8 gap-y-4 pt-4">
                {filteredList.length > 0 ? (
                    filteredList.map((project) => (
                        <Dialog key={project.title}>
                            <DialogTrigger>
                                <div className="group relative w-full flex flex-col">
                                    <div className="relative overflow-hidden rounded-2xl border dark:border-0 border-light-3">
                                        <div className="z-10 absolute inset-0 flex justify-center items-center group-hover:bg-dark-4/30 rounded-2xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                            <div className="flex flex-row gap-6 lg:justify-center items-center p-2 bg-dark-3 [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                                                <Eye className="text-primary w-8 h-8" />
                                            </div>
                                        </div>
                                        <Image
                                            src={project.img}
                                            alt={project.title}
                                            width={50}
                                            height={50}
                                            className="rounded-2xl w-full h-48 object-cover bg-white dark:bg-dark-3 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                                        />
                                        <div className="flex gap-2 mt-2 absolute z-10 top-0 right-2 flex-wrap ml-4">
                                            {project.type.map((type) => (
                                                <span key={type} className={`text-white px-3 py-1 text-xs rounded-full font-bold ${typeColors[type] || "bg-gray-500"}`}>
                                                    {type}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="py-3 px-2 flex flex-col justify-start items-start transition-colors duration-300 ease-in-out rounded-b-2xl">
                                        <h2 className="text-md font-semibold text-light-4 dark:text-white">{project.title}</h2>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent className="bg-light-1 dark:bg-dark-2 border-0 md:w-full w-10/12 !rounded-3xl p-0 pb-12 [&>button]:hidden">
                                <DialogHeader>
                                    <DialogDescription className="flex flex-col justify-center gap-4">
                                        <Image
                                            src={project.img}
                                            alt={project.title}
                                            width={250}
                                            height={50}
                                            className="rounded-3xl w-full object-cover rounded-b-3xl dark:border-0 border border-light-3"
                                        />
                                        <div className="flex gap-2 mt-2 absolute z-10 top-0 right-12 flex-wrap ml-4">
                                            {project.type.map((type) => (
                                                <span key={type} className={`text-white px-3 py-1 text-xs rounded-full font-bold ${typeColors[type] || "bg-gray-500"}`}>
                                                    {type}
                                                </span>
                                            ))}
                                        </div>
                                        <span className="flex flex-col gap-8 items-start px-4">
                                            <DialogTitle className="text-primary text-xl">{project.title}</DialogTitle>
                                            <DialogDescription>
                                                <span className="text-light-4 dark:text-white !text-left md:text-base text-sm">
                                                    {project.desc}
                                                </span>
                                            </DialogDescription>
                                        </span>
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogClose asChild className="absolute top-2 right-2">
                                    <X className="text-light-3 w-6 h-6 cursor-pointer backdrop-blur-lg rounded-lg border" />
                                </DialogClose>
                            </DialogContent>
                        </Dialog>
                    ))
                ) : (
                    <div className="text-white text-md">Aucun projet trouvé 😔</div>
                )}
            </div>
        </div>
    );
}