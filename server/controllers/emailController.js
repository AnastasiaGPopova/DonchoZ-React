
const router = require("express").Router();
const {sendEmail} = require("../lib/emilConfig")
const parser = require('../utils/parser')

router.post("/", async (req, res) => {
    const { to, subject, text } = req.body;

    try {

        const email = await sendEmail(to, subject, text)

    res.json(`Emil sent`);
    } catch (error) {
      return res.json(parser.parseError(error))
    }
})
   
module.exports = router