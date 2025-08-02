require('dotenv').config()
const app = require('./src/app');
// const path = require('path')
// const express = require('express')


// // connect static files of frontend
// app.use(express.static(path.join(__dirname, './FrontEnd/dist')));

// app.get("*", function (req,res) {
//     res.sendFile(path.join(__dirname, "./FrontEnd/dist.index.html"));
// })

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})

// npx nodemon