//Requiring module
const express = require('express');

//Creating express object
const app = express();

//Handling GET request object
app.get('/', (req, res) => {
    res.send('A simple Node App is ' + 'running on this server');
    res.end()
})


//Port Number Number
const PORT = process.env.PORT ||5000;


//Server setup
app.listen(PORT, console.log(
    `Server started on port ${PORT}`
))