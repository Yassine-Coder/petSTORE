import mongoose from "mongoose";
const PetSchema = new mongoose.Schema({
  petname: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  image: {
    type: [String],
  },
  
});

export default mongoose.model("Pet", PetSchema)