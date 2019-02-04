var express = require('express');

var app = express();
var home = require('./routes/home');
var customer = require('./routes/customer');

app.get('/', home.index);
app.get('/customer', customer.index);
app.get('/customer/create', customer.create);
app.listen(3000);