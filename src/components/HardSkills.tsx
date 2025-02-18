import React from 'react'
import SkillCard from "@/components/SkillCard"
import { faDatabase, faLanguage, fas } from '@fortawesome/free-solid-svg-icons'
import { fab, faElementor, faGitAlt, faJira, faNodeJs, faTrello, faWordpress } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLaravel, faReact, faDocker } from '@fortawesome/free-brands-svg-icons'
library.add(fas, fab)



const HardSkills = () => {
    return (
        <div className="flex flex-col gap-4 my-12">
            <h2 className="text-2xl font-bold text-light-3 dark:text-white">Hard Skills</h2>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-y-8 gap-x-6">
                <SkillCard icon={faReact} title="React" />
                <SkillCard icon={faLaravel} title="Laravel" />
                <SkillCard icon={faNodeJs} title="Node.js" />
                <SkillCard icon={faReact} title="React Native" />
                <SkillCard icon={faDocker} title="Docker" />
                <SkillCard icon={faDatabase} title="MariaDB, MySQL" />
                <SkillCard icon={faGitAlt} title="Git" />
                <SkillCard icon={faWordpress} title="Wordpress" />
                <SkillCard icon={faElementor} title="Elementor" />
                <SkillCard icon={faLanguage} title="Anglais (Niveau C1)" />
                <SkillCard icon={faTrello} title="Trello" />
                <SkillCard icon={faJira} title="Jira" />
            </div>
        </div>
    )
}

export default HardSkills