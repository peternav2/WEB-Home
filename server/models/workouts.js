const data = require('../data/workouts.json');


function getWorkouts() {
    return data;
}

function getWorkout(id) {
    return data.workouts.find(w => w.id === id);
}

module.exports = {
    getWorkouts,
    getWorkout
};