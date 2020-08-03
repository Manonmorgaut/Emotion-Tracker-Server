const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const emotionEntrySchema = new Schema({
  emotion: {
    name: {
      type: String,
      enum: ["Happy", "Angry", "Sad", "Fearful", "Disgusted", "Surprised"],
    },

    intensity: {
      type: Number,
      minimum: 0,
      maximum: 5,
    },

    emotionTrigger: String,
  },
}, 
{
  timestamps: {
    createdAt: "created_at",
  },
});



const EmotionEntryModel = mongoose.model("EmotionEntry", emotionEntrySchema);

module.exports = EmotionEntryModel;
