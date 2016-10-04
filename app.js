var http = require('http');
var reportMoney = require('./report');     //  Uses the modules formed in file report.js

http.createServer(function(req, res){
  res.writeHead(200);

  res.write(reportMoney.balance());       //  Calls the balance function exported from three.js
  res.write(reportMoney.randomMoney());   //  Calls the randomMoney function from three.js

  res.end();
}).listen(3000);                          //  Sets the server to port 3000
