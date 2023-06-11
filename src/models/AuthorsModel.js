import mongoose from "mongoose";

const authorSchema = mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  nationality: { type: String }
});

const AuthorsModel = mongoose.model("authors", authorSchema);

export default AuthorsModel;
