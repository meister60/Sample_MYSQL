const express = require('express')
const app = express()
const PORT = process.env.PORT || 3003; /*Set PORT to 3000 || .env */
const maria = require('mysql');
//const maria = require('mariadb');
const connection = maria.createConnection({
    host: 'maria.lwnet.local',
    user: 'react',
    password: 'Lankwerk1+',
    database: 'react_test'

});

connection.connect(function(err) {
    (err)? console.log(err): console.log(connection);
});

require("./routes/html-routes")(app);


//app.get('/', function (req, res) {
//  res.send('hello world')
// })

/* Start the Server*/
app.listen(PORT, () => {
    console.log("App running on port ${PORT} ");


});

//app.listen(3000)
