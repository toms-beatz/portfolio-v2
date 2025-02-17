import Image from "next/image";
import {Cake, Github, Linkedin, Mail, MapPin, Smartphone, ChevronUp, ChevronDown} from "lucide-react";
import Link from "next/link";
import {useState} from "react";
import ThemeProvider from "@/components/ThemeProvider";


export default function Sidebar({activeTab}: { activeTab: string }) {

    const avatarImages: { [key: string]: string } = {
        About: "/avatar-about.png",
        Resume: "/avatar-resume.png",
        Contact: "/avatar-contact.png",
        Portfolio: "/avatar-portfolio.png",
    };

    const avatarSrc = avatarImages[activeTab] || "/my-avatar.png";
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const handleDropdownToggle = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <>
            <section
                className="relative flex flex-col md:top-0 top-14 lg:items-center max-h-full !h-full mb-0 lg:pt-14 lg:pb-7 lg:px-7 p-7 bg-light-2 dark:bg-dark-2 rounded-2xl lg:max-w-[275px] w-full">
                <div
                    className="lg:hidden absolute top-0 right-0 flex gap-4 items-center justify-center p-2 rounded-bl-2xl rounded-tr-[0.90rem] dark:bg-dark-4/20 bg-light-1 border-2 dark:bordr- border-light-2 dark:border-dark-4/20 text-lightgrey"
                >
                    <ThemeProvider/>
                    <button
                        onClick={handleDropdownToggle}
                    >
                        {isDropdownVisible ?
                            <ChevronUp className="text-light-4 dark:text-light-4"/>

                            //<Minus className="text-primary"/>


                            :
                            <ChevronDown className="text-light-4 dark:text-light-4"/>
                            //<Plus className="text-primary"/>
                        }
                    </button>
                </div>
                <div className="flex lg:justify-center lg:flex-col lg:items-center gap-8">
                    <div
                        className="flex flex-col items-center justify-center bg-light-1 dark:bg-dark-4/30 rounded-[30px] lg:w-32 lg:h-32 py-2 px-4 md:py-4 md:px-6 lg:py-2 lg:px-4">
                        {avatarSrc && <Image src={avatarSrc} alt="my-avatar" width={80} height={80}/>}
                    </div>
                    <div className="flex flex-col lg:items-center justify-center">
                        <h1 className="md:text-2xl text-lg font-semibold my-4 text-light-3 dark:text-dark-3">Thomas
                            Mazeau</h1>
                        <p className="dark:bg-dark-4/40 bg-light-4/20 text-light-4 dark:text-white px-4 rounded-lg py-1 text-xs md:text-sm w-fit">Développeur
                            Fullstack</p>
                    </div>
                </div>

                <div className={`${
                    isDropdownVisible ? "flex flex-col" : "hidden"
                } lg:flex mt-6 pt-12 lg:flex-col  lg:w-auto w-full gap-8 flex-wrap`}>
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <div
                                className="p-3.5 before:content-[''] before:absolute before:[-radius:inherit] rounded-xl bg-light-1 dark:bg-dark-4/40">
                                <Mail height={18} width={18} className="text-dark-3"/>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <h2 className="text-xs text-light-3 dark:text-lightgrey">EMAIL</h2>
                                <Link href="mailto:thomas.mazeau@icloud.com"><p
                                    className="text-sm text-light-4 dark:text-white">thomas.mazeau@icloud.com</p></Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div
                                className="p-3.5 before:content-[''] before:absolute before:[-radius:inherit] rounded-xl bg-light-1 dark:bg-dark-4/40">
                                <Smartphone height={18} width={18} className="text-dark-3"/>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <h2 className="text-xs text-light-3 dark:text-lightgrey">TÉLÉPHONE</h2>
                                <Link href="tel:0615945951"><p className="text-sm text-light-4 dark:text-white">+33 6 15
                                    94 59 51</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <div
                                className="p-3.5 before:content-[''] before:absolute before:[-radius:inherit] rounded-xl bg-light-1 dark:bg-dark-4/40">
                                <Cake height={18} width={18} className="text-dark-3"/>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <h2 className="text-xs text-light-3 dark:text-lightgrey">BIRTHDAY</h2>
                                <p className="text-sm text-light-4 dark:text-white">9 septembre 2001 (23 ans)</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div
                                className="p-3.5 before:content-[''] before:absolute before:[-radius:inherit] rounded-xl bg-light-1 dark:bg-dark-4/40">
                                <MapPin height={18} width={18} className="text-dark-3"/>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <h2 className="text-xs text-light-3 dark:text-lightgrey">LOCALISATION</h2>
                                <p className="text-sm text-light-4 dark:text-white">Nice, France</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:mt-8 mt-4 gap-4 lg:justify-center">
                        <Link target="_blank" href="https://github.com/toms-beatz"><Github width={20} height={20}
                                                                                           className="dark:text-lightgrey text-light-4"/></Link>
                        <Link target="_blank" href="https://www.linkedin.com/in/thomas-mazeau-611481204"><Linkedin
                            width={20}
                            height={20}
                            className="dark:text-lightgrey text-light-4"/></Link>
                    </div>
                </div>

            </section>
        </>
    )
        ;
}