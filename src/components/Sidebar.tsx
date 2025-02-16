import Image from "next/image";
import {Cake, Github, Linkedin, Mail, MapPin, Minus, Plus, Smartphone} from "lucide-react";
import Link from "next/link";
import {useState} from "react";


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
                className="relative flex flex-col lg:sticky top-14 lg:items-center max-h-full h-full mb-0 lg:pt-14 lg:pb-7 lg:px-7 p-7 bg-dark-2 rounded-2xl lg:max-w-[275px] w-full border-border border">
                <button
                    onClick={handleDropdownToggle}
                    className="lg:hidden absolute top-0 right-0 flex items-center justify-center p-1 rounded-bl-2xl rounded-tr-2xl border border-border bg-dark-3 text-lightgrey"
                >
                    {isDropdownVisible ?
                        //<ChevronUp className="text-primary"/>
                        <Minus className="text-primary"/>
                        :
                        //<ChevronDown className="text-primary"/>
                        <Plus className="text-primary"/>
                    }
                </button>
                <div className="flex lg:justify-center lg:flex-col lg:items-center gap-8">
                    <div
                        className="flex flex-col items-center justify-center bg-dark-3 rounded-[30px] lg:w-32 lg:h-32 py-2 px-4 md:py-4 md:px-6 lg:py-2 lg:px-4">
                        {avatarSrc && <Image src={avatarSrc} alt="my-avatar" width={80} height={80}/>}
                    </div>
                    <div className="flex flex-col lg:items-center justify-center">
                        <h1 className="md:text-2xl text-lg font-semibold my-4 text-white">Thomas Mazeau</h1>
                        <p className="bg-primary/40 text-white px-4 rounded-lg py-1 text-xs md:text-sm w-fit">Développeur
                            Fullstack</p>
                    </div>
                </div>

                <div className={`${
                    isDropdownVisible ? "flex flex-col" : "hidden"
                } lg:flex mt-6 pt-12 lg:flex-col border-t border-border lg:w-auto w-full gap-8 flex-wrap`}>
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <div
                                className="p-3.5 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                                <Mail height={18} width={18} className="text-primary"/>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <h2 className="text-xs text-lightgrey">EMAIL</h2>
                                <Link href="mailto:thomas.mazeau@icloud.com"><p
                                    className="text-sm text-white">thomas.mazeau@icloud.com</p></Link>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div
                                className="p-3.5 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                                <Smartphone height={18} width={18} className="text-primary"/>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <h2 className="text-xs text-lightgrey">TÉLÉPHONE</h2>
                                <Link href="tel:0615945951"><p className="text-sm text-white">+33 6 15 94 59 51</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <div
                                className="p-3.5 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                                <Cake height={18} width={18} className="text-primary"/>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <h2 className="text-xs text-lightgrey">BIRTHDAY</h2>
                                <p className="text-sm text-white">9 septembre 2001 (23 ans)</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div
                                className="p-3.5 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                                <MapPin height={18} width={18} className="text-primary"/>
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <h2 className="text-xs text-lightgrey">LOCALISATION</h2>
                                <p className="text-sm text-white">Nice, France</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:mt-8 mt-4 gap-4 lg:justify-center">
                        <Link target="_blank" href="https://github.com/toms-beatz"><Github width={18} height={18}
                                                                                           className="text-lightgrey"/></Link>
                        <Link target="_blank" href="https://www.linkedin.com/in/thomas-mazeau-611481204"><Linkedin
                            width={18}
                            height={18}
                            className="text-lightgrey"/></Link>
                    </div>
                </div>


            </section>
        </>
    )
        ;
}