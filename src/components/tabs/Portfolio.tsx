'use client';
import Filter from "@/components/Filter";
import { useCallback, useState, useEffect } from "react";
import { getProjects } from "@/app/api/projects/getProjects";
import Image from "next/image";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { VisuallyHidden } from "radix-ui";
import { Eye, Github, SquareArrowOutUpRight, X } from "lucide-react";
import Link from "next/link";
import AlertstoUsers from "../AlertstoUsers";

type ProjectType = "Application Web" | "Application Mobile" | "Application Desktop" | "API";

const typeColors: Record<ProjectType, string> = {
    "Application Web": "bg-light-3",
    "Application Mobile": "bg-light-4",
    "Application Desktop": "bg-light-5",
    "API": "bg-dark-3",
};

export interface Project {
    id: string;
    title: string;
    description: string;
    image: any;
    direct_link: string;
    github_link: string;
    project_categories: Array<{ name: string }>;
}

export default function Project() {
    const tagList = ["Tout", "Application Web", "Application Mobile", "Application Desktop", "API"];
    const [activeTag, setActiveTag] = useState("Tout");
    const [projects, setProjects] = useState<Project[]>([]);
    const [currentPage, setCurrentPage] = useState(1);  // Page actuelle
    const projectsPerPage = 4;  // Nombre de projets par page

    useEffect(() => {
        getProjects()
            .then((data) => {
                setProjects(data);
            })
            .catch((error) => {
                console.error("Erreur de récupération des projets:", error);
            });
    }, []);

    const filterTags = (array: Project[]): Project[] => {
        if (activeTag === "Tout") {
            return array;
        } else {
            return array.filter((el) => el.project_categories.some(category => category.name === activeTag));
        }
    };

    const filteredList = filterTags(projects);

    // Calculer les projets à afficher sur la page actuelle
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredList.slice(indexOfFirstProject, indexOfLastProject);

    // Calculer le nombre de pages total
    const totalPages = Math.ceil(filteredList.length / projectsPerPage);

    const handleTag = useCallback((tag: string) => {
        setActiveTag(tag);
        setCurrentPage(1);  // Réinitialiser à la première page quand un tag est changé
    }, []);

    const smoothScroll = (target: number, duration: number) => {
        const start = window.scrollY; // Position actuelle
        const change = target - start; // Distance à parcourir
        const startTime = performance.now(); // Temps de début

        // Fonction de défilement
        const animateScroll = () => {
            const currentTime = performance.now();
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1); // Calcul du pourcentage de défilement

            // Calcul de la position de défilement actuelle
            window.scrollTo(0, start + change * progress);

            // Si le temps n'est pas écoulé, continuer à faire défiler
            if (progress < 1) {
                requestAnimationFrame(animateScroll);
            }
        };

        // Début de l'animation
        animateScroll();
    };

    // Utilisation de la fonction
    const goToPage = (page: number) => {
        setCurrentPage(page);
        smoothScroll(0, 375); // 1000ms (1 seconde) de défilement
    };

    return (
        <div className="flex flex-col md:gap-0 gap-4">

            <Filter tagList={tagList} activeTag={activeTag} handleTag={handleTag} />

            <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 flex-col gap-x-8 gap-y-4 pt-4 mt-4">
                {currentProjects.length > 0 ? (
                    currentProjects.map((project) => (
                        <Dialog key={project.title}>
                            <DialogTrigger>
                                <div className="group relative w-full flex flex-col">
                                    <div className="relative overflow-hidden rounded-2xl border dark:border-0 border-lightgrey">
                                        <div className="z-10 gap-6 absolute inset-0 flex justify-center items-center group-hover:bg-light-5/30 dark:group-hover:bg-dark-5/30 rounded-2xl opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                                            <div className="flex flex-row gap-6 lg:justify-center items-center p-2 bg-light-1 dark:bg-dark-3 before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl">
                                                <Eye className="text-light-4 dark:text-dark-4 w-8 h-8 hover:text-light-3 dark:hover:text-white" />
                                            </div>
                                            {project.direct_link && (
                                                <Link href={project.direct_link} target="_blank">
                                                    <div className="flex flex-row gap-6 lg:justify-center items-center p-2 bg-light-1 dark:bg-dark-3 before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl">
                                                        <SquareArrowOutUpRight className="text-light-4 dark:text-dark-4 w-8 h-8 hover:text-light-3 dark:hover:text-white" />
                                                    </div>
                                                </Link>
                                            )}
                                            {project.github_link && (
                                                <Link href={project.github_link} target="_blank">
                                                    <div className="flex flex-row gap-6 lg:justify-center items-center p-2 bg-light-1 dark:bg-dark-3 before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl">
                                                        <Github className="text-light-4 dark:text-dark-4 w-8 h-8 hover:text-light-3 dark:hover:text-white" />
                                                    </div>
                                                </Link>
                                            )}
                                        </div>
                                        <Image
                                            src={process.env.NEXT_PUBLIC_STRAPI_API_URL + project.image.url}
                                            alt={project.title}
                                            width={project.image.width}
                                            height={project.image.height}
                                            className="rounded-2xl w-full h-60 object-fill bg-light-4 dark:bg-dark-3 transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                                        />
                                        <div className="flex gap-2 mt-2 absolute z-10 top-0 right-2 flex-wrap ml-4">
                                            {project.project_categories.map((category) => (
                                                <span key={category.name}
                                                    className={`text-white px-3 py-1 text-xs rounded-full font-bold ${typeColors[category.name as ProjectType] || "bg-gray-500"}`}>
                                                    {category.name}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="py-3 px-2 flex flex-col justify-start items-start transition-colors duration-300 ease-in-out rounded-b-2xl">
                                        <span className="text-md font-semibold text-light-3 dark:text-dark-3">{project.title}</span>
                                    </div>
                                </div>
                            </DialogTrigger>
                            <DialogContent
                                className="gap-0 bg-light-3/50 dark:bg-dark-3/50 backdrop-blur-md border-0 md:w-full w-10/12 !rounded-3xl p-0 pb-8 [&>button]:hidden">
                                <DialogTitle>
                                    <VisuallyHidden.Root>
                                        {project.title}
                                    </VisuallyHidden.Root>
                                </DialogTitle>

                                <DialogHeader>
                                    <DialogDescription className="flex flex-col justify-center gap-4">
                                        <Image
                                            src={process.env.NEXT_PUBLIC_STRAPI_API_URL + project.image.url}
                                            alt={project.title}
                                            width={project.image.width}
                                            height={project.image.height}
                                            className="rounded-3xl w-full object-cover rounded-b-3xl"
                                        />
                                        <span className="flex gap-2 mt-2 absolute z-10 top-0 right-12 flex-wrap ml-4">
                                            {project.project_categories.map((category) => (
                                                <span key={category.name}
                                                    className={`text-white px-3 py-1 text-xs rounded-full font-bold ${typeColors[category.name as ProjectType] || "bg-gray-500"}`}>
                                                    {category.name}
                                                </span>
                                            ))}
                                        </span>
                                        <span className="flex flex-col gap-8 items-start px-4 pt-4">
                                            <span className="flex xl:flex-row flex-col xl:items-center w-full xl:justify-between xl:gap-0 gap-8">
                                                <span className="flex flex-col gap-4 xl:!w-8/12 w-full">
                                                    <span className="text-left text-light-4 dark:text-dark-3 xl:text-3xl text-2xl font-heading">
                                                        {project.title}
                                                    </span>
                                                    <span className="text-light-2 dark:text-white !text-left md:text-base text-sm">
                                                        {project.description}
                                                    </span>
                                                </span>
                                                <span className="flex flex-col gap-4">
                                                    {project.direct_link && (
                                                        <span className="cursor-pointer flex w-full flex-row bg-light-4 hover:bg-light-5 text-light-2 rounded-full gap-2 justify-center items-center p-3">
                                                            <Link href={project.direct_link} target="_blank">
                                                                Voir le projet
                                                            </Link>
                                                            <SquareArrowOutUpRight className="h-4 w-4" />
                                                        </span>
                                                    )}
                                                    {project.github_link && (
                                                        <span className="cursor-pointer flex w-full flex-row bg-light-4 hover:bg-light-5 text-light-2 rounded-full gap-2 justify-center items-center p-3">
                                                            <Link href={project.github_link} target="_blank">
                                                                Voir le repo
                                                            </Link>
                                                            <Github className="h-4 w-4" />
                                                        </span>
                                                    )}
                                                </span>
                                            </span>
                                        </span>
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogClose asChild className="absolute top-2 right-2">
                                    <X className="text-light-3 w-6 h-6 cursor-pointer bg-light-1 backdrop-blur-lg rounded-lg border" />
                                </DialogClose>
                            </DialogContent>
                        </Dialog>
                    ))
                ) : (
                    <div className="dark:text-white text-light-4 text-md">Aucun projet trouvé 😔</div>
                )}
            </div>

            {/* Pagination des numéros de page */}
            <div className="flex justify-center gap-4 mt-6">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => goToPage(index + 1)}
                        className={`px-4 py-2 rounded-full text-light-1 ${currentPage === index + 1 ? 'bg-light-4' : 'bg-light-3'}`}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}