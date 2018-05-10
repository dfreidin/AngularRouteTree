const express = require("express");
const app = express();
app.use(express.static(__dirname + "/angularRoutes/dist/angularRoutes"));
app.get("*", function(req, res) {
    res.sendFile(__dirname + "/angularRoutes/dist/angularRoutes/index.html");
});
app.listen(8000);