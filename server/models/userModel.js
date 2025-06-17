import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type : String,
      required : true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required : true,
    },

    totalBalance : {
        type : Number,
    },

    gamePlayed : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "games",
        },
    ]

  },{ timestamps: true });


  export default mongoose.model("users", userSchema);