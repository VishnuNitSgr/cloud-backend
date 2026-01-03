import mongoose from 'mongoose'
const fileSchema=new mongoose.Schema({

url: String,
  public_id: String,
  format: String,
  size: Number,
}, { timestamps: true });
export default mongoose.model('File',fileSchema);