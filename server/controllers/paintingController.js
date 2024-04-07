const router = require("express").Router();

const paintingManager = require("../managers/paintingManager");
const parser = require('../utils/parser')

router.get("/", async (req, res) => {
  console.log(`TEST`)
  try {
    const records = await paintingManager.getAll();
    res.json(records);
  } catch (error) {
    res.json(parser.parseError(error))
  }
});




router.get("/:paintingsId", async (req, res) => {

    try {
      const record = await paintingManager.getOne(req.params.paintingsId);
      res.json(record);
    } catch (error) {
      return res.json(parser.parseError(error));
    }
});



router.post("/", async (req, res) => {


  const {paintingName, year, imageUrl, description, genre} = req.body;
  const existingRecord = await paintingManager.getExisting(paintingName)


  try {

    if(!paintingName || !year || !imageUrl || !description || !genre){
      throw new Error (`All fields are requiered!`)
    }

    // if(existingRecord){
    //   throw new Error (`This painting name already exist in our catalog!`)
    // }

  //  https://drive.google.com/file/d/1vceRCY6SsbSGAcF_euIjeL4bb73itgxB/view?usp=sharing
  //  https://drive.google.com/thumbnail?id=1xFCdzfUJ4ASxPLuka2_ardatW4JKfdmb&sz=w1000


const splittedURL = imageUrl.split("/")
console.log(splittedURL)

const realUrl = `https://drive.google.com/thumbnail?id=${splittedURL[5]}&sz=w1000`


    const painting = await paintingManager.create({paintingName, year, imageUrl: realUrl, description, genre});

    res.json({ _id: painting._id });
  } catch (error) {
    return res.json(parser.parseError(error))
  }
});


router.put("/:paintingsId", async (req, res) => {
  //to DO validations for empty fields
  //const {........} = req.body
  let isOwner = true;
  let currentRecord = await paintingManager.getOne(req.params.paintingsId);
  const {paintingName, year, imageUrl, description, genre} = req.body;


  try {

    if(!paintingName || !year || !imageUrl || !description || !genre){
        throw new Error (`All fields are requiered!`)
      }

    const updatredPainting =  await paintingManager.update(req.params.paintingsId, {paintingName, year, imageUrl, description, genre});
    res.json(updatredPainting);
    } catch (error) {
      console.log(error)
      return res.json(parser.parseError(error))
    }
});

router.delete("/:paintingsId", async (req, res) => {

  let currentPainting = await paintingManager.getOne(req.params.paintingsId);

    try {
      await paintingManager.delete(req.params.paintingsId);
      res.json({ ok: true });
    } catch (error) {
          return res.json(parser.parseError(error))
    }
});

module.exports = router;
