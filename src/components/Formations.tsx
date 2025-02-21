import React from 'react';
import { Trophy } from "lucide-react";
import { useEffect } from 'react';
import { getFormations } from '@/app/api/resume/getFormations';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

interface Formation {
    title: string;
    school: string;
    year: string;
    desc?: string;
    major: boolean;
}

const Formations = () => {
    const [formations, setFormations] = React.useState<Formation[]>([]);

    useEffect(() => {
        getFormations()
            .then((data) => {
                console.log("Données récupérées :", data);
                setFormations(data);
            })
            .catch((error) => {
                console.error("Erreur de récupération des projets:", error);
            });
    }, []);

    return (
        <div className="h-full flex gap-10">
            <div className="ml-6 border-[0.95px] border-light-3 dark:border-dark-3"></div>
            <div className="flex flex-col gap-8 pt-8">
                {formations && formations.map((formation, index) => (
                    <div className="relative mt-4 gap-2 flex flex-col" key={index}>
                        <div
                            className="after:content-[''] after:absolute after:top-[18px] after:-left-[43.5px] after:h-[6px] after:w-[6px] after:bg-light-4 dark:after:bg-dark-3 after:rounded-[50%] dark:after:[box-shadow:0_0_0_4px_#373737] after:[box-shadow:0_0_0_4px_#dee2e6]"></div>
                        <h3 className="text-lg font-bold text-light-5 dark:text-white">{formation.title} | <span className=" text-light-4 dark:text-lightgrey">{formation.school}</span></h3>
                        <span className="text-md font-medium text-light-4">{formation.year}</span>
                        <span className="text-light-3 dark:text-white font-light text-md flex flex-col gap-2">
                            {formation.major ? (
                                <p className='flex items-center gap-2 text-yellow-500'>
                                    <Trophy height={20} width={20} />
                                    <span className="font-bold">Major de promotion</span>
                                </p>
                            ) : null}
                            {formation.desc && (
                                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(formation.desc, { async: false })) }} />
                            )}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Formations;