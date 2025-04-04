import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

const Projects = () => {
    const { language } = useLanguage();

    const content = {
        es: {
            title: "Mis Proyectos",
            projects: [
                {
                    title: "Generador de Permisos Excel",
                    description: "Una herramienta en Python que automatiza la generación de permisos en archivos Excel. Permite configurar permisos específicos para diferentes usuarios y hojas de cálculo, mejorando la eficiencia en la gestión de documentos.",
                    technologies: ["Python", "openpyxl", "Tkinter"],
                    github: "https://github.com/ilopmuo/excel-permissions-generator",
                    image: "/excel-permissions.svg",
                    download: "/permission_excel_gui.exe",
                    downloadText: "Descargar Programa"
                }
            ]
        },
        en: {
            title: "My Projects",
            projects: [
                {
                    title: "Excel Permissions Generator",
                    description: "A Python tool that automates the generation of permissions in Excel files. It allows configuring specific permissions for different users and spreadsheets, improving document management efficiency.",
                    technologies: ["Python", "openpyxl", "Tkinter"],
                    github: "https://github.com/ilopmuo/excel-permissions-generator",
                    image: "/excel-permissions.svg",
                    download: "/permission_excel_gui.exe",
                    downloadText: "Download Program"
                }
            ]
        }
    };

    const currentContent = content[language];

    return (
        <section className="projects" id="proyectos">
            <div className="projects-container">
                <h2 className="section-title">{currentContent.title}</h2>
                <div className="projects-grid">
                    {currentContent.projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} loading="lazy" />
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="project-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a 
                                        href={project.github} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="project-link github"
                                    >
                                        <i className="fab fa-github"></i> GitHub
                                    </a>
                                    <a 
                                        href={project.download} 
                                        download
                                        className="project-link download"
                                    >
                                        <i className="fas fa-download"></i> {project.downloadText}
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 