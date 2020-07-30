const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  profileImg: {
    type: String,
    default:
      "https://vignette.wikia.nocookie.net/simpsons/images/1/14/Ralph_Wiggum.png/revision/latest/top-crop/width/360/height/360?cb=20100704163100",
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  psyContact: String,
  emotionsHistory: [
    {
      type: Schema.Types.ObjectId,
      ref: "EmotionEntry",
    },
  ],
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
