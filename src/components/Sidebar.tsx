import Image from "next/image";
import {Cake, Github, Linkedin, Mail, MapPin, Smartphone} from "lucide-react";
import Link from "next/link";

export default function Sidebar() {
    return (
        <section
            className="flex flex-col lg:sticky top-14 lg:items-center max-h-full h-full mb-0 lg:pt-14 lg:pb-7 lg:px-7 p-7 bg-dark-2 rounded-2xl lg:max-w-[275px] md:w-max border-border border">
            <div className="flex lg:justify-center lg:flex-col lg:items-center gap-8">
                <div className="flex flex-col items-center justify-center bg-dark-3 rounded-[30px] w-32 h-32">
                    <Image src="/my-avatar.png" alt="my-avatar" width={150} height={150}/>
                </div>
                <div className="flex flex-col lg:items-center justify-center">
                    <h1 className="text-2xl font-semibold my-4">Thomas Mazeau</h1>
                    <p className="bg-dark-4 text-white px-4 rounded-lg py-1 text-sm w-fit">Web developer</p>
                </div>
            </div>

            <div
                className="mt-6 py-12 flex lg:flex-col border-t border-border lg:border-b-0 border-b lg:w-auto w-full gap-8 flex-wrap">
                <div className="flex flex-col gap-8">
                    <div className="flex items-center gap-4">
                        <div
                            className="p-3.5 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                            <Mail height={18} width={18} className="text-primary"/>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <h2 className="text-xs text-lightgrey">EMAIL</h2>
                            <Link href="mailto:thomas.mazeau@icloud.com"><p
                                className="text-sm">thomas.mazeau@icloud.com</p></Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div
                            className="p-3.5 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                            <Smartphone height={18} width={18} className="text-primary"/>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <h2 className="text-xs text-lightgrey">PHONE</h2>
                            <p className="text-sm">+33 6 15 94 59 51</p>
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
                            <p className="text-sm">9 septembre 2001</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div
                            className="p-3.5 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                            <MapPin height={18} width={18} className="text-primary"/>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <h2 className="text-xs text-lightgrey">LOCATION</h2>
                            <p className="text-sm">Nice, France</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex mt-8 gap-4">
                <Link target="_blank" href="https://github.com/toms-beatz"><Github width={18} height={18}
                                                                                   className="text-lightgrey"/></Link>
                <Link target="_blank" href="https://www.linkedin.com/in/thomas-mazeau-611481204"><Linkedin width={18}
                                                                                                           height={18}
                                                                                                           className="text-lightgrey"/></Link>
            </div>
        </section>
    );
}