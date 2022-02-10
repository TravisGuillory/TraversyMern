const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

// Get goals 
// @route GET /api/goals
//@access Private
const getGoals = asyncHandler(async (req, res) =>{
    const goals = await Goal.find();
    res.status(200).json(goals);
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
        const goal = await Goal.create({
            text: req.body.text
        });
        res.status(200).json(goal);
   }
   
});

// PUT goal
// @route PUT /api/goal/id
// @access Private
const updateGoal = asyncHandler(async (req, res) =>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error("Goal not found");
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, 
        {
            new: true,
        });
    res.status(200).json(updatedGoal);
});

// DELETE Goal
// @rout DELETE /api/goal/id
// @access Private
const deleteGoal  = asyncHandler(async(req, res) =>{
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error("Goal not found");
    }    
    /* const deletedGoal = await Goal.findByIdAndDelete(req.params.id); */
    await goal.remove();
    res.status(200).json({message: `Deleted goal ${req.params.id}`});
});



module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal,
};