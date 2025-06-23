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
                    title: "Salesforce API Updater",
                    description: "Aplicación de escritorio para actualizar masivamente las versiones de API de clases Apex, triggers y componentes LWC en proyectos de Salesforce. Interfaz intuitiva con preview de cambios y deploy integrado.",
                    technologies: ["JavaScript", "Electron", "Node.js", "Salesforce CLI"],
                    github: "https://github.com/ilopmuo/salesforce-api-updater",
                    image: "/api-updater-icon.svg",
                    download: null,
                    downloadText: null
                },
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
                    title: "Salesforce API Updater",
                    description: "Desktop application for massively updating API versions of Apex classes, triggers and LWC components in Salesforce projects. Intuitive interface with change preview and integrated deploy.",
                    technologies: ["JavaScript", "Electron", "Node.js", "Salesforce CLI"],
                    github: "https://github.com/ilopmuo/salesforce-api-updater",
                    image: "/api-updater-icon.svg",
                    download: null,
                    downloadText: null
                },
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
                            <div className="project-header">
                                <div className="project-title-section">
                                    <h3 className="project-title">{project.title}</h3>
                                    <div className="project-meta">
                                        <span>Proyecto personal</span>
                                    </div>
                                </div>
                                <div className="project-image-container">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="project-image"
                                        loading="lazy" 
                                    />
                                </div>
                            </div>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                                {project.technologies.map((tech, i) => (
                                    <span key={i} className="project-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link github">
                                    <i className="fab fa-github"></i> GitHub
                                </a>
                                {project.download && (
                                    <a href={project.download} className="project-link download" download>
                                        <i className="fas fa-download"></i> {project.downloadText}
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 