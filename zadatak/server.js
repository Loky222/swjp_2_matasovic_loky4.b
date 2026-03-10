const express = require("express");
const app = express();

const port = 3000;

// root
app.get("/", (req, res) => {
    res.send("<h1>Početna stranica</h1>");
});

// contact
app.get("/contact", (req, res) => {
    res.send("<h3>Kontakt stranica</h3>");
});

// about
app.get("/about", (req, res) => {
    res.send("<h3>O nama</h3>");
});

// info
app.get("/info", (req, res) => {
    res.send("<h3>Informacije</h3>");
});

app.listen(port, () => {
    console.log(`Server radi na portu ${port}`);
});