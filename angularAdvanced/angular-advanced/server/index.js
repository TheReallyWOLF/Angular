const app = require('./app');
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server has been started in port: ${port}`));


// node index.js
// 2.8