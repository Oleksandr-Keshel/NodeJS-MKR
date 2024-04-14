const createError = require('http-errors');

async function task1InputDataValidation(req, res, next) {
    try {
        const { side, angleDeg } = req.body;

        if(side && angleDeg){
            if (typeof side !== 'number' || side <= 0) {
                throw createError.BadRequest("Side must be a positive number");
            }
    
            if (typeof side !== 'number' || angleDeg <= 0 || angleDeg >= 180) {
                throw createError.BadRequest("Angle in degrees should be between 0 and 180");
            }
        } else{
            throw createError.BadRequest("All data must be entered");
        }

        next();
    } catch(err) {
        next(err);
    }
};

module.exports = {
    task1InputDataValidation,
};