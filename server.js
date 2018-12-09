const express = require("express");
const PORT = process.env.PORT || 3000;
const path = require("path");
const app = express();
let friendsObj = require("./app/data/friends");
// require("./app/routing/apiRoutes")(app);

// setup middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// HTML routes
app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, `app/public/home.html`));
});

// API Routes
app.get("/api/friends", function (req, res) {
    return res.json(friendsObj)
});

app.post("/api/friends", function (req, res) {
    // push new friend to friends object
    let newFriend = req.body;
    console.log(newFriend.scores);
    newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
    console.log("New Friend info:")
    console.log(newFriend);
    friendsObj.push(newFriend)
    res.json(newFriend);

    // start compatibility logic
    // find new friend's score
    
})

// setup listener
app.listen(PORT, function () {
    console.log(`Server listening on: http://localhost:` + PORT);
});