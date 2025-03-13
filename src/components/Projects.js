import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

const Projects = () => {
    const { language } = useLanguage();

    const content = {
        es: {
            title: "Mis Proyectos",
            comingSoon: "Próximamente...",
            description: "Actualmente estoy trabajando en varios proyectos interesantes. ¡Vuelve pronto para ver las novedades!"
        },
        en: {
            title: "My Projects",
            comingSoon: "Coming Soon...",
            description: "I'm currently working on several interesting projects. Check back soon to see what's new!"
        }
    };

    const currentContent = content[language];

    return (
        <section className="projects" id="proyectos">
            <h2 className="section-title">{currentContent.title}</h2>
            <div className="projects-coming-soon">
                <i className="fas fa-code"></i>
                <h3>{currentContent.comingSoon}</h3>
                <p>{currentContent.description}</p>
            </div>
        </section>
    );
};

export default Projects; 