const { v4: uuid } = require('uuid');
const Workout = require("../database/Workout");

const getAllWorkouts = () => {
    const allWorkouts = Workout.getAllWorkout();
    return allWorkouts;
}

const getOneWorkout = () => {
    
    return;
}

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", {timezone: "UTC"})
    }

    const createdWorkout = Workout.createNewWorkout(workoutToInsert);
    return createdWorkout;
}

const updateOneWorkout = () => {
    
    return;
}

const deleteOneWorkou = () => {
    
    return;
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkou 
}
