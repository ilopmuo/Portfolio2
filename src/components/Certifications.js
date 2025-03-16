import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Certifications.css';

const Certifications = () => {
    const { language } = useLanguage();

    const content = {
        es: {
            title: "Certificaciones",
            viewDiploma: "Ver Diploma",
            certifications: [
                {
                    title: "Salesforce Certified AI Associate",
                    issuer: "Salesforce",
                    date: "Noviembre 2024",
                    icon: "fas fa-robot",
                    badge: "/2023-07_Badge_SF-Certified_AI-Associate_High-Res.webp",
                    diploma: "/AiAssociateDiplo.png",
                    credentialId: "AI Associate",
                    skills: [
                        "Einstein Prediction Builder",
                        "Einstein Discovery",
                        "Einstein Next Best Action",
                        "Einstein Bots",
                        "AI Cloud",
                        "Generative AI"
                    ]
                }
            ]
        },
        en: {
            title: "Certifications",
            viewDiploma: "View Diploma",
            certifications: [
                {
                    title: "Salesforce Certified AI Associate",
                    issuer: "Salesforce",
                    date: "November 2024",
                    icon: "fas fa-robot",
                    badge: "/2023-07_Badge_SF-Certified_AI-Associate_High-Res.webp",
                    diploma: "/AiAssociateDiplo.png",
                    credentialId: "AI Associate",
                    skills: [
                        "Einstein Prediction Builder",
                        "Einstein Discovery",
                        "Einstein Next Best Action",
                        "Einstein Bots",
                        "AI Cloud",
                        "Generative AI"
                    ]
                }
            ]
        }
    };

    const currentContent = content[language];

    return (
        <section className="certifications" id="certificaciones">
            <div className="certifications-container">
                <h2 className="section-title">{currentContent.title}</h2>
                <div className="certifications-grid">
                    {currentContent.certifications.map((cert, index) => (
                        <div key={index} className="certification-card">
                            <div className="certification-header">
                                <div className="certification-icon">
                                    <i className={cert.icon}></i>
                                </div>
                                <img 
                                    src={cert.badge} 
                                    alt={cert.title} 
                                    className="certification-badge"
                                    loading="lazy"
                                />
                            </div>
                            <div className="certification-content">
                                <h3>{cert.title}</h3>
                                <p>
                                    <i className="fas fa-building"></i> {cert.issuer}
                                </p>
                                <p>
                                    <i className="fas fa-calendar-alt"></i> {cert.date}
                                </p>
                                <div className="certification-skills">
                                    {cert.skills.map((skill, skillIndex) => (
                                        <span key={skillIndex} className="skill-tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <div className="certification-actions">
                                    <a href={cert.diploma} target="_blank" rel="noopener noreferrer" className="view-diploma-button">
                                        <i className="fas fa-award"></i> {currentContent.viewDiploma}
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

export default Certifications; 
