"use client";

import {
    Brain,
    BriefcaseBusiness,
    GraduationCap, MessageCircleQuestion,
    Puzzle,
    Smile,
    Trophy,
    Users,
    Wrench
} from "lucide-react";
import {Progress} from "@/components/ui/progress"


export default function Resume() {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex items-center gap-4">
                    <div
                        className="p-3.5 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                        <GraduationCap height={20} width={20} className="text-primary"/>
                    </div>
                    <h2 className="text-2xl font-bold text-white">Formation</h2>
                </div>
                <div className="h-full flex gap-10">
                    <div className="ml-6 border-[0.95px] border-border"></div>
                    <div className="flex flex-col gap-8 pt-8">
                        <div className="relative mt-4 gap-2 flex flex-col">
                            <div
                                className="after:content-[''] after:absolute after:top-[18px] after:-left-[43.5px] after:h-[6px] after:w-[6px] after:bg-primary after:rounded-[50%] after:[box-shadow:0_0_0_4px_#373737]"></div>
                            <h3 className="text-lg font-bold text-white">Titre RNCP Concepteur Développeur
                                d&apos;Applications
                                | <span className="text-lightgrey">MyDigitalSchool Nice</span></h3>
                            <span className="text-md font-medium text-primary">2024</span>
                            <span className="text-white font-light text-md flex flex-col gap-2">
                            <p>Projet de constructeur de quiz
                            contenant différentes applications :
                            web, desktop et mobile.</p>
                            <p>
                                <span className="font-semibold">Stack : &nbsp;</span>
                                Laravel, NextJS, MariaDB,
                                React Native, ElectronJS, Træfik
                            </p>
                        </span>
                        </div>
                        <div className="relative mt-4 gap-2 flex flex-col">
                            <div
                                className="after:content-[''] after:absolute after:top-[18px] after:-left-[43.5px] after:h-[6px] after:w-[6px] after:bg-primary after:rounded-[50%] after:[box-shadow:0_0_0_4px_#373737]"></div>
                            <h3 className="text-lg font-bold text-white">Bachelor Développeur Web | <span
                                className="text-lightgrey">MyDigitalSchool Nice</span></h3>
                            <span className="text-md font-medium text-primary">2024</span>
                            <span className="text-white font-light text-md flex flex-col gap-2">
                            <p className="font-bold text-md flex gap-2 items-center text-primary">
                                <Trophy height={20} width={20} className="text-primary"/>
                                Major de promotion
                            </p>
                        </span>
                        </div>
                        <div className="relative mt-4 gap-2 flex flex-col">
                            <div
                                className="after:content-[''] after:absolute after:top-[18px] after:-left-[43.5px] after:h-[6px] after:w-[6px] after:bg-primary after:rounded-[50%] after:[box-shadow:0_0_0_4px_#373737]"></div>
                            <h3 className="text-lg font-bold text-white">DEUST Webmaster & Métiers de l&apos;Internet | <span
                                className="text-lightgrey">Université de Limoges</span></h3>
                            <span className="text-md font-medium text-primary">2023</span>
                            <span className="text-white font-light text-md flex flex-col gap-2">
                            <p>
                                <span className="font-semibold">Développement front :</span> HTML, CSS,
                                Bootstrap, JavaScript, jQuery
                            </p>
                            <p>
                                <span className="font-semibold">Développement back :</span> PHP, Symfony,
                                MySQL, phpmyadmin
                            </p>
                            <p>
                                <span className="font-semibold">Outils :</span> Git, Docker
                            </p>
                            <p>
                                <span className="font-semibold">Autres :</span> XML/XSL, AJAX, WordPress,
                                bash, gestion de projet agile,
                                développement sous Android Studio
                            </p>

                        </span>
                        </div>
                        <div className="relative mt-4 gap-2 flex flex-col">
                            <div
                                className="after:content-[''] after:absolute after:top-[18px] after:-left-[43.5px] after:h-[6px] after:w-[6px] after:bg-primary after:rounded-[50%] after:[box-shadow:0_0_0_4px_#373737]"></div>
                            <h3 className="text-lg font-bold text-white">Baccalauréat S | <span
                                className="text-lightgrey">Lycée Pierre Amiral Bouvet</span></h3>
                            <span className="text-md font-medium text-primary">2019</span>
                            <span className="text-white font-light text-md flex flex-col gap-2">
                            <p className="font-semibold">Mention Assez Bien</p>
                            <p className="font-semibold">Mention Européenne Anglais</p>
                            <p className="">
                                Projet tuteuré (TPE) : Découverte de
                                l&apos;HTML/CSS via le développement d&apos;un
                                widget météo pour un miroir connecté
                            </p>
                        </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col my-24">
                <div className="flex items-center gap-4">
                    <div
                        className="p-3.5 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                        <BriefcaseBusiness height={20} width={20} className="text-primary"/>
                    </div>
                    <h2 className="text-2xl font-bold text-white">Expériences professionnelles</h2>
                </div>
                <div className="h-full flex gap-10">
                    <div className="ml-6 border-[0.95px] border-border"></div>
                    <div className="flex flex-col gap-8 pt-8">
                        <div className="relative mt-4 gap-2 flex flex-col">
                            <div
                                className="after:content-[''] after:absolute after:top-[18px] after:-left-[43.5px] after:h-[6px] after:w-[6px] after:bg-primary after:rounded-[50%] after:[box-shadow:0_0_0_4px_#373737]"></div>
                            <h3 className="text-lg font-bold text-white">Apprenti Webmaster
                                | <span className="text-lightgrey">HiPe Kids Nice</span></h3>
                            <span className="text-md font-medium text-primary">2023 - 2024</span>
                            <span className="text-white font-light text-md flex flex-col gap-2">
                                <p>Gestion et maintenance du site WordPress</p>
                                <p>Aide au développement d’une nouvelle plateforme</p>
                                <p>Support en ligne</p>
                            </span>
                        </div>
                        <div className="relative mt-4 gap-2 flex flex-col">
                            <div
                                className="after:content-[''] after:absolute after:top-[18px] after:-left-[43.5px] after:h-[6px] after:w-[6px] after:bg-primary after:rounded-[50%] after:[box-shadow:0_0_0_4px_#373737]"></div>
                            <h3 className="text-lg font-bold text-white">Stagiaire Développeur Web | <span
                                className="text-lightgrey">Kamakys Saint-Leu</span></h3>
                            <span className="text-md font-medium text-primary">2023</span>
                            <span className="text-white font-light text-md flex flex-col gap-2">
                                <p>Mise en place d’un module de Réservation/Click & Collect sur une Marketplace Prestashop</p>
                            </span>
                        </div>
                        <div className="relative mt-4 gap-2 flex flex-col">
                            <div
                                className="after:content-[''] after:absolute after:top-[18px] after:-left-[43.5px] after:h-[6px] after:w-[6px] after:bg-primary after:rounded-[50%] after:[box-shadow:0_0_0_4px_#373737]"></div>
                            <h3 className="text-lg font-bold text-white">Volontaire Service Civique | <span
                                className="text-lightgrey">Frnace Travail Rennes Centre</span></h3>
                            <span className="text-md font-medium text-primary">2021</span>
                            <span className="text-white font-light text-md flex flex-col gap-2">
                                <p>
                                    Développement d&apos;une carte interactive via API Google Maps dans le cadre d&apos;un recrutement
                                </p>
                            </span>
                        </div>
                        <div className="relative mt-4 gap-2 flex flex-col">
                            <div
                                className="after:content-[''] after:absolute after:top-[18px] after:-left-[43.5px] after:h-[6px] after:w-[6px] after:bg-primary after:rounded-[50%] after:[box-shadow:0_0_0_4px_#373737]"></div>
                            <h3 className="text-lg font-bold text-white">Stagiaire Développeur Web | <span
                                className="text-lightgrey">HandiRaceMotor33 Mérignac</span></h3>
                            <span className="text-md font-medium text-primary">2021</span>
                            <span className="text-white font-light text-md flex flex-col gap-2">
                                <p className="">
                                    Intégration d&apos;une maquette sur WordPress
                                </p>
                                <p>
                                    Développement de fonctionnalités en JavaScript et PHP
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-white">Hard Skills</h2>
                <div
                    className="flex flex-col gap-6 p-6 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                    <div className="flex flex-col gap-2">
                        <span className="text-white font-bold">HTML</span>
                        <Progress value={95} className="bg-dark-3 *:bg-primary *:rounded h-2.5"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-white font-bold">CSS (Bootstrap & Tailwind)</span>
                        <Progress value={90} className="bg-dark-3 *:bg-primary *:rounded h-2.5"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-white font-bold">Javascript (jQuery, ReactJS, NextJS, Node.js)</span>
                        <Progress value={85} className="bg-dark-3 *:bg-primary *:rounded h-2.5"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-white font-bold">PHP (Laravel, Symfony)</span>
                        <Progress value={75} className="bg-dark-3 *:bg-primary *:rounded h-2.5"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-white font-bold">Gestion de base de données (SQL)</span>
                        <Progress value={80} className="bg-dark-3 *:bg-primary *:rounded h-2.5"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-white font-bold">Déploiement (Docker, Træfik)</span>
                        <Progress value={70} className="bg-dark-3 *:bg-primary *:rounded h-2.5"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-white font-bold">React Native</span>
                        <Progress value={70} className="bg-dark-3 *:bg-primary *:rounded h-2.5"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-white font-bold">ElectronJS</span>
                        <Progress value={65} className="bg-dark-3 *:bg-primary *:rounded h-2.5"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-white font-bold">Gestion de projets</span>
                        <Progress value={75} className="bg-dark-3 *:bg-primary *:rounded h-2.5"/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-white font-bold">Anglais (TOEIC 950 - Niveau C1)</span>
                        <Progress value={90} className="bg-dark-3 *:bg-primary *:rounded h-2.5"/>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4 my-12">
                <h2 className="text-2xl font-bold text-white">Soft Skills</h2>
                <div className="grid xl:grid-cols-3 gap-y-8 gap-x-6">
                    <div
                        className="flex flex-row gap-6 lg:justify-center items-center p-4 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                        <Brain height={50} width={50} className="text-primary w-1/4"/>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-primary font-semibold">
                                Vivacité d&apos;esprit
                            </h3>
                        </div>
                    </div>
                    <div
                        className="flex flex-row gap-6 lg:justify-center items-center p-4 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                        <Users height={50} width={50} className="text-primary w-1/4"/>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-primary font-semibold">
                                Travail d’équipe
                            </h3>
                        </div>
                    </div>
                    <div
                        className="flex flex-row gap-6 lg:justify-center items-center p-4 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                        <Smile height={50} width={50} className="text-primary w-1/4"/>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-primary font-semibold">
                                Ouverture d’esprit
                            </h3>
                        </div>
                    </div>
                    <div
                        className="flex flex-row gap-6 lg:justify-center items-center p-4 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                        <Wrench height={50} width={50} className="text-primary w-1/4"/>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-primary font-semibold">
                                Résolution de problèmes
                            </h3>
                        </div>
                    </div>
                    <div
                        className="flex flex-row gap-6 lg:justify-center items-center p-4 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                        <Puzzle height={50} width={50} className="text-primary w-1/4"/>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-primary font-semibold">
                                Adaptation
                            </h3>
                        </div>
                    </div>
                    <div
                        className="flex flex-row gap-6 lg:justify-center items-center p-4 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                        <MessageCircleQuestion height={50} width={50} className="text-primary w-1/4"/>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-primary font-semibold">
                                Curiosité
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}