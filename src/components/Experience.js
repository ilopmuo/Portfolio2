import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Experience.css';

const Experience = () => {
    const { language } = useLanguage();

    const content = {
        es: {
            title: "Experiencia Laboral",
            current: "Actual",
            location: "Madrid, España",
            experiences: [
                {
                    title: "Salesforce Developer",
                    company: "SEIDOR NTS",
                    period: "2024 - Actual",
                    location: "Madrid, España",
                    description: "Desarrollo de soluciones personalizadas en Salesforce",
                    achievements: [
                        "Implementación de componentes Lightning Web Components",
                        "Desarrollo de integraciones con sistemas externos",
                        "Optimización de procesos de negocio",
                        "Mantenimiento y mejora de aplicaciones existentes"
                    ],
                    technologies: ["Apex", "Lightning Web Components", "SOQL", "JavaScript", "HTML5", "CSS3"]
                },
                
            ]
        },
        en: {
            title: "Work Experience",
            current: "Present",
            location: "Madrid, Spain",
            experiences: [
                {
                    title: "Salesforce Developer",
                    company: "SEIDOR NTS",
                    period: "2023 - Present",
                    location: "Madrid, Spain",
                    description: "Development of custom Salesforce solutions",
                    achievements: [
                        "Implementation of Lightning Web Components",
                        "Development of integrations with external systems",
                        "Business process optimization",
                        "Maintenance and improvement of existing applications"
                    ],
                    technologies: ["Apex", "Lightning Web Components", "SOQL", "JavaScript", "HTML5", "CSS3"]
                },
                
            ]
        }
    };

    const currentContent = content[language];

    return (
        <section className="experience" id="experiencia">
            <div className="experience-container">
                <h2 className="section-title">{currentContent.title}</h2>
                <div className="experience-timeline">
                    {currentContent.experiences.map((exp, index) => (
                        <div key={index} className="experience-card">
                            <div className="experience-header">
                                <div className="experience-title">
                                    <h3>{exp.title}</h3>
                                    <p className="company">{exp.company}</p>
                                </div>
                                <div className="experience-meta">
                                    <p>
                                        <i className="fas fa-calendar-alt"></i>
                                        {exp.period}
                                    </p>
                                    <p>
                                        <i className="fas fa-map-marker-alt"></i>
                                        {exp.location}
                                    </p>
                                </div>
                            </div>
                            <p className="description">{exp.description}</p>
                            <ul className="achievements">
                                {exp.achievements.map((achievement, i) => (
                                    <li key={i}>
                                        <i className="fas fa-check"></i>
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                            <div className="technologies">
                                {exp.technologies.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience; 