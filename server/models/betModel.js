import mongoose from "mongoose";

const betSchema = new mongoose.Schema(
  {
    round : {
      type : Number,
      required : true,
    },

    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true,
    },

    stake: {
      type: Number,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },

    isWinner : {
        type : Boolean,
        default : null
    }

  },{ timestamps: true });


  export default mongoose.model("bets", betSchema);