export const startGameController = (req, res, next) => {
   try {

    const {selectedColor, selectedAmount, round, uid } = req.body;

    if (!selectedColor || !selectedAmount || !round || !uid) {
      return res.status(400).send({
        success: false,
        msg: "All fields are required",
      });
    }

   } catch (error) {
      next(error);
   }
}