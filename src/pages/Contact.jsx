import Footer from "../components/Footer"
import Header from "../components/Header"
import React, { useState } from 'react';
import '../style/Contact.css'

const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Formulario enviado:', formData);
      // Se usa para reiniciar el formulario 
      setFormData({ name: '', email: '', message: '' });
    };
  return (
   <section>
    <Header />
    <div>
    <h1>Bioenvase-contact</h1> 
    </div>
    <div className="contact-form">
      <h2>Contáctanos</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Tu nombre"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Correo Electrónico</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Tu correo electrónico"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Mensaje</label>
        <textarea
          id="message"
          name="message"
          placeholder="Escribe tu mensaje aquí..."
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Enviar Mensaje</button>
      </form>
    </div>
    <Footer />
   </section>
  )
}

export default Contact