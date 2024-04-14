const task2Model = require('../models/task2.model')

async function create(taskData) {
    return task2Model.create(taskData);
}

module.exports = {
    create,
}
