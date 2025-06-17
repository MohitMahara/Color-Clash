import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    round : {
     type : Number,
      required : true,
    },

    totalStake: {
      type: Number,
      required: true,
    },

    winningColor: {
      type: String,
    },

    totalBets : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "bets",
        },
    ]

  },{ timestamps: true });


  export default mongoose.model("games", gameSchema);