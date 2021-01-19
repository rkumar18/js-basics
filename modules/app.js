var http = require('http');
var {fun} = require("./module1");
var {fun2} = require("./module2");

fun(); 
fun2();
http.createServer().listen(3000)


