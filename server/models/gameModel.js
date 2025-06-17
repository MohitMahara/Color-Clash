import mongoose from "mongoose";

const gameSchema = new mongoose.Schema(
  {
    round : {
      Number,
      required,
    },

    totalStake: {
      type: Number,
      required: true,
    },

    winningColor: {
      type: String,
      required: true,
    },

    totalBets : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "bets",
        },
    ]

  },{ timestamps: true });


  export default mongoose.model("games", gameSchema);