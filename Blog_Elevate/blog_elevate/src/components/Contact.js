import React from 'react';
import Navbar from './navbar';
import Footer from './footer';

const Contact = () => {
  return (
    <div>
      <Navbar />

      <main>
        <h1>Contact</h1>
        <p>N'hésitez pas à nous contacter pour toute question, suggestion ou demande de collaboration.</p>
        <form>
          <div>
            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" />
          </div>
          <div>
            <label htmlFor="email">Email :</label>
            <input type="email" id="email" />
          </div>
          <div>
            <label htmlFor="message">Message :</label>
            <textarea id="message" rows="5"></textarea>
          </div>
          <button type="submit">Envoyer</button>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;