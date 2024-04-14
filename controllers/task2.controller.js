const task2Service = require('../services/task2.service');

async function createTask2(req, res, next) {
    try {
        const { n } = req.body;
        let product = 1;
        for (let i = 1; i <= n; i++) {
            product *= Math.pow(i, i-1);
        }
        
        const taskData = {
            n: n,
            product: product,
        }

        const task2 = await task2Service.create(taskData);

        res.status(200).json({
            status: 200,
            result: {product}
        });
    } catch (err) {
        next(createError.InternalServerError(err.message));
    }
};


module.exports = {
    createTask2,
}