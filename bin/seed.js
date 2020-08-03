require("dotenv").config();
require("../config/dbConnection");
const mongoose = require("mongoose");

const UserModel = require("../models/User");
const EmotionEntryModel = require("../models/EmotionEntry");

async function seedIt() {
  try {
    mongoose.connection.dropDatabase();

    const emotion_entry = [
      {
        emotion: {
          name: "Happy",
          intensity: 5,
          emotionTrigger: "It's sunny outside!!",
        },
        //   created_at: 2020-07-28T13:10:09.184+00:00
      },
      {
        emotion: {
          name: "Sad",
          intensity: 5,
          emotionTrigger: "We had a fight with my bf :(",
        },
        //   created_at: 2020-07-28T13:10:09.184+00:00
      },
      {
        emotion: {
          name: "Fearful",
          intensity: 3,
          emotionTrigger: "I am struggling to find a job",
        },
        //   created_at: 2020-07-28T13:10:09.184+00:00
      },
    ];

    const emotionEntrySeed = await EmotionEntryModel.insertMany(emotion_entry);

    let emotionEntryId = [];

    emotionEntrySeed.forEach((emotion_entry) => {
      emotionEntryId.push(emotion_entry._id);
    });

    const user = {
      firstName: "Manon",
      lastName: "Morgaut",
      profileImg:
        "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/84839640_10218209655126260_4435908129581957120_n.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=4j68uxC4xj8AX9G7Qbk&_nc_oc=AQnnEaGWxuNDu8B03kQxQQ3X-ndQRwLTtvSeBzZlNt9Ct9KTmLPKNWJUOQiZHG9cxHM&_nc_ht=scontent-cdg2-1.xx&oh=0afcd71d48ea5d2535c80792dccdf7f0&oe=5F46A334",
      email: "manonmorgaut@gmail.com",
      password: "helloworld!",
      psyContact: "mapsy@gmail.com",
      emotionsHistory: emotionEntryId,
    };

    const userSeed = await UserModel.create(user);

    console.log("the seed was created", emotionEntrySeed, userSeed);
  } catch (err) {
    console.error(err);
  }
}

seedIt();
