import styles from "./ContactsPage.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope  } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as data from '../../api/data';

function ContactsPage() {
        const [formData, setFormData] = useState({
            subject: '',
            to: '',
            text: ''
        });
    
        const handleChange = (e) => {
            const { name, value } = e.target;
            
            setFormData({
                ...formData,
                [name]: value
            });
        };
    
        const handleSubmit = async (e) => {
            e.preventDefault();
                const response = await data.sendEmail(formData);
                // Reset form data on successful submission

                await new Promise(resolve => setTimeout(resolve, 1000));

                if(!response.errors){
                    console.log(`yeeeyey`)
                    setFormData({
                        subject: '',
                        to: '',
                        text: ''
                    });
                }
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
                    <label htmlFor="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="to">Your Email:</label>
                    <input type="email" id="to" name="to" value={formData.to} onChange={handleChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="text">Message:</label>
                    <textarea id="text" name="text" value={formData.text} onChange={handleChange} rows="5" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>



    </main>
  );
}

export default ContactsPage;
