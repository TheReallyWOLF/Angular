const app = require('./app');
const port = process.env.PORT || 5000;

app.listen(5000, () => console.log(`server has been started on ${port}`))
