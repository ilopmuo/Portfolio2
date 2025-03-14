import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

const About = () => {
    const { language } = useLanguage();

    const content = {
        es: {
            title: "Sobre Mí",
            role: "Ingeniero en sistemas & Salesforce Developer",
            description: "Soy un ingeniero en sistemas de 25 años apasionado por la tecnología y la innovación. Con formación universitaria y un enfoque en el desarrollo de soluciones tecnológicas efectivas.",
            education: "Graduado Universitario",
            developer: "Desarrollador Full Stack",
            salesforce: "Salesforce Developer",
            altImage: "Foto de Ignacio López Muñoyerro"
        },
        en: {
            title: "About Me",
            role: "Systems Engineer & Salesforce Developer",
            description: "I'm a 25-year-old systems engineer passionate about technology and innovation. With a university degree and a focus on developing effective technological solutions.",
            education: "College Graduate",
            developer: "Full Stack Developer",
            salesforce: "Salesforce Developer",
            altImage: "Photo of Ignacio López Muñoyerro"
        }
    };

    const currentContent = content[language];

    return (
        <section id="sobre-mi" className="about">
            <div className="about-content">
                <h2>{currentContent.title}</h2>
                <div className="about-grid">
                    <div className="about-image">
                        <img 
                            src="/yo.PNG" 
                            alt={currentContent.altImage} 
                            className="profile-image" 
                            loading="lazy"
                        />
                    </div>
                    <div className="about-text">
                        <h3>{currentContent.role}</h3>
                        <p>{currentContent.description}</p>
                        <div className="about-details">
                            <div className="detail-item">
                                <i className="fas fa-graduation-cap"></i>
                                <span>{currentContent.education}</span>
                            </div>
                            <div className="detail-item">
                                <i className="fas fa-code"></i>
                                <span>{currentContent.developer}</span>
                            </div>
                            <div className="detail-item">
                                <i className="fas fa-cloud"></i>
                                <span>{currentContent.salesforce}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 