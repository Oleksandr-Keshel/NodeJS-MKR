const createError = require('http-errors');

async function task2InputDataValidation(req, res, next) {
    try {
        const { n } = req.body;

        if(n){
            if (typeof n !== 'number' || n <= 0) {
                throw createError.BadRequest("Number 'n' must be a positive number");
            }
        } else{
            throw createError.BadRequest("Number 'n' is required");
        }

        next();
    } catch(err) {
        next(err);
    }
};

module.exports = {
    task2InputDataValidation,
};