const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts();
    res.send({status: "OK", data: allWorkouts });
};

const getOneWorkout = (req, res) => {
    const workout = workoutService.getOneWorkout(req.params.workoutId);
    res.send(`Get workout ${req.params.workoutId}`);
}

const createNewWorkout = (req, res) => {
    const {body} = req;
    if(
        !body.name || 
        !body.mode || 
        !body.equipment || 
        !body.exersices || 
        !body.trainerTips
    ) {
        return;
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exersices: body.exersices,
        trainerTips: body.trainerTips
    };

    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({status: "OK", data: createdWorkout});
}

const updateOneWorkout = (req, res) => {
    const updatedWorkout = workoutService.updateOneWorkout(req.params.workoutId);
    res.send(`Update workout ${req.params.workoutId}`);
}

const deleteOneWorkout = (req, res) => {
    workoutService.deleteOneWorkout(req.params.workoutId);
    res.send(`Delete one workout ${req.params.workoutId}`);
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
};

