"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./config");
var createServer_1 = require("./createServer");
console.log('sup');
var server = createServer_1.createServer();
server.start({
    port: process.env.PORT,
    cors: {
        credentials: true,
        origin: process.env.UI_URL,
    },
}, function (deets) {
    console.log("Server is now running on port http://localhost:" + deets.port);
});
//# sourceMappingURL=index.js.map