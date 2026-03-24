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
            slika: "https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc%40._V1_.jpg" ,
            uloge: "Joaquin Phoenix, Robert De Niro",
            opis: "Joker je američki drama-film iz 2019. godine koji je režirao Todd Phillips. Film priča o muškarcu koji postaje zločinac u svijetu kriminala." 
        });

          podaci.filmovi.push({
            ime: "Avatar"  ,
            slika: "https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/-dsAAOSwXS5ir7bq/%24_57.JPG?set_id=880000500F" ,
            uloge: "Sam Worthington, Zoe Saldana",
            opis: "Avatar je američki fantasy-film iz 2009. godine koji je režirao James Cameron. Film priča o vojniku koji se uključuje u borbu za preživljavanje na planini Pandora." 
        });

          podaci.filmovi.push({
            ime: "Top Gun: Maverick"  ,
            slika: "https://m.media-amazon.com/images/I/71BokibfVUL._AC_UF1000%2C1000_QL80_.jpg" ,
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
            slika: "https://m.media-amazon.com/images/I/81U0-cRG34S._AC_UF894%2C1000_QL80_.jpg" ,
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
            ime: "Money Heist",
            slika: "https://www.tallengestore.com/cdn/shop/products/MoneyHeist4-NetflixTVShowPoster_7e0e76a3-ff28-4625-bc59-6ac24288a02c.jpg?v=1589268616" ,
            uloge: "Úrsula Corberó, Álvaro Morte",
            opis: "Money Heist je španjolska drama-serija iz 2017. godine koja je kreirana bratovima Duffer. Serija prati priču o gubitku koji se suočava s raznim izazovima u svijetu."
        });

         podaci.serije.push({
            ime: "Friends",
            slika: "https://www.tallengestore.com/cdn/shop/products/FRIENDS-Reunion-TVShowPoster_b43d3fb1-59d8-4399-8e96-37e1e6792d0d.jpg?v=1625220877" ,
            uloge: "Jennifer Aniston, Courteney Cox",
            opis: "Friends je američka komedija koja se odvija u New Yorku. Serija prati priču o četiri prijatelja koje povezuju odnosi i iskustva u svakodnevnom životu ."
        });

        podaci.serije.push({
            ime: "The Office",
            slika: "https://m.media-amazon.com/images/M/MV5BZjQwYzBlYzUtZjhhOS00ZDQ0LWE0NzAtYTk4MjgzZTNkZWEzXkEyXkFqcGc%40._V1_.jpg" ,
            uloge: "Steve Carell, Rainn Wilson",
            opis: "The Office je američka komedija koja se odvija u kancelariji. Serija prati priču o četiri prijatelja koje povezuju odnosi i iskustva u svakodnevnom životu ."
        });

         podaci.serije.push({
            ime: "Dark",
            slika: "https://rukminim2.flixcart.com/image/480/480/kz4gh3k0/poster/i/z/z/medium-dark-netflix-series-matte-finish-poster-posterpoint6123-original-imagb785hrf8hrqv.jpeg?q=90" ,
            uloge: "Louis Hofmann, Oliver Masucci",
            opis: "Dark je španjolska kriminalistička drama-serija iz 2017. godine koja je kreirana bratovima Duffer. Serija prati priču o četiri prijatelja koje povezuju odnosi i iskustva u svakodnevnom životu ."
        });

          podaci.serije.push({
            ime: "Peaky Blinders",
            slika: "https://static.nadirkitap.com/fotograf/746977/23/Efemera_202105171548487469778.jpg" ,
            uloge: "Cillian Murphy, Helen McCrory",
            opis: "Peaky Blinders je britanska drama-serija iz 2013. godine koja je kreirana bratovima Duffer. Serija prati priču o četiri prijatelja koje povezuju odnosi i iskustva u svakodnevnom životu ."
        });

          podaci.serije.push({
            ime: "Sherlock",
            slika: "https://m.media-amazon.com/images/M/MV5BNTQzNGZjNDEtOTMwYi00MzFjLWE2ZTYtYzYxYzMwMjZkZDc5XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg" ,
            uloge: "Benedict Cumberbatch, Martin Freeman",
            opis: "Sherlock je britanska kriminalistička drama-serija iz 2010. godine koja je kreirana bratovima Duffer. Serija prati priču o četiri prijatelja koje povezuju odnosi i iskustva u svakodnevnom životu ."
        });

         podaci.serije.push({
            ime: "Narcos",
            slika: "https://m.media-amazon.com/images/I/81nTw%2B95MyL._AC_UF894%2C1000_QL80_.jpg" ,
            uloge: "Wagner Moura, Boyd Holbrook",
            opis: "Narcos je kriminalistička drama-serija iz 2015. godine koja je kreirana bratovima Duffer. Serija prati priču o četiri prijatelja koje povezuju odnosi i iskustva u svakodnevnom životu ."
        });

          podaci.serije.push({
            ime: "House of the Dragon",
            slika: "https://static.posters.cz/image/1300/230490.jpg" ,
            uloge: "Paddy Considine, Olivia Cooke",
            opis: "House of the Dragon je fantasy drama-serija iz 2022. godine koja je kreirana bratovima Duffer. Serija prati priču o četiri prijatelja koje povezuju odnosi i iskustva u svakodnevnom životu ."
        });

          podaci.serije.push({
            ime: "The Mandalorian",
            slika: "https://m.media-amazon.com/images/I/71Ea5hrCg5L._AC_UF1000%2C1000_QL80_.jpg" ,
            uloge: "Pedro Pascal, Gina Carano",
            opis: "The Mandalorian je fantasy drama-serija iz 2020. godine koja je kreirana bratovima Duffer. Serija prati priču o četiri prijatelja koje povezuju odnosi i iskustva u svakodnevnom životu ."
        });

         podaci.serije.push({
            ime: "Black Mirror",
            slika: "https://i.ebayimg.com/images/g/9HcAAOSwVTFgW342/s-l1200.jpg" ,
            uloge: "Bryan Cranston, Jon Hamm",
            opis: "Black Mirror je britanska znanstvenofantastična serija iz 2011. godine koja je kreirana bratovima Duffer. Serija prati priču o četiri prijatelja koje povezuju odnosi i iskustva u svakodnevnom životu ."
        });

         podaci.serije.push({
            ime: "Vikings",
            slika: "https://m.media-amazon.com/images/I/51oy3YpGJ5L.jpg" ,
            uloge: "Travis Fimmel, Katheryn Winnick",
            opis: "Vikings je irsko-kanadska povijesna drama-serija iz 2013. godine koja je kreirana bratovima Duffer. Serija prati priču o četiri prijatelja koje povezuju odnosi i iskustva u svakodnevnom životu ."
        });

         podaci.serije.push({
            ime: "Lost",
            slika: "https://m.media-amazon.com/images/I/71OZeGjkmbL._AC_UF894%2C1000_QL80_.jpg" ,
            uloge: "Matthew Fox, Evangeline Lilly",
            opis: "Lost je američka televizijska drama s elementima misterije i znanstvene fantastike koja se emitirala na mreži ABC od 2004. do 2010. godine. Serija je stekla globalnu popularnost zbog složene naracije, nadnaravnih motiva i snažnih likova, osvojivši nagrade poput Emmyja i Zlatnog globusa za najbolju dramsku seriju. "
        });

         podaci.serije.push({
            ime: "Prison Break",
            slika: "https://www.tallengestore.com/cdn/shop/products/PrisonBreak-NetflixTVShowPoster_72517e2c-3db7-48cb-82f5-ea8c2916bfb3.jpg?v=1589271930" ,
            uloge: "Wentworth Miller, Dominic Purcell",
            opis: "Prison Break je američka televizijska serija koja se emitirala na mreži Fox od 2005. do 2009. godine, a zatim je obnovljena za petu sezonu 2017. godine. Serija prati priču o bratu koji planira bijeg iz zatvora kako bi spasio svog brata osuđenog na smrt, a tijekom serije se suočavaju s različitim izazovima i opasnostima."
        });

          podaci.serije.push({
            ime: "The Boys",
            slika: "https://m.media-amazon.com/images/I/710-pag9eJL._AC_UF894%2C1000_QL80_.jpg" ,
            uloge: "Karl Urban, Antony Starr",
            opis: "The Boys je američka televizijska serija koja se emitirala na mreži Amazon Prime Video od 2019. do 2024. godine. Serija prati priču o grupi heroja koji su u svakodnevnom životu suočeni s različitim izazovima i opasnostima."
        });

          podaci.serije.push({
            ime: "Wednesday",
            slika: "https://i.ebayimg.com/00/s/MTYwMFgxMDY2/z/ABIAAOSwtHRj8Z37/%24_57.JPG?set_id=880000500F&hash=item3a9c8e5b09" ,
            uloge: "Jenna Ortega, Catherine Zeta-Jones",
            opis: "Wednesday je američka televizijska serija koja se emitirala na mreži Netflix od 2022. godine. Serija prati priču o djevojci koja se suočava s različitim izazovima i opasnostima u svakodnevnom životu." 
        });

           podaci.serije.push({
            ime: "Euphoria",
            slika: "https://m.media-amazon.com/images/M/MV5BZjVlN2M2N2MtOWViZC00MzIxLTlhZWEtMTIwNDIwMzE3ZWJiXkEyXkFqcGc%40._V1_.jpg" ,
            uloge: "Zendaya, Hunter Schafer",
            opis: "Euphoria je američka televizijska serija koja se emitirala na mreži HBO od 2019. godine. Serija prati priču o grupi tinejdžera koji se suočavaju s različitim izazovima i opasnostima u svakodnevnom životu." 
        });










        podaci.dokumentarci.push({
            ime: "Planet Earth " ,
            slika: "https://m.media-amazon.com/images/M/MV5BY2NjNDUzOTgtMDFmNC00ZGQ4LWE5MDctMzczNGVlOGU1N2MyXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg" ,
            uloge: "David Attenborough",
            opis: "Planet Earth je britanski dokumentarni serijal koji istražuje različite ekosustave i divlje životinje širom svijeta, pružajući zadivljujuće vizualne prikaze prirode i njenog bogatstva."
        });

         podaci.dokumentarci.push({
            ime: "Our Planet " ,
            slika: "https://m.media-amazon.com/images/M/MV5BZDE1NzlkNWMtNzFiMC00ZTgxLTgyMmItOTU5OGI2NWQ4MDMxXkEyXkFqcGc%40._V1_.jpg" ,
            uloge: "David Attenborough",
            opis: "Our Planet je britanski dokumentarni serijal koji istražuje različite ekosustave i divlje životinje širom svijeta, pružajući zadivljujuće vizualne prikaze prirode i njenog bogatstva."
        });

          podaci.dokumentarci.push({
            ime: "The Social Dilemma " ,
            slika: "https://m.media-amazon.com/images/I/61V5JM526cL._AC_UF894,1000_QL80_.jpg" ,
            uloge: "Jeff Seibert, Tristan Harris",
            opis: "The Social Dilemma je američki dokumentarni film koji istražuje utjecaj društvenih mreža na društvo i individualno ponašanje."
        });

         podaci.dokumentarci.push({
            ime: "Free Solo" ,
            slika: "https://m.media-amazon.com/images/M/MV5BMjA2YTAxMzMtNzA2Mi00NTcyLTg4NzUtODIxYzFiYzdiNWNlXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg" ,
            uloge: "Alex Honnold, Sanni McCandless",
            opis: "Free Solo je američki dokumentarni film koji prati uspon Alexa Honnolda na El Capitan bez ikakve sigurnosne opreme, istražujući njegovu strast, strah i odlučnost."
        });

          podaci.dokumentarci.push({
            ime: "Inside Job" ,
            slika: "https://m.media-amazon.com/images/M/MV5BMTQ3MjkyODA2Nl5BMl5BanBnXkFtZTcwNzQxMTU4Mw%40%40._V1_FMjpg_UX1000_.jpg" ,
            uloge: "Charles Ferguson, Adam McKay",
            opis: "Inside Job je američki dokumentarni film koji istražuje ekonomske i političke prakse koje su vodile do finansijske krize."
        });

         podaci.dokumentarci.push({
            ime: "Blackfish" ,
            slika: "https://m.media-amazon.com/images/M/MV5BNTkyNTkwMzkxMl5BMl5BanBnXkFtZTcwMzAwOTE2OQ%40%40._V1_FMjpg_UX1000_.jpg" ,
            uloge: "Tilikum, John Hargrove",
            opis: "Blackfish je američki dokumentarni film koji istražuje uvjete u kojima žive delfini u akvarijima i kako to utječe na njihov život."
        });

          podaci.dokumentarci.push({
            ime: "Cosmos: A Spacetime Odyssey" ,
            slika: "https://media.themoviedb.org/t/p/w500/nOGArjE0WMkzY2GW1taJm8l9gxD.jpg" ,
            uloge: "Neil deGrasse Tyson",
            opis: "Cosmos: A Spacetime Odyssey je američki dokumentarni serijal koji istražuje različite aspekte svemira, znanosti i ljudskog postojanja, pružajući zadivljujuće vizualne prikaze i duboke uvide u našu stvarnost."
        });

          podaci.dokumentarci.push({
            ime: "Seaspiracy" ,
            slika: "https://m.media-amazon.com/images/M/MV5BOWUzZDNjZTEtZDM1Mi00ODVkLWI4Y2UtYjAwZGVlM2YwNTg4XkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg" ,
            uloge: "N/A",
            opis: "Seaspiracy je američki dokumentarni film koji istražuje utjecaj ljudi na oceane i morske ekosustave."
        });

         podaci.dokumentarci.push({
            ime: "13th" ,
            slika: "https://m.media-amazon.com/images/M/MV5BMjAwMjU5NTAzOF5BMl5BanBnXkFtZTgwMjQwODQxMDI%40._V1_FMjpg_UX1000_.jpg" ,
            uloge: "Ava DuVernay",
            opis: "13th je američki dokumentarni film koji istražuje povijest rasne nepravde i masovnog zatvaranja u Sjedinjenim Američkim Državama."
        });
    

         podaci.dokumentarci.push({
            ime: "Icarus" ,
            slika: "https://m.media-amazon.com/images/M/MV5BZmMzZmI2NzctNWNlMS00ZGE0LTljYjctNDQ5MDQ4Yzc0NDlkXkEyXkFqcGc%40._V1_.jpg" ,
            uloge: " Bryan Fogel, Grigory Rodchenkov",
            opis: "Icarus je američki dokumentarni film koji istražuje doping u sportu, prateći priču o biciklistu koji se uključuje u eksperiment s dopingom i otkriva korupciju u svijetu sporta."
        });

            podaci.dokumentarci.push({
            ime: "Making a Murderer" ,
            slika: "https://m.media-amazon.com/images/M/MV5BMTg4Mjc1NjE4Ml5BMl5BanBnXkFtZTgwMjk2NjA1NjM%40._V1_.jpg" ,
            uloge: "Steven Avery, Brendan Dassey",
            opis: "Making a Murderer je američki dokumentarni serijal koji istražuje priču o Steven Averyju, čovjeku koji je optužen za ubojstvo i prateći njegove pokušaje da dokazuje svoju nevinost."
        });

        
            podaci.dokumentarci.push({
            ime: "The Last Dance" ,
            slika: "https://m.media-amazon.com/images/M/MV5BOTQyYmQ1N2UtYjFkNS00NzgyLTk5YTUtYjExMDdjOTA3MGU2XkEyXkFqcGc%40._V1_.jpg" ,
            uloge: "Michael Jordan",
            opis: "The Last Dance je američki dokumentarni serijal koji istražuje priču o Michaelu Jordanu i njegovom utjecaju na basketball."
        });

          podaci.dokumentarci.push({
            ime: "Amy" ,
            slika: "https://m.media-amazon.com/images/I/71VNCp1lHCL.jpg" ,
            uloge: "Amy Winehouse",
            opis: "Amy je američki dokumentarni film koji istražuje život i karijeru Amy Winehouse, britanske pjevačice i songwriterice."
        });

        podaci.dokumentarci.push({
            ime: "Senna" ,
            slika: "https://m.media-amazon.com/images/M/MV5BMTc5MTUzOTAxMl5BMl5BanBnXkFtZTcwODQzMjg3NA%40%40._V1_.jpg" ,
            uloge: "Ayrton Senna",
            opis: "Senna je američki dokumentarni film koji istražuje život i karijeru Ayrtona Sennu, brazilskog vozača.Formula 1."
        });

         podaci.dokumentarci.push({
            ime: "Tiger King" ,
            slika: "https://m.media-amazon.com/images/M/MV5BODI0MTE2MDMtZDM2MC00MGM5LTgzOGItMzhlNGViY2U2ODdjXkEyXkFqcGc%40._V1_.jpg" ,
            uloge: "Joe Exotic",
            opis: "Tiger King je američki dokumentarni serijal koji istražuje život i karijeru Joea Exotica, čovjeka koji je poznat po svojoj radnji s divljim lavovima."
        });

         podaci.dokumentarci.push({
            ime: "March of the Penguins" ,
            slika: "https://cdn11.bigcommerce.com/s-ydriczk/products/82580/images/92423/MARCH-OF-THE-PENGUINS-SINGLE-SIDED-Regular-2005-ORIGINAL-CINEMA-POSTER__48439.1549383017.450.659.jpg?c=2" ,
            uloge: "Morgan Freeman",
            opis: "March of the Penguins je američki dokumentarni film koji istražuje život i migraciju pingvina u Antarktici."
        });

         podaci.dokumentarci.push({
            ime: "Super Size Me" ,
            slika: "https://i.ebayimg.com/images/g/aJoAAOSwVFlUFk7W/s-l1200.jpg" ,
            uloge: "Morgan Spurlock",
            opis: "Super Size Me je američki dokumentarni film koji istražuje utjecaj brze hrane na zdravlje, prateći priču o čovjeku koji se odlučuje jesti samo hranu iz McDonald'sa tijekom 30 dana."
        });

          podaci.dokumentarci.push({
            ime: "Blue Planet" ,
            slika: "https://m.media-amazon.com/images/M/MV5BYjgyODJmY2YtZTk4Yy00MjBlLWFlM2YtNDIyMDk5YmQxMTllXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg" ,
            uloge: "David Attenborough",
            opis: "Blue Planet je britanski dokumentarni serijal koji istražuje različite ekosustave i divlje životinje širom svijeta, pružajući zadivljujuće vizualne prikaze prirode i njenog bogatstva."
        });

          podaci.dokumentarci.push({
            ime: "The Cove" ,
            slika: "https://m.media-amazon.com/images/M/MV5BMTc3Nzg2NzM5MF5BMl5BanBnXkFtZTcwMTYwMjU2Mg%40%40._V1_FMjpg_UX1000_.jpg" ,
            uloge: "Ric O'Barry",
            opis: "The Cove je američki dokumentarni film koji istražuje lov na delfine u Japanu i utjecaj tog lova na okoliš i životinje."
        });

        
          podaci.dokumentarci.push({
            ime: "Food, Inc." ,
            slika: "https://m.media-amazon.com/images/M/MV5BNmQyY2VlNTYtYjYzNi00YmY3LTgzNTktOWJkZmNlMmFlNWQyXkEyXkFqcGc%40._V1_FMjpg_UX1000_.jpg" ,
            uloge: "Michael Pollan",
            opis: "Food, Inc. je američki dokumentarni film koji istražuje industriju hrane i utjecaj koji ona ima na zdravlje, okoliš i društvo."
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