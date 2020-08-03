const express = require("express");
const router = express.Router();
const EmotionEntryModel = require("./../models/EmotionEntry");

router.get("/", (req, res, next) => {
  EmotionEntryModel.find()
    .then((emotions) => {
      res.status(200).json(emotions);
      console.log("DB : Emotions ==> ", emotions);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  EmotionEntryModel.findById(req.params.id)
    .then((emotion) => {
      res.status(200).json(emotion);
      console.log("DB: Current emotion ==>", emotion);
    })
    .catch(next);
});

router.post("/", (req, res, next) => {
  var emotion = req.body  
  console.log(req.body);
  EmotionEntryModel.create({emotion})
    .then((newEmotion) => {
      console.log("DB: New emotion ==>", newEmotion);
      res.status(201).json(newEmotion);
    })
    .catch(next);
});

router.patch("/:id", (req, res, next) => {
  EmotionEntryModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((updatedEmotion) => {
      res.status(200).json(updatedEmotion);
      console.log("DB : UPDATED emotion ==> ", updatedEmotion);
    })
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
    EmotionEntryModel
      .findByIdAndRemove(req.params.id)
      .then((emotion) => {
        res.sendStatus(204);
      })
      .catch((err) => {
        res.sendStatus(500);
      });
  });

module.exports = router;
