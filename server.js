var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/swag-shop');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({exteded: false}));

app.listen(3000, function() {
    console.log("Swag Shop API running on port 3000...");
});