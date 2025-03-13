import React, { useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/email';
import './Contact.css';

const Contact = () => {
    const { language } = useLanguage();
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const content = {
        es: {
            title: "Contacto",
            subtitle: "¿Tienes un proyecto en mente?",
            description: "Estoy disponible para trabajar en proyectos interesantes. Envíame un mensaje y hablemos.",
            name: "Nombre",
            email: "Correo electrónico",
            message: "Mensaje",
            send: "Enviar mensaje",
            sending: "Enviando...",
            success: "¡Mensaje enviado con éxito!",
            error: "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.",
            placeholders: {
                name: "Tu nombre",
                email: "tu@email.com",
                message: "Escribe tu mensaje aquí..."
            }
        },
        en: {
            title: "Contact",
            subtitle: "Have a project in mind?",
            description: "I'm available to work on interesting projects. Send me a message and let's talk.",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send message",
            sending: "Sending...",
            success: "Message sent successfully!",
            error: "There was an error sending your message. Please try again.",
            placeholders: {
                name: "Your name",
                email: "your@email.com",
                message: "Write your message here..."
            }
        }
    };

    const currentContent = content[language];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await emailjs.sendForm(
                emailConfig.serviceId,
                emailConfig.templateId,
                form.current,
                emailConfig.publicKey
            );
            
            setSubmitStatus('success');
            form.current.reset();
        } catch (error) {
            console.error('Error sending email:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="contact" id="contacto">
            <div className="contact-container">
                <h2 className="section-title">{currentContent.title}</h2>
                <h3 className="section-subtitle">{currentContent.subtitle}</h3>
                <p className="section-description">{currentContent.description}</p>
                
                <div className="contact-content">
                    <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">{currentContent.name}</label>
                            <input
                                type="text"
                                id="name"
                                name="user_name"
                                placeholder={currentContent.placeholders.name}
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">{currentContent.email}</label>
                            <input
                                type="email"
                                id="email"
                                name="user_email"
                                placeholder={currentContent.placeholders.email}
                                required
                                disabled={isSubmitting}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">{currentContent.message}</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder={currentContent.placeholders.message}
                                required
                                disabled={isSubmitting}
                            ></textarea>
                        </div>
                        {submitStatus && (
                            <div className={`submit-status ${submitStatus}`}>
                                {currentContent[submitStatus]}
                            </div>
                        )}
                        <button 
                            type="submit" 
                            className="submit-button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? currentContent.sending : currentContent.send}
                            <i className="fas fa-paper-plane"></i>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact; 