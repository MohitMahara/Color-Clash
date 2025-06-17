import userModel from "../models/userModel.js";
import betModel from "../models/betModel.js";
import gameModel from "../models/gameModel.js";

export const startGameController = async (req, res, next) => {
   try {

    const {selectedColor, selectedAmount, round, userId } = req.body;

    if (!selectedColor || !selectedAmount || !round || !userId) {
      return res.status(400).send({
        success: false,
        msg: "All fields are required",
      });
    }

    const user = await userModel.findById(userId);

    if(!user){
        return res.status(404).send({
            success: false,
            msg: "User not found",
        });
    }

    if (user.totalBalance < selectedAmount) {
      return res.status(400).send({
        success: false,
        msg: "Insufficient balance",
      });
    }

    const newBet = await new betModel({
      round,
      userId: user._id,
      stake: selectedAmount,
      color: selectedColor,
      isWinner: false, 
    }).save();


    const match = await gameModel.findOne({ round });

    if(match){
        match.totalBets.push(newBet._id);
        match.totalStake += selectedAmount;
        await match.save();
    }
    else{
        const newGame = new gameModel({
            round,
            totalStake : selectedAmount,
            totalBets: [newBet._id],
            winningColor: null,
        });

        await newGame.save();
    }


    user.gamePlayed.push(newBet._id);
    user.totalBalance -= selectedAmount;
    await user.save();

     return res.status(200).send({
      success: true,
      msg: "Bet placed successfully",   
      bet: newBet,   
  });           


   } catch (error) {
      next(error);
   }
}



export const getWinningColorController = async(req, res, next) => {
    try {
        const {round} = req.params;
    
        if(!round){
          return res.status(400).send({
                success: false,
                msg: "Round is required",
          });
        }
    
        const game = await gameModel.findOne({ round });

        if(!game){
            return res.status(404).send({
                success: false,
                msg: "Game not found for this round",
            });
        }

        let winningColor = game.winningColor;

        if(!winningColor){
            const colors = ["red", "blue", "green"];
            const randomIndex = Math.floor(Math.random() * colors.length);
            winningColor = colors[randomIndex];
            game.winningColor = winningColor;
            await game.save();
        }

        return res.status(200).send({
             success: true,
             msg: "Winning color determined",
             winningColor
        });
    
    } catch (error) {
         next(error);
    }
}