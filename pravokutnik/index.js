
const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "a",
      message: "Unesi duljinu stranice a:"
    },
    {
      type: "input",
      name: "b",
      message: "Unesi duljinu stranice b:"
    }
  ])
  .then((answers) => {

    let a = parseFloat(answers.a);
    let b = parseFloat(answers.b);

    let povrsina = a * b;

    let tekst = `Pravokutnik
Stranica a: ${a}
Stranica b: ${b}
Površina: ${povrsina}
`;

    fs.writeFile("izracun.txt", tekst, (err) => {
      if (err) {
        console.log("Greška pri spremanju datoteke.");
      } else {
        console.log("Rezultat je spremljen u izracun.txt");
      }
    });

  });