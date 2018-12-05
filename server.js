const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// setup middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// setup listener
app.listen(PORT, function () {
    console.log(`Server listening on: http://localhost:` + PORT);
});