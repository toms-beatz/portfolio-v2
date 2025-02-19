import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';


interface SkillCardProps {
    icon: IconProp | IconDefinition; 
    title: string;  
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title }) => {
    return (
        <div className="flex flex-row gap-6 xl:justifcenter items-center p-4 before:content-[''] before:absolute before:[border-radius:inherit] rounded-xl bg-light-1 dark:bg-dark-2 pr-auto">
            <FontAwesomeIcon icon={icon} className="text-light-4" size="2xl" />
            <div className="flex flex-col gap-2">
                <h3 className="text-light-4 font-semibold">{title}</h3>
            </div>
        </div>
    );
};

export default SkillCard;