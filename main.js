const express = require('express');
const bodyParser = require('body-parser');
const expensesRouter = require('./routes/expenses.js')

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`Got request ${req.method} ${req.path}`);

    next();
})

app.use('/', expensesRouter);

app.listen(3000, () => {
    console.log('App started!');
});
