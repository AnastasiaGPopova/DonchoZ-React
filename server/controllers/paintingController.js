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

    if(existingRecord){
      throw new Error (`This painting name already exist in our catalog!`)
    }


    const painting = await paintingManager.create({paintingName, year, imageUrl, description, genre});

    res.json({ _id: painting._id });
  } catch (error) {
    return res.json(parser.parseError(error))
  }
});


router.put("/:recordId", async (req, res) => {
  //to DO validations for empty fields
  //const {........} = req.body
  let isOwner = true;
  let currentRecord = await paintingManager.getOne(req.params.recordId);
  const {recordName, artist, year, imageUrl, description, genre, rpm, likes, wishingList, likedBy} = req.body;
  console.log(likes)
  console.log(wishingList)

  try {

    if(!recordName || !artist || !year || !imageUrl || !description || !genre || !rpm){
        throw new Error (`All fields are requiered!`)
      }

    const updatredRecord =  await paintingManager.update(req.params.recordId, {recordName, artist, year, imageUrl, description, genre, rpm, likes, wishingList, likedBy});
    res.json(updatredRecord);
    } catch (error) {
      console.log(error)
      return res.json(parser.parseError(error))
    }
});

router.delete("/:recordId", async (req, res) => {

  let isOwner = true;
  let currentRecord = await paintingManager.getOne(req.params.recordId);
  if(currentRecord._ownerId !== req.user._id){
    isOwner = false
  }
    try {
      // if(!isOwner){
      //   throw new Error(`You are not authotized!`)
      // }
      await paintingManager.delete(req.params.recordId);
      res.json({ ok: true });
    } catch (error) {
          return res.json(parser.parseError(error))
    }
});

module.exports = router;
