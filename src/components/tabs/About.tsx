"use client";
import {AppWindow, TabletSmartphone, X} from "lucide-react"
import Image from "next/image";

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


export default function About() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <div className="dark:text-white text-light-4 flex flex-col gap-4">
                    <p>
                        Développeur Fullstack, passionné par l’optimisation et l’expérience utilisateur,
                        je transforme les idées en solutions concrètes et intuitives. Toujours en quête de nouveaux
                        défis, j’aime créer des produits innovants et efficaces.
                    </p>
                </div>
            </div>

            <h2 className="text-2xl font-bold text-light-3 dark:text-dark-3">Mon activité</h2>
            <div className="grid xl:grid-cols-2 gap-y-8 gap-x-6">
                <div
                    className="flex flex-row gap-8 lg:justify-center items-center p-4 before:content-[''] before:absolute before:[-radius:inherit] rounded-xl dark:-dark-2 bg-light-1 dark:bg-dark-4/20">
                    <AppWindow height={50} width={50} className="text-dark-3 w-1/4"/>
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
                    <TabletSmartphone height={50} width={50} className="text-dark-3 w-1/4"/>
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


            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold md:mb-8 mb-12 text-light-3 dark:text-dark-3">Recommendations</h2>
                <div className="grid xl:grid-cols-2 grid-cols-1 gap-x-6 gap-y-16">
                    <Dialog>
                        <DialogTrigger>
                            <span
                                className="relative flex flex-col gap-8 lg:justify-center items-center p-4 before:content-[''] before:absolute before:[-radius:inherit] rounded-xl bg-light-1 dark:bg-dark-4/20">
                                <span
                                    className="absolute top-0 left-0 bg-light-3/40 dark:bg-dark-3/40 backdrop-blur-md rounded-2xl translate-x-[20px] -translate-y-[30px]">
                                    <Image src="/yan.png" alt="profile" width={80} height={80} className=""/>
                                </span>
                                <h3 className="text-lg font-semibold lg:m-0 md:-ml-80 ml-20 text-light-3 dark:text-dark-3 text-center">
                                    Yan Bourquard-Ania
                                </h3>
                                <span className=" text-light-3 dark:text-white !text-left text-sm">
                                    « Thomas est un jeune développeur web sérieux.
                                        Je peux attester de ses compétences en Node.js et PHP pour le backend,
                                        ainsi qu’en React.js pour le frontend.
                                        Mais la vraie force d’un profil comme Thomas,
                                        c’est ... »
                                </span>
                            </span>
                        </DialogTrigger>

                        <DialogContent
                            className="[&>button]:hidden flex flex-col gap-8 lg:justify-center items-center p-4 before:content-[''] before:absolute before:[-radius:inherit] rounded-xl bg-light-1 dark:bg-dark-3/20">
                            <DialogHeader>
                                <span
                                    className="absolute top-0 left-0 bg-light-3 dark:bg-dark-2 rounded-2xl translate-x-[20px] -translate-y-[30px]">
                                    <Image src="/yan.png" alt="profile" width={80} height={80} className=""/>
                                </span>
                                <DialogTitle className="text-center text-white lg:-ml-20 md:ml-2 ml-20">Yan
                                    Bourquard-Ania</DialogTitle>
                                <DialogDescription className="!mt-6">
                                    <span className="text-light-4 dark:text-white !text-left md:text-base text-sm">
                                        « Thomas est un jeune développeur web sérieux.
                                        Je peux attester de ses compétences en Node.js et PHP pour le backend,
                                        ainsi qu’en React.js pour le frontend.
                                        Mais la vraie force d’un profil comme Thomas,
                                        c’est sa vivacité d’esprit et sa capacité à s’adapter à un environnement de développement.
                                        Si vous cherchez un freelance pour concrétiser votre projet en développement,
                                        ne cherchez plus : vous avez trouvé ! »
                                    </span>
                                </DialogDescription>
                            </DialogHeader>
                            <DialogClose asChild className="absolute top-2 right-2">
                                <X className="text-light-4 dark:text-white w-6 h-6 cursor-pointer backdrop-blur-lg rounded-lg"/>
                            </DialogClose>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger>
                            <span
                                className="relative flex flex-col gap-8 lg:justify-center items-center p-4 before:content-[''] before:absolute before:[-radius:inherit] rounded-xl bg-light-1 dark:bg-dark-4/20">
                                <span
                                    className="absolute top-0 left-0 bg-light-3/40 dark:bg-dark-3/40 backdrop-blur-md rounded-2xl translate-x-[20px] -translate-y-[30px]">
                                    <Image src="/fred.png" alt="profile" width={80} height={80} className=""/>
                                </span>
                                <h3 className="text-lg font-semibold lg:m-0 md:-ml-80 ml-20 text-light-3 dark:text-dark-3 text-center">
                                    Quentin Wavelet
                                </h3>
                                <span className=" text-light-3 dark:text-white !text-left text-sm">
                                    « Thomas a brillamment atteint les objectifs fixés en amont. Il a parfaitement su s&apos;adapter au fonctionnement quelque peu différent de notre association. »<br/><br/>
                                </span>
                            </span>
                        </DialogTrigger>

                        <DialogContent
                            className="[&>button]:hidden flex flex-col gap-8 lg:justify-center items-center p-4 before:content-[''] before:absolute before:[-radius:inherit] rounded-xl bg-light-1 dark:bg-dark-3">
                            <DialogHeader>
                                <span
                                    className="absolute top-0 left-0 bg-light-2 dark:bg-dark-2 rounded-2xl translate-x-[20px] -translate-y-[30px]">
                                    <Image src="/yan.png" alt="profile" width={80} height={80} className=""/>
                                </span>
                                <DialogTitle className="text-center text-white lg:-ml-20 md:ml-2 ml-20">
                                    Quentin Wavelet
                                </DialogTitle>
                                <DialogDescription className="!mt-6">
                                    <span className="text-light-4 dark:text-white !text-left md:text-base text-sm">
                                        « Thomas a brillamment atteint les objectifs fixés en amont.
                                        Il a parfaitement su s&apos;adapter au fonctionnement quelque peu différent
                                        de notre association. »
                                    </span>
                                </DialogDescription>
                            </DialogHeader>
                            <DialogClose asChild className="absolute top-2 right-2">
                                <X className="text-light-4 dark:text-white w-6 h-6 cursor-pointer backdrop-blur-lg rounded-lg"/>
                            </DialogClose>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    );
}

