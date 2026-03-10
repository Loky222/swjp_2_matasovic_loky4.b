const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// middleware
app.use(bodyParser.urlencoded({ extended: true }));

// public folder
app.use(express.static("public"));

// POST login
app.post("/login", (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    if (username === "admin" && password === "1234") {
        res.send("<h2>Uspješna prijava</h2>");
    } else {
        res.send("<h2>Pogrešno korisničko ime ili lozinka</h2>");
    }

});

app.listen(port, () => {
    console.log("Server radi na portu " + port);
});