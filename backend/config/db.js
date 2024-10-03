import mongoose from "mongoose";

export const connectDB = async ()=>{
  await mongoose.connect('mongodb+srv://ishanbathla28:fWIQCqPN1h6QM1E7@cluster0.valf0.mongodb.net/bitecart').then(()=>console.log("DB connected"))
}
