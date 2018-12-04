const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3000;
const app = express();

// setup middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
require("./app/routing/htmlRoutes")(app);

// setup listener
app.listen(PORT, function () {
    console.log(`Server listening on: http://localhost:` + PORT);
});