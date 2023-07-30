import { app } from "./app";

require('dotenv').config();

const host_port = process.env.HOST_PORT || 3100;

var fs = require('fs');
var http = require('http');


var httpServer = http.createServer(app);

httpServer.listen(host_port);

console.log(`"server start on port ${host_port}"`);