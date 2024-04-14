const task1Model = require('../models/task1.model')

async function create(taskData) {
    return task1Model.create(taskData);
}

module.exports = {
    create,
}
