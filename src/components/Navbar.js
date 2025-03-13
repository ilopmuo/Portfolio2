import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { darkMode, toggleTheme } = useTheme();
    const { language, toggleLanguage } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const content = {
        es: {
            brand: "ILM",
            links: [
                { href: "#sobre-mi", text: "Sobre Mí" },
                { href: "#habilidades", text: "Habilidades" },
                { href: "#experiencia", text: "Experiencia" },
                { href: "#proyectos", text: "Proyectos" },
                { href: "#certificaciones", text: "Certificaciones" },
                { href: "#contacto", text: "Contacto" }
            ]
        },
        en: {
            brand: "My Portfolio",
            links: [
                { href: "#sobre-mi", text: "About Me" },
                { href: "#habilidades", text: "Skills" },
                { href: "#experiencia", text: "Experience" },
                { href: "#proyectos", text: "Projects" },
                { href: "#certificaciones", text: "Certifications" },
                { href: "#contacto", text: "Contact" }
            ]
        }
    };

    const currentContent = content[language];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <div className="navbar-brand">
                    <a href="#inicio">{currentContent.brand}</a>
                </div>
                <div className="navbar-menu">
                    {currentContent.links.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            className="navbar-item"
                        >
                            {link.text}
                        </a>
                    ))}
                    <button 
                        className="theme-toggle" 
                        onClick={toggleTheme}
                        aria-label="Cambiar tema"
                    >
                        <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>
                    <button 
                        className="language-toggle"
                        onClick={toggleLanguage}
                        aria-label="Toggle language"
                    >
                        {language === 'es' ? 'EN' : 'ES'}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 