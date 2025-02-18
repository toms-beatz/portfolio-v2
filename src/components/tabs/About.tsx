"use client";
import { AppWindow, TabletSmartphone } from "lucide-react"
import Testimonials from "../Testimonials";
import { getAboutDesc } from "@/lib/queries";
import { useState, useEffect } from "react";




export default function About() {
    const [aboutDesc, setAboutDesc] = useState<string[]>([]);

    useEffect(() => {
        // Appel de la fonction getProjects et gestion des erreurs
        getAboutDesc()
            .then((data) => {
                console.log("Données récupérées :", data);  // Vérification des données récupérées
                setAboutDesc(data.result['desc']);
            })
            .catch((error) => {
                console.error("Erreur de récupération des projets:", error);  // Gestion de l'erreur
            });
    }, []);
    return (
        <div className="flex flex-col gap-8">
            <div>
                <div className="dark:text-white text-light-4 flex flex-col gap-4">
                    <p>
                        {aboutDesc}
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-light-3 dark:text-dark-3">Mon activité</h2>
            <div className="grid xl:grid-cols-2 gap-y-8 gap-x-6">
                <div
                    className="flex flex-row gap-8 lg:justify-center items-center p-4 before:content-[''] before:absolute before:[-radius:inherit] rounded-xl dark:-dark-2 bg-light-1 dark:bg-dark-4/20">
                    <AppWindow height={50} width={50} className="text-dark-3 sm:w-1/4 w-6/12" />
                    <div className="flex flex-col gap-2">
                        <h3 className="dark:text-dark-3 text-light-3 font-semibold">
                            Développement d&apos;applications web
                        </h3>
                        <p className="text-light-3 dark:text-white text-sm">
                            Conception et développement d’applications web performantes et modernes.
                            Expérience utilisateur & performances optimisées.
                        </p>
                    </div>
                </div>

                <div
                    className="flex flex-row gap-8 lg:justify-center items-center p-4 before:content-[''] before:absolute before:[-radius:inherit] rounded-xl dark:-dark-2 bg-light-1 dark:bg-dark-4/20">
                    <TabletSmartphone height={50} width={50} className="text-dark-3 sm:w-1/4 w-6/12" />
                    <div className="flex flex-col gap-2">
                        <h3 className="dark:text-dark-3 text-light-3 font-semibold">
                            Développement d&apos;applications mobiles
                        </h3>
                        <p className="text-light-3 dark:text-white text-sm">
                            Développement d’applications mobiles hybrides, avec une expérience fluide sur iOS et
                            Android.
                            Intégration d’API, gestion des performances et UX soignée.
                        </p>
                    </div>
                </div>
            </div>
            
            <Testimonials />

        </div>
    );
}

