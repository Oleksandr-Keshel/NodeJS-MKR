const task1Service = require('../services/task1.service');

async function createTask1(req, res, next) {
    try {
        const { side, angleDeg } = req.body;
        const angleRad = angleDeg * (Math.PI / 180);
        const area = side * side * Math.sin(angleRad);

        const perimetr = 4 * side;
        
        const taskData = {
            side: side,
            angleDeg: angleDeg,
            area: area,
            perimetr: perimetr,
        }

        const task1 = await task1Service.create(taskData);

        res.status(200).json({
            status: 200,
            result: {area,perimetr}
        });
    } catch (err) {
        next(createError.InternalServerError(err.message));
    }
};


module.exports = {
    createTask1,
}