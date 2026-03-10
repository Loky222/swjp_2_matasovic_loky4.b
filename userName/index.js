const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "ime",
      message: "Unesi ime:"
    },
    {
      type: "input",
      name: "prezime",
      message: "Unesi prezime:"
    }
  ])
  .then((answers) => {

    let ime = answers.ime.toLowerCase();
    let prezime = answers.prezime.toUpperCase();

    let username = ime + prezime;

    let tekst = `Ime: ${answers.ime}
Prezime: ${answers.prezime}
Username: ${username}
`;

    fs.writeFile("users.txt", tekst, (err) => {
      if (err) {
        console.log("Greška pri spremanju datoteke.");
      } else {
        console.log("Username je spremljen u users.txt");
      }
    });

  });