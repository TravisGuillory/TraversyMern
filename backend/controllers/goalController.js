const asyncHandler = require("express-async-handler");

// Get goals 
// @route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) =>{
    res.status(200).json({message: "Get goals"});
});

// Set goal 
// @route POST /api/goals
//@access Private
const setGoal = asyncHandler(async (req, res) =>{
   if (!req.body.text) {
       res.status(400)
       throw new Error("Please submit a text field");
   }
   else {
        res.status(200).json({message: "Set goal"});
   }
   
});

// PUT goal
// @route PUT /api/goal/id
// @access Private
const updateGoal = asyncHandler(async (req, res) =>{
    res.status(200).json({message: `Update goal ${req.params.id}`});
});

// DELETE Goal
// @rout DELETE /api/goal/id
// @access Private
const deleteGoal  = asynHandler(async(req, res) =>{
    res.status(200).json({message: `Delete goal ${req.params.id}`});
});



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
};