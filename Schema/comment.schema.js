import { Schema, model } from "mongoose";
const commentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  comment: [
    {
      type: String,
      required: true,
    },
  ],
  updatedAt: {
    type: Date,
    default: Date.now(),
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
export const commentModel = model("comments", commentSchema);
