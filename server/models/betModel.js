import mongoose from "mongoose";

const betSchema = new mongoose.Schema(
  {
    round : {
      Number,
      required,
    },

    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required
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
        type : Boolean
    }

  },{ timestamps: true });


  export default mongoose.model("bets", betSchema);