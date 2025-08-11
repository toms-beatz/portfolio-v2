import React from 'react'
import Image from "next/image";
import { getTestimonials } from '@/app/api/testimonials/getTestimonals';
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { X } from "lucide-react"
import { useState, useEffect } from "react";

interface Testimonial {
    name: string;
    desc: string;
    img: { url: string };
}

const Testimonials = () => {

    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

    useEffect(() => {
        getTestimonials()
            .then((data) => {
                console.log("Données récupérées :", data);  
                setTestimonials(data);
            })
            .catch((error) => {
                console.error("Erreur de récupération des projets:", error);  
            });
    }, []);
    const truncateDesc = (desc: string) => {
        if (desc.length > 100) {
            return desc.substring(0, 150) + '...'; 
        }
        return desc; 
    };

    return (
        <>
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-bold md:mb-8 mb-12 text-light-3 dark:text-dark-3">Recommandations</h2>
                <div className="grid xl:grid-cols-2 grid-cols-1 gap-x-6 gap-y-16">
                    {testimonials && testimonials.map((testimonial, index) => (
                        <Dialog key={index}>
                            <DialogTrigger>
                                <span
                                    className="relative flex flex-col gap-8 lg:justify-center items-center p-4 before:content-[''] before:absolute before:[-radius:inherit] rounded-xl bg-light-1 dark:bg-dark-4/20">
                                    <span
                                        className="absolute top-0 left-0 bg-light-3/40 dark:bg-dark-3/40 backdrop-blur-md rounded-2xl translate-x-[20px] -translate-y-[30px]">
                                        <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + testimonial.img.url} alt="profile" width={80} height={80} className="" />
                                    </span>
                                    <h3 className="text-lg font-semibold lg:m-0 md:-ml-80 ml-20 text-light-3 dark:text-dark-3 text-center">
                                        {testimonial.name}
                                    </h3>
                                    <span className=" text-light-3 dark:text-white !text-left text-sm">
                                        « {truncateDesc(testimonial.desc)} »
                                    </span>
                                </span>
                            </DialogTrigger>

                            <DialogContent
                                className="ring-0 ring-offset-0 [&>button]:hidden flex flex-col gap-8 lg:justify-center items-center p-4 before:content-[''] before:absolute before:[-radius:inherit] rounded-xl border-0 bg-light-1 dark:bg-dark-3/20 backdrop-blur-md">
                                <DialogHeader>
                                    <span
                                        className="absolute top-0 left-0 bg-light-3/50 dark:bg-dark-3/90 backdrop-blur-3xl rounded-2xl translate-x-[20px] -translate-y-[30px]">
                                        <Image src={process.env.NEXT_PUBLIC_STRAPI_API_URL + testimonial.img.url} alt="profile" width={80} height={80} className="" />
                                    </span>
                                    <DialogTitle className="text-center dark:text-dark-3 text-light-3 lg:-ml-20 md:ml-2 ml-20">
                                        {testimonial.name}
                                    </DialogTitle>
                                    <DialogDescription className="!mt-6">
                                        <span className="text-light-3 dark:text-white !text-left md:text-base text-sm">
                                            « {testimonial.desc} »
                                        </span>
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogClose asChild className="absolute top-2 right-2">
                                    <X className="text-light-4 dark:text-white w-6 h-6 cursor-pointer backdrop-blur-lg rounded-lg" />
                                </DialogClose>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Testimonials