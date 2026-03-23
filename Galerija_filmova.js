const podaci = {
    filmovi: [],
    serije: [],
    dokumentarci: []
};

// generiramo 20 stavki za svaku kategoriju

        podaci.filmovi.push({
            ime: "Inception "  ,
            slika: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw%40%40._V1_FMjpg_UX1000_.jpg" ,
            uloge: "Leonardo DiCaprio, Joseph Gordon-Levitt",
            opis: "Lopov ulazi u snove ljudi kako bi ukrao ili ubacio ideje." 
        });

        podaci.filmovi.push({
            ime: "Titanic "  ,
            slika: "https://cdng.europosters.eu/pod_public/1300/266355.jpg" ,
            uloge: "Leonardo DiCaprio, Kate Winslet",
            opis: "Ljubavna priča na slavnom brodu koji tone." 
        });

         podaci.filmovi.push({
            ime: "Dark Knight "  ,
            slika: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw%40%40._V1_FMjpg_UX1000_.jpg" ,
            uloge: "Christian Bale, Heath Ledger",
            opis: "The Dark Knight je američki superherojski film iz 2008. godine u režiji Christophera Nolana, drugi dio njegove trilogije o Batmanu. Smatra se jednim od najutjecajnijih filmova 21. stoljeća, poznat po mračnoj atmosferi, moralnim dilemama i nezaboravnoj izvedbi Heatha Ledgera kao Jokera. " 
        });

         podaci.filmovi.push({
            ime: "Avengers: Endgame"  ,
            slika: "https://m.media-amazon.com/images/I/91EmWoPK3%2BL.jpg" ,
            uloge: "Robert Downey Jr., Chris Evans",
            opis: "Avengers: Endgame je američki superherojski film iz 2019. godine, koji su režirali Anthony Russo i Joe Russo, a producirao Marvel Studios. Film predstavlja završetak tzv. Infinity Sage u Marvel Cinematic Universe i direktan je nastavak filma Avengers: Infinity War. Postao je jedan od najuspješnijih filmova svih vremena te kulminacija jedne od najvećih narativnih epopeja u suvremenom filmu." 
        });

        podaci.filmovi.push({
            ime: "Interstellar"  ,
            slika: "https://m.media-amazon.com/images/I/81kz06oSUeL.jpg" ,
            uloge: "Matthew McConaughey, Anne Hathaway",
            opis: "Interstellar je znanstvenofantastični film iz 2014. godine koji je režirao Christopher Nolan. Poznat po spoju spektakularne vizualne estetike i emocionalne dubine, film istražuje teme ljubavi, vremena i opstanka čovječanstva kroz epsko putovanje svemirom." 
        });

         podaci.filmovi.push({
            ime: "Gladiator "  ,
            slika: "https://m.media-amazon.com/images/I/71sj8Yt20qL._AC_UF894%2C1000_QL80_.jpg" ,
            uloge: "Russell Crowe, Joanne Whalley",
            opis: "Epska priča o gladiatoru koji se borio za svoju čast i slobodu." 
        });

         podaci.filmovi.push({
            ime: "Jurassic Park "  ,
            slika: "https://cdn.dsmcdn.com/ty1458/product/media/images/prod/QC/20240803/15/5d4d2e0a-f8b2-3d8b-895e-2958cf93e3ec/1_org_zoom.jpg" ,
            uloge: "Sam Neill ,Laura Dern ",
            opis: "Priča o parku s dinozaurimaJurassic Park je američki znanstveno-fantastični avanturistički film iz 1993. godine koji je režirao Steven Spielberg prema romanu Jurassic Park. Film je postavio nove standarde u vizualnim efektima i animatronici te postao globalni blockbuster koji je pokrenuo dugotrajnu filmsku franšizu o genetski oživljenim dinosaurima.." 
        });

         podaci.filmovi.push({
            ime: "The Matrix"  ,
            slika: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc%40._V1_.jpg" ,
            uloge: "Keanu Reeves, Laurence Fishburne",
            opis: "The Matrix je znanstvenofantastični akcijski film iz 1999. godine koji su režirali Lana i Lilly Wachowski. Film je poznat po inovativnoj vizualnoj estetici, filozofskim temama i revolucionarnim akcijskim scenama, te je postao kultni klasik koji je utjecao na mnoge druge filmove i pop-kulturu." 
        });

         podaci.filmovi.push({
            ime: "Forrest Gump"  ,
            slika: "https://cdng.europosters.eu/pod_public/1300/266241.jpg" ,
            uloge: "Tom Hanks, Robin Wright",
            opis: "Forrest Gump je američki drama-film iz 1994. godine koji je režirao Robert Zemeckis. Film priča o životu Forresta Gumpa, jednog inteligentnog ali jednostavnog muškarca koji živi kroz različite epohe američke povijesti." 
        });

        podaci.filmovi.push({
            ime: "The Shawshank Redemption"  ,
            slika: "https://m.media-amazon.com/images/I/911USrdQtPL.jpg" ,
            uloge: "Tim Robbins, Morgan Freeman",
            opis: "The Shawshank Redemption je američki drama-film iz 1994. godine koji je režirao Frank Darabont. Film priča o prijateljstvu i nade u zatvoru, i postao je kultni klasik u svijetu filmova." 
        });

          podaci.filmovi.push({
            ime: "The Godfather"  ,
            slika: "https://cdng.europosters.eu/pod_public/1300/262788.jpg" ,
            uloge: "Marlon Brando, Al Pacino",
            opis: "The Godfather je američki krimi-film iz 1972. godine koji je režirao Francis Ford Coppola. Film priča o familiji Corleone i njihovoj putu ka moći u svijetu kriminala." 
        });

        podaci.filmovi.push({
            ime: "Pulp Fiction"  ,
            slika: "https://static.posters.cz/image/750/1288.jpg" ,
            uloge: "John Travolta, Uma Thurman",
            opis: "Pulp Fiction je američki krimi-film iz 1994. godine koji je režirao Quentin Tarantino. Film priča o međusobnim povezivanjima dvojice kriminalaca i njihovim životima u svijetu kriminala." 
        });

         podaci.filmovi.push({
            ime: "Fight Club"  ,
            slika: "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc%40._V1_.jpg" ,
            uloge: "Edward Norton, Brad Pitt",
            opis: "Fight Club je američki drama-film iz 1999. godine koji je režirao David Fincher. Film priča o muškarcu koji osniva tajni klub borbe kao način da se suoči s nezadovoljstvom u životu." 
        });

        podaci.filmovi.push({
            ime: "The Lord of the Rings: The Fellowship of the Ring"  ,
            slika: "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg" ,
            uloge: "Elijah Wood, Ian McKellen",
            opis: "The Lord of the Rings: The Fellowship of the Ring je američki fantasy-film iz 2001. godine koji je režirao Peter Jackson. Film priča o borbi protiv zla u svijetu Hobitova i njihovim putem do Gondora." 
        });

        podaci.filmovi.push({
            ime: "Star Wars: A New Hope"  ,
            slika: "https://m.media-amazon.com/images/I/818oxnoHqoL._AC_UF894%2C1000_QL80_.jpg" ,
            uloge: "Mark Hamill, Harrison Ford",
            opis: "Star Wars: A New Hope je američki fantasy-film iz 1977. godine koji je režirao George Lucas. Film priča o borbi protiv zla u svijetu zvijezda     i njihovim putem do Gondora." 
        });

        
        podaci.filmovi.push({
            ime: "Harry Potter and the Sorcerer's Stone"  ,
            slika: "https://www.originalfilmart.com/cdn/shop/files/harry_potter_and_the_sorcerers_stone_2001_original_film_art_5000x.webp?v=1684872812" ,
            uloge: "Daniel Radcliffe, Rupert Grint",
            opis: "Harry Potter and the Sorcerer's Stone je američki fantasy-film iz 2001. godine koji je režirao Chris Columbus. Film priča o mladom čarobnjaku koji otkriva svoju sudbinu u svijetu čarobnještva." 
        });

         podaci.filmovi.push({
            ime: "The Wolf of Wall Street"  ,
            slika: "https://m.media-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE%40._V1_.jpg" ,
            uloge: "Leonardo DiCaprio, Jonah Hill",
            opis: "The Wolf of Wall Street je američki drama-film iz 2013. godine koji je režirao Martin Scorsese. Film priča o uspješnom investitoru koji se uključuje u zločin i korupciju na Wall Street." 
        });

          podaci.filmovi.push({
            ime: "Joker"  ,
            slika: "https://m.https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE%40._V1_.jpg" ,
            uloge: "Joaquin Phoenix, Robert De Niro",
            opis: "Joker je američki drama-film iz 2019. godine koji je režirao Todd Phillips. Film priča o muškarcu koji postaje zločinac u svijetu kriminala." 
        });

          podaci.filmovi.push({
            ime: "Avatar"  ,
            slika: "https://m.media-amazon.com/images/M/https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc%40._V1_.jpg%40._V1_.jpg" ,
            uloge: "Sam Worthington, Zoe Saldana",
            opis: "Avatar je američki fantasy-film iz 2009. godine koji je režirao James Cameron. Film priča o vojniku koji se uključuje u borbu za preživljavanje na planini Pandora." 
        });

          podaci.filmovi.push({
            ime: "Top Gun: Maverick"  ,
            slika: "https://m.https://m.media-amazon.com/images/I/71BokibfVUL.jpg-amazon.com/images/M/https://m.media-amazon.com/images/M/MV5BMDEzMmQwZjctZWU2My00MWNlLWE0NjItMDJlYTRlNGJiZjcyXkEyXkFqcGc%40._V1_.jpg%40._V1_.jpg" ,
            uloge: "Tom Cruise, Miles Teller",
            opis: "Top Gun: Maverick je američki akcijski-film iz 2022. godine koji je režirao Joseph Kosinski. Film priča o vojniku koji se suočava s novim izazovima u vojnoj karieri." 
        });








        podaci.serije.push({
            ime: "Breaking Bad",
            slika: "https://image.tmdb.org/t/p/original/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg" ,
            uloge: "Bryan Cranston, Aaron Paul",
            opis: "Breaking Bad je američka kriminalistička drama-serija iz 2008. godine koja je kreirao Vince Gilligan. Serija prati priču o učitelju kemije koji postaje proizvođač metamfetamina kako bi osigurao financijsku budućnost svoje obitelji nakon dijagnoze raka."
        });

        podaci.serije.push({
            ime: "Game of Thrones",
            slika: "https://m.media-amazon.com/images/I/61%2B5mMtkPbL._AC_UF894%2C1000_QL80_.jpg://image.tmdb.org/t/p/original/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg" ,
            uloge: "Emilia Clarke, Kit Harington",
            opis: "Game of Thrones je američka fantasy-serija iz 2011. godine koja je kreirana Davidom Benioffom i D. B. Weissom. Serija prati priču o kućama koje se suočavaju s borbenim izazovima u svijetu Westeros."
        });

          podaci.serije.push({
            ime: "Stranger Things",
            slika: "https://m.https://image.tmdb.org/t/p/original/cVxVGwHce6xnW8UaVUggaPXbmoE.jpg-amazon.com/images/I/61%2B5mMtkPbL._AC_UF894%2C1000_QL80_.jpg://image.tmdb.org/t/p/original/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg" ,
            uloge: "Winona Ryder, David Harbour",
            opis: "Stranger Things je američka fantasy-serija iz 2016. godine koja je kreirana bratovima Duffer. Serija prati priču o djetetima koja otkrivaju tajne u svojoj zajednici."
        });

         podaci.serije.push({
            ime: "The Witcher",
            slika: "https://m.media-amazon.com/images/M/MV5BOTQzMzNmMzUtODgwNS00YTdhLTg5N2MtOWU1YTc4YWY3NjRlXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg://m.https://image.tmdb.org/t/p/original/cVxVGwHce6xnW8UaVUggaPXbmoE.jpg-amazon.com/images/I/61%2B5mMtkPbL._AC_UF894%2C1000_QL80_.jpg://image.tmdb.org/t/p/original/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg" ,
            uloge: "Henry Cavill, Anya Chalotra",
            opis: "The Witcher je američka fantasy-serija iz 2019. godine koja je kreirana bratovima Duffer. Serija prati priču o čarobnjaku koji se suočava s raznim izazovima u svijetu."
        });

         podaci.serije.push({
            ime: "The Witcher",
            slika: "https://m.media-amazon.com/images/M/MV5BOTQzMzNmMzUtODgwNS00YTdhLTg5N2MtOWU1YTc4YWY3NjRlXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg://m.https://image.tmdb.org/t/p/original/cVxVGwHce6xnW8UaVUggaPXbmoE.jpg-amazon.com/images/I/61%2B5mMtkPbL._AC_UF894%2C1000_QL80_.jpg://image.tmdb.org/t/p/original/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg" ,
            uloge: "Henry Cavill, Anya Chalotra",
            opis: "The Witcher je američka fantasy-serija iz 2019. godine koja je kreirana bratovima Duffer. Serija prati priču o čarobnjaku koji se suočava s raznim izazovima u svijetu."
        });




        podaci.dokumentarci.push({
            ime: "Dokumentarac " + i,
            slika: "https://via.placeholder.com/200x300?text=Dok+" + i,
            uloge: "Narator",
            opis: "Opis dokumentarca broj " + i
        });
    


function prikaziKategoriju(kategorija) {
    const galerija = document.getElementById("galerija");
    const naslov = document.getElementById("naslov");

    galerija.innerHTML = "";
    naslov.innerText = kategorija.toUpperCase();

    podaci[kategorija].forEach(item => {
        const div = document.createElement("div");
        div.classList.add("film");

        div.innerHTML = `<img src="${item.slika}">`;

        div.onclick = () => otvoriPopup(item);

        galerija.appendChild(div);
    });
}

function otvoriPopup(item) {
    document.getElementById("popup").style.display = "block";
    document.getElementById("ime").innerText = item.ime;
    document.getElementById("uloge").innerText = item.uloge;
    document.getElementById("opis").innerText = item.opis;
}

function zatvoriPopup() {
    document.getElementById("popup").style.display = "none";
}

// inicijalizacija
generirajPodatke();
prikaziKategoriju("filmovi");