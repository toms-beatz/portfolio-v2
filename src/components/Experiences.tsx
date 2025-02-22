import React from 'react';
import { useEffect } from 'react';
import { getExperiences } from '@/app/api/resume/getExperiences';
import DOMPurify from 'dompurify';
import { marked } from 'marked';

interface Experiences {
    title: string;
    company: string;
    year: string;
    desc?: string;
}

const Experiences = () => {
    const [experiences, setExperiences] = React.useState<Experiences[]>([]);

    useEffect(() => {
        getExperiences()
            .then((data) => {
                console.log("Données récupérées :", data);
                setExperiences(data);
            })
            .catch((error) => {
                console.error("Erreur de récupération des projets:", error);
            });
    }, []);

    return (
        <div className="h-full flex gap-10">
            <div className="ml-6 border-[0.95px] border-light-3 dark:border-dark-3"></div>
            <div className="flex flex-col gap-8 pt-8">
                {experiences && experiences.map((experiences, index) => (
                    <div className="relative mt-4 gap-2 flex flex-col" key={index}>
                        <div
                            className="after:content-[''] after:absolute after:top-[18px] after:-left-[43.5px] after:h-[6px] after:w-[6px] after:bg-light-4 dark:after:bg-dark-3 after:rounded-[50%] dark:after:[box-shadow:0_0_0_4px_#373737] after:[box-shadow:0_0_0_4px_#dee2e6]"></div>
                        <h3 className="text-lg font-bold text-light-5 dark:text-white">{experiences.title} | <span className=" text-light-4 dark:text-lightgrey">{experiences.company}</span></h3>
                        <span className="text-md font-medium text-light-4">{experiences.year}</span>
                        <span className="text-light-3 dark:text-white font-light text-md flex flex-col gap-2">
                            
                            {experiences.desc && (
                                <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(marked(experiences.desc, { async: false })) }} />
                            )}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Experiences;