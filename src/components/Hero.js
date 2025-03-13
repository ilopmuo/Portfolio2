import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

const Hero = () => {
    const { language } = useLanguage();

    const content = {
        es: {
            greeting: "Hola, soy",
            name: "Ignacio López Muñoyerro",
            role: "Ingeniero en sistemas & Salesforce Developer",
            description: "Buscando soluciones innovadoras para problemas complejos",
            ctaContact: "Contáctame",
            ctaProjects: "Ver Proyectos",
            downloadCV: "Descargar Curriculum",
            altBadge: "Certificación Salesforce AI Associate"
        },
        en: {
            greeting: "Hi, I'm",
            name: "Ignacio López Muñoyerro",
            role: "Systems Engineer & Salesforce Developer",
            description: "Seeking innovative solutions to complex problems.",
            ctaContact: "Contact Me",
            ctaProjects: "View Projects",
            downloadCV: "Download Resume",
            altBadge: "Salesforce AI Associate Certification"
        }
    };

    const currentContent = content[language];

    return (
        <section className="hero" id="inicio">
            <div className="clouds">
                <div className="cloud cloud-1"></div>
                <div className="cloud cloud-2"></div>
                <div className="cloud cloud-3"></div>
            </div>
            <div className="floating-shapes">
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <div className="hero-content">
                <h1>{currentContent.greeting} <span className="highlight">{currentContent.name}</span></h1>
                <h2>{currentContent.role}</h2>
                <p>{currentContent.description}<span className="typing-cursor"></span></p>
                <div className="hero-buttons">
                    <a href="#contacto" className="cta-button primary">
                        {currentContent.ctaContact}
                        <i className="fas fa-paper-plane"></i>
                    </a>
                    <a href="#proyectos" className="cta-button secondary">
                        {currentContent.ctaProjects}
                        <i className="fas fa-arrow-right"></i>
                    </a>
                    <a 
                        href="/IGNACIO_LÓPEZ_MUÑOYERRO_CV(ESP).pdf" 
                        className="cta-button download"
                        download
                    >
                        {currentContent.downloadCV}
                        <i className="fas fa-download"></i>
                    </a>
                </div>
                <div className="hero-social">
                    <a href="https://www.linkedin.com/in/ignacio-lópez-muñoyerro-402ab5186/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
                <div className="hero-badge">
                    <img 
                        src="/2023-07_Badge_SF-Certified_AI-Associate_High-Res.webp" 
                        alt={currentContent.altBadge}
                        className="certification-badge"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero; 