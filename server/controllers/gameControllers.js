import userModel from "../models/userModel.js";
import betModel from "../models/betModel.js";
import gameModel from "../models/gameModel.js";
import mongoose from "mongoose";

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
    user.totalBalance = Number((user.totalBalance - selectedAmount).toFixed(2));
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
            const allBets = await betModel.find({round : round}).populate("userId");

            // Update user balance and bet status 
            const userMap = new Map();

            for(const bet of allBets){
                const user = bet.userId;

                if(bet.color === winningColor){
                    bet.isWinner = true;
                    const payout = bet.stake * 2;
                    const userId = user._id.toString();

                    if(userMap.has(userId)){
                        const existing = userMap.get(userId);
                        existing.balance = Number((existing.balance + payout).toFixed(2));
                    }else{
                      userMap.set(userId, {
                          doc: user,
                          balance: Number((user.totalBalance + payout).toFixed(2)),
                       });
                    }
                }else{
                    bet.isWinner = false;
                }
               
                bet.save();
            }

            for (const { doc, balance } of userMap.values()) {
                doc.totalBalance = balance;
                await doc.save();
            }

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



export const getHistoryController = async (req, res, next) => {
    try {
        const gameHistory = await gameModel.find().populate("totalBets");

        if (!gameHistory || gameHistory.length === 0) {
            return res.status(404).send({
                success: false,
                msg: "No game history found",
            });
        }

        return res.status(200).send({
            success: true,
            msg: "Game history fetched successfully",
            gameHistory,
        });

    } catch (error) {
        next(error);
    }
}



export const getUserHistoryController = async (req, res, next) => {
    try {
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).send({
                success: false,
                msg: "User ID is required",
            });
        }

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).send({
              success: false,
              msg: "Invalid User ID",
            })   
        }    

        const user = await userModel.findById(userId).populate("gamePlayed");

        if (!user) {
            return res.status(404).send({
                success: false,
                msg: "User not found",
            });
        }

        return res.status(200).send({
            success: true,
            msg: "User history fetched successfully",
            myHistory: user.gamePlayed,
            balance : user.totalBalance,
        });

    } catch (error) {
        next(error);
    }
}

export const getRegisteredUsers = async(req, res, next) =>{
  try {
    const {round} = req.params;

    const bets = await gameModel.findOne({round : round}).populate("totalBets");

    if(!bets){
        res.status(400).send({
            success : false,
            msg : "No game found for this round"
        })
    }

    res.status(200).send({
        success : true,
        msg : "Total bets",
        bets,
    })
     
  } catch (error) {
    next(error);
  }
}