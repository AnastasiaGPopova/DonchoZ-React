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




router.get("/:recordId", async (req, res) => {

  if(req.params.recordId === "myRecords"){
    const records = await paintingManager.getAllRecordsByOwner(req.user._id)
    return res.json(records);
  } else if (req.params.recordId === "wishList") {
    const records = await paintingManager.getWishList(req.user._id)
    return res.json(records);
  } else {
    try {
      const record = await paintingManager.getOne(req.params.recordId).populate('_ownerId');
      res.json(record);
    } catch (error) {
      return res.json(parser.parseError(error));
    }

  }
});



router.post("/", async (req, res) => {

  // recordName: recordValues.recordName,
  // artist: recordValues.artist,
  // year: recordValues.year,
  // imageUrl: recordValues.imageUrl,
  // description: recordValues.description,
  // rpm: recordValues.rpm,
  // genre: realGenre,

  const {recordName, artist, year, imageUrl, description, genre, rpm} = req.body;
  const existingRecord = await paintingManager.getExisting(recordName)


  try {

    if(!recordName || !artist || !year || !imageUrl || !description || !genre || !rpm){
      throw new Error (`All fields are requiered!`)
    }

    if(existingRecord){
      throw new Error (`This record already exist in our catalog!`)
    }


    const record = await paintingManager.create({recordName, artist, year, imageUrl, description, genre, rpm, _ownerId: req.user._id});

    res.json({ _id: record._id });
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
