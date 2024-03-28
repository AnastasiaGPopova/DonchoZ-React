import styles from "./ContactsPage.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as data from '../../api/data';

function ContactsPage() {
        const [formData, setFormData] = useState({
            name: '',
            email: '',
            message: ''
        });
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormData({
                ...formData,
                [name]: value
            });
        };
    
        const handleSubmit = (e) => {
            e.preventDefault();
            // Add your form submission logic here
            console.log(formData);
        };
  return (
    <main className={styles.contactsMainPage}>
      <div className={styles.info}>
        <a href="mailto:donchozahariev@abv.bg">
        <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
         donchozahariev@abv.bg
        </a>

        <a href="mailto:donchozahariev@abv.bg">
        <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
        https://www.facebook.com/profile.php?id=100085924557248
        </a>
      </div>

      <div className="container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Your Name:</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Your Email:</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="5" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>



    </main>
  );
}

export default ContactsPage;
