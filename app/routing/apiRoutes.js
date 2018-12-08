let friendsObj = require("../data/friends.js");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friendsObj)
    });

    app.post("/api/friends", function (req, res) {
        let newFriend = req.body;
        // newFriend.routeName = newFriend.name.replace(/\s+/g, "").toLowerCase();
        console.log("New Friend info:")
        console.log(newFriend);
        return res.json(newFriend);
    })

};