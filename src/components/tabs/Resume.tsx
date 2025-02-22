"use client";

import {
    BriefcaseBusiness,
    GraduationCap,
} from "lucide-react";
import SoftSkills from "../SoftSkills";
import HardSkills from "../HardSkills";

import Formations from "../Formations";
import Experiences from "../Experiences";



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
                <Formations/>
            </div>

            <div className="flex flex-col my-24">
                <div className="flex items-center gap-4">
                    <div
                        className="p-3.5 before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl bg-light-1 dark:bg-dark-2">
                        <BriefcaseBusiness height={20} width={20} className="text-light-4 dark:text-dark-3" />
                    </div>
                    <h2 className="text-2xl font-bold text-light-3 dark:text-white">Expériences professionnelles</h2>
                </div>
                <Experiences/>
            </div>

            <HardSkills/>

            <SoftSkills/>
        </>
    );
}