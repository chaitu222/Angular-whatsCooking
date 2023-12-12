import mongoose from "mongoose";
 
const FeedbackSchema = new mongoose.Schema({
    email:{type: String, required:true},
    rating: { type: Number, required: true },
    comments: { type: String, required: true },
  });
 
  export default mongoose.model("Feedback",FeedbackSchema)