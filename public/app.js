const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    return res.render('index');
});
app.listen(port, '103.207.37.120');