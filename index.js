const express = require('express');
const mongoose = require('mongoose');
const task1Router = require('./routers/task1.router');
const task2Router = require('./routers/task2.router');

const app = express();
const PORT = 3004;

mongoose
  .connect('mongodb://127.0.0.1:27017/mkr1BD')
  .then(() => console.log('Connected to DB'))
  .catch((err) => console.log(err));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toUTCString()}] ${req.method}: ${req.path}`);
  next();
});

app.use("/task1", task1Router);
app.use("/task2", task2Router);


//Сatching the 404 and forwarding to the Error handler
app.use((req, res, next) => {
  next(createError.NotFound());
});

// Error handler
app.use((err, req, res, next) => {
  const erorrStatus = err.status || 500;
  console.error(`------!!!!!!!! [${new Date().toUTCString()}] ${req.method}: ${req.path}. Error(${erorrStatus}): ${err.message} !!!!!!!!-------`, );
  res.status(erorrStatus).send({
      status: erorrStatus,
      error: err
  });
});

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});