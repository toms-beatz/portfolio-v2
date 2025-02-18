import React from 'react'
import SkillCard from "@/components/SkillCard"
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(fas)

const SoftSkills = () => {
    return (
        <div className="flex flex-col gap-4 my-12">
            <h2 className="text-2xl font-bold text-light-3 dark:text-white">Soft Skills</h2>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-y-8 gap-x-6">
                <SkillCard icon={'brain'} title="Vivacité d'esprit" />
                <SkillCard icon={'people-group'} title="Travail d'équipe" />
                <SkillCard icon={'face-smile-beam'} title="Ouverture d’esprit" />
                <SkillCard icon={'wrench'} title="Résolution de problèmes" />
                <SkillCard icon={'puzzle-piece'} title="Adaptation" />
                <SkillCard icon={'circle-question'} title="Curiosité" />
            </div>
        </div>
    )
}

export default SoftSkills