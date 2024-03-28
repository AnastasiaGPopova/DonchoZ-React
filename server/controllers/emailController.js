
const router = require("express").Router();
const {sendEmail} = require("../lib/emilConfig")

router.post("/", async (req, res) => {
    const { to, subject, text } = req.body;

    try {

        const email = await sendEmail(to, subject, text)

    } catch (error) {
        console.error('Error sending email:', error);
        return { success: false, error: 'Failed to send email' };
    }

})
   
module.exports = router