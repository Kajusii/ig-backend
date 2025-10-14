import { Schema, model } from "mongoose";
const postSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "users",
  },
  caption: {
    type: String,
    required: true,
  },
  like: [
    {
      type: Schema.Types.ObjectId,
      required: false,
    },
  ],
  images: [
    {
      type: String,
      required: false,
    },
  ],
  comment: [
    {
      type: Schema.Types.ObjectId,
      required: false,
      ref: "comments",
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
export const postModel = model("posts", postSchema);
