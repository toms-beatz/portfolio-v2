"use client";
import {AppWindow} from "lucide-react"
import Image from "next/image";

export default function About() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <p className="text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam, quod.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold">Mon activité</h2>
                <div className="grid lg:grid-cols-2  gap-y-4 gap-x-6">
                    <div
                        className="flex flex-row gap-8 lg:justify-center items-center p-4 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                        <AppWindow height={50} width={50}/>
                        <div className="flex flex-col gap-2">
                            <h3>
                                Web Development
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>

                    <div
                        className="flex flex-row gap-8 lg:justify-center items-center p-4 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                        <AppWindow height={50} width={50}/>
                        <div className="flex flex-col gap-2">
                            <h3>
                                Web Development
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>

                    <div
                        className="flex flex-row gap-8 lg:justify-center items-center p-4 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                        <AppWindow height={50} width={50}/>
                        <div className="flex flex-col gap-2">
                            <h3>
                                Web Development
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>

                    <div
                        className="flex flex-row gap-8 lg:justify-center items-center p-4 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                        <AppWindow height={50} width={50}/>
                        <div className="flex flex-col gap-2">
                            <h3>
                                Web Development
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold mb-8">Recommendations</h2>
                <div className="grid xl:grid-cols-2 grid-cols-1 lg:gap-y-4 gap-x-6 gap-y-16">
                    <div
                        className="relative flex flex-col gap-4 justify-between items-center p-4 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                        <div className="absolute top-0 left-0 bg-dark-4 rounded-2xl translate-x-[30px] -translate-y-[30px]">
                            <Image src="/avatar-1.png" alt="profile" width={80} height={80} className=""/>
                        </div>
                        <h3 className="text-lg font-semibold lg:m-0 ml-24 md:-ml-80">
                            Yan Bourquard
                        </h3>
                        <div className="lg:ml-0 md:-ml-80">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    </div>
                    <div
                        className="relative flex flex-col gap-4 justify-between items-center p-4 bg-[linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)] [box-shadow:-4px_8px_24px_hsla(0,_0%,_0%,_0.125)] before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl border-t border-l border-r-0 border-b-0 border-border">
                        <div className="absolute top-0 left-0 bg-dark-4 rounded-2xl translate-x-[30px] -translate-y-[30px]">
                            <Image src="/avatar-4.png" alt="profile" width={80} height={80} className=""/>
                        </div>
                        <h3 className="text-lg font-semibold lg:m-0 ml-24 md:-ml-80">
                            Frédéric Muller
                        </h3>
                        <div className="lg:ml-0 md:-ml-80">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}