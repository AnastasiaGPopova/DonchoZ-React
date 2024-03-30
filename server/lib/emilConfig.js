// emailService.js

const nodemailer = require('nodemailer');

// Load environment variables from .env file
require('dotenv').config();

// Function to send an email
async function sendEmail(to, subject, text) {
    try {
        // Create a transporter with Gmail SMTP settings
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_EMAIL, // Use environment variable
                pass: process.env.GMAIL_PASSWORD // Use environment variable
            }
        });

        // Create email options
        const mailOptions = {
            from: process.env.GMAIL_EMAIL, // Use environment variable
            to: 'zahari.donchev@gmail.com',
            subject: subject,
            text: `This message was sent from ${to} \n   ${text}`
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: 'Failed to send email' };
    }
}

module.exports = { sendEmail };
