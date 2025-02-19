"use client";

import {
    BriefcaseBusiness,
    GraduationCap,
    Trophy,
} from "lucide-react";
import SoftSkills from "../SoftSkills";
import HardSkills from "../HardSkills";


export default function Resume() {
    return (
        <>
            <div className="flex flex-col">
                <div className="flex items-center gap-4">
                    <div
                        className="p-3.5 before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl bg-light-1 dark:bg-dark-2">
                        <GraduationCap height={20} width={20} className="text-light-4 dark:text-dark-3" />
                    </div>
                    <h2 className="text-2xl font-bold text-light-3 dark:text-dark-3">Formation</h2>
                </div>
                <div className="h-full flex gap-10">
                    <div className="ml-6 border-[0.95px] border-light-3 dark:border-dark-3"></div>
                    <div className="flex flex-col gap-8 pt-8">
                        <div className="relative mt-4 gap-2 flex flex-col">
                            <div
                                className="after:content-[''] after:absolute after:top-[18px] after:-left-[43.5px] after:h-[6px] after:w-[6px] after:bg-light-4 dark:after:bg-dark-3 after:rounded-[50%] dark:after:[box-shadow:0_0_0_4px_#373737] after:[box-shadow:0_0_0_4px_#dee2e6]"></div>
                            <h3 className="text-lg font-bold text-light-5 dark:text-white">Titre RNCP Concepteur Développeur
                                d&apos;Applications
                                | <span className=" text-light-4 dark:text-lightgrey">MyDigitalSchool Nice</span></h3>
                            <span className="text-md font-medium text-light-4">2024</span>
                            <span className="text-light-3 dark:text-white font-light text-md flex flex-col gap-2">
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
                                className="after:content-[''] after:absolute after:top-[18px] after:-left-[43.5px] after:h-[6px] after:w-[6px] after:bg-light-4 dark:after:bg-dark-3 after:rounded-[50%] dark:after:[box-shadow:0_0_0_4px_#373737] after:[box-shadow:0_0_0_4px_#dee2e6]"></div>
                            <h3 className="text-lg font-bold text-light-5 dark:text-white">Bachelor Développeur Web | <span
                                className=" text-light-4 dark:text-lightgrey">MyDigitalSchool Nice</span></h3>
                            <span className="text-md font-medium text-light-4">2024</span>
                            <span className="text-light-4 dark:text-white font-light text-md flex flex-col gap-2">
                                <p className="font-bold text-md flex gap-2 items-center dark:text-yellow-300 text-yellow-500">
                                    <Trophy height={20} width={20} className="dark:text-yellow-300 text-yellow-500" />
                                    Major de promotion
                                </p>
                            </span>
                        </div>
                        <div className="relative mt-4 gap-2 flex flex-col">
                            <div
                                className="after:content-[''] after:absolute after:top-[18px] after:-left-[43.5px] after:h-[6px] after:w-[6px] after:bg-light-4 dark:after:bg-dark-3 after:rounded-[50%] dark:after:[box-shadow:0_0_0_4px_#373737] after:[box-shadow:0_0_0_4px_#dee2e6]"></div>
                            <h3 className="text-lg font-bold text-light-5 dark:text-white">DEUST Webmaster & Métiers de l&apos;Internet | <span
                                className=" text-light-4 dark:text-lightgrey">Université de Limoges</span></h3>
                            <span className="text-md font-medium text-light-4">2023</span>
                            <span className="text-light-3 dark:text-white font-light text-md flex flex-col gap-2">
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
                                className="after:content-[''] after:absolute after:top-[18px] after:-left-[43.5px] after:h-[6px] after:w-[6px] after:bg-light-4 dark:after:bg-dark-3 after:rounded-[50%] dark:after:[box-shadow:0_0_0_4px_#373737] after:[box-shadow:0_0_0_4px_#dee2e6]"></div>
                            <h3 className="text-lg font-bold text-light-5 dark:text-white">Baccalauréat S | <span
                                className=" text-light-4 dark:text-lightgrey">Lycée Pierre Amiral Bouvet</span></h3>
                            <span className="text-md font-medium text-light-4">2019</span>
                            <span className="text-light-3 dark:text-white font-light text-md flex flex-col gap-2">
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
                        className="p-3.5 before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl bg-light-1 dark:bg-dark-2">
                        <BriefcaseBusiness height={20} width={20} className="text-light-4 dark:text-dark-3" />
                    </div>
                    <h2 className="text-2xl font-bold text-light-3 dark:text-white">Expériences professionnelles</h2>
                </div>
                <div className="h-full flex gap-10">
                    <div className="ml-6 border-[0.95px] border-light-3 dark:border-dark-3"></div>
                    <div className="flex flex-col gap-8 pt-8">
                        <div className="relative mt-4 gap-2 flex flex-col">
                            <div
                                className="after:content-[''] after:absolute after:top-[18px] after:-left-[43.5px] after:h-[6px] after:w-[6px] after:bg-light-4 dark:after:bg-dark-3 after:rounded-[50%] dark:after:[box-shadow:0_0_0_4px_#373737] after:[box-shadow:0_0_0_4px_#dee2e6]"></div>
                            <h3 className="text-lg font-bold text-light-5 dark:text-white">Apprenti Webmaster
                                | <span className=" text-light-4 dark:text-lightgrey">HiPe Kids Nice</span></h3>
                            <span className="text-md font-medium text-light-4">2023 - 2024</span>
                            <span className="text-light-3 dark:text-white font-light text-md flex flex-col gap-2">
                                <p>Gestion et maintenance du site WordPress</p>
                                <p>Aide au développement d’une nouvelle plateforme</p>
                                <p>Support en ligne</p>
                            </span>
                        </div>
                        <div className="relative mt-4 gap-2 flex flex-col">
                            <div
                                className="after:content-[''] after:absolute after:top-[18px] after:-left-[43.5px] after:h-[6px] after:w-[6px] after:bg-light-4 dark:after:bg-dark-3 after:rounded-[50%] dark:after:[box-shadow:0_0_0_4px_#373737] after:[box-shadow:0_0_0_4px_#dee2e6]"></div>
                            <h3 className="text-lg font-bold text-light-5 dark:text-white">Stagiaire Développeur Web | <span
                                className=" text-light-4 dark:text-lightgrey">Kamakys Saint-Leu</span></h3>
                            <span className="text-md font-medium text-light-4">2023</span>
                            <span className="text-light-3 dark:text-white font-light text-md flex flex-col gap-2">
                                <p>Mise en place d’un module de Réservation/Click & Collect sur une Marketplace Prestashop</p>
                            </span>
                        </div>
                        <div className="relative mt-4 gap-2 flex flex-col">
                            <div
                                className="after:content-[''] after:absolute after:top-[18px] after:-left-[43.5px] after:h-[6px] after:w-[6px] after:bg-light-4 dark:after:bg-dark-3 after:rounded-[50%] dark:after:[box-shadow:0_0_0_4px_#373737] after:[box-shadow:0_0_0_4px_#dee2e6]"></div>
                            <h3 className="text-lg font-bold text-light-5 dark:text-white">Volontaire Service Civique | <span
                                className="text-light-4 dark:text-lightgrey">France Travail Rennes Centre</span></h3>
                            <span className="text-md font-medium text-light-4">2021</span>
                            <span className="text-light-3 dark:text-white font-light text-md flex flex-col gap-2">
                                <p>
                                    Développement d&apos;une carte interactive via API Google Maps dans le cadre d&apos;un recrutement
                                </p>
                            </span>
                        </div>
                        <div className="relative mt-4 gap-2 flex flex-col">
                            <div
                                className="after:content-[''] after:absolute after:top-[18px] after:-left-[43.5px] after:h-[6px] after:w-[6px] after:bg-light-4 dark:after:bg-dark-3 after:rounded-[50%] dark:after:[box-shadow:0_0_0_4px_#373737] after:[box-shadow:0_0_0_4px_#dee2e6]"></div>
                            <h3 className="text-lg font-bold text-light-5 dark:text-white">Stagiaire Développeur Web | <span
                                className=" text-light-4 dark:text-lightgrey">HandiRaceMotor33 Mérignac</span></h3>
                            <span className="text-md font-medium text-light-4">2021</span>
                            <span className="text-light-3 dark:text-white font-light text-md flex flex-col gap-2">
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

            <HardSkills/>

            <SoftSkills/>
        </>
    );
}