import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Skills.css';

const Skills = () => {
    const { language } = useLanguage();

    const content = {
        es: {
            title: "Mis Habilidades",
            categories: {
                web: {
                    title: "Desarrollo Web",
                    icon: "fas fa-code"
                },
                salesforce: {
                    title: "Salesforce",
                    icon: "fas fa-cloud"
                },
                tools: {
                    title: "Herramientas",
                    icon: "fas fa-tools"
                }
            }
        },
        en: {
            title: "My Skills",
            categories: {
                web: {
                    title: "Web Development",
                    icon: "fas fa-code"
                },
                salesforce: {
                    title: "Salesforce",
                    icon: "fas fa-cloud"
                },
                tools: {
                    title: "Tools",
                    icon: "fas fa-tools"
                }
            }
        }
    };

    const skillCategories = [
        {
            ...content[language].categories.web,
            skills: [
                { name: "HTML5", icon: "fab fa-html5" },
                { name: "CSS3", icon: "fab fa-css3-alt" },
                { name: "JavaScript", icon: "fab fa-js" },
                { name: "React", icon: "fab fa-react" },
                { name: "Node.js", icon: "fab fa-node-js" },
                { name: "Git", icon: "fab fa-git-alt" }
            ]
        },
        {
            ...content[language].categories.salesforce,
            skills: [
                { name: "Apex", icon: "fas fa-bolt" },
                { name: "Lightning Web Components", icon: "fas fa-bolt" },
                { name: "SOQL", icon: "fas fa-database" },
                { name: "Flow Builder", icon: "fas fa-project-diagram" },
                { name: "Process Builder", icon: "fas fa-cogs" },
                { name: "Salesforce Admin", icon: "fas fa-user-cog" }
            ]
        },
        {
            ...content[language].categories.tools,
            skills: [
                { name: "VS Code", icon: "fas fa-code" },
                { name: "GitHub", icon: "fab fa-github" },
                { name: "Postman", icon: "fas fa-paper-plane" },
                { name: "Jira", icon: "fab fa-jira" },
                { name: "Slack", icon: "fab fa-slack" },
                { name: "Terminal", icon: "fas fa-terminal" }
            ]
        }
    ];

    return (
        <section className="skills" id="habilidades">
            <div className="skills-container">
                <h2 className="section-title">{content[language].title}</h2>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skills-category">
                            <div className="category-header">
                                <i className={category.icon}></i>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <i className={skill.icon}></i>
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills; 