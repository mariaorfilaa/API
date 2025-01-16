document.getElementById("button").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            console.log(response);
            pintarPokemon(response);
        }
    });

    const nom1 = document.getElementById("nom1").value;
    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon/` + nom1);
    xhr.send();
})

document.getElementById("tots").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            console.log(response);
            for (let i = 0; i < response.results.length; i++) {

                const xhr1 = new XMLHttpRequest();

                xhr1.addEventListener('readystatechange', function () {
                    if (this.readyState === this.DONE) {
                        const response = JSON.parse(this.responseText);
                        console.log(response);
                        pintarPokemon(response);
                    }
                });

                xhr1.open('GET', response.results[i].url);
                xhr1.send();

            }
        }
    });

    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
    xhr.send();
})

document.getElementById("tipos").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            
             document.getElementById("resultat").innerHTML = ""

             let tipo = document.getElementById("tipo").value;
             console.log(tipo)

            for (let i = 0; i < response.results.length; i++) {

                const xhr1 = new XMLHttpRequest();

                xhr1.addEventListener('readystatechange', function () {
                    if (this.readyState === this.DONE) {
                        const response = JSON.parse(this.responseText);
                        
                        for(let a = 0; a<response.types.length; a++ ){
                            
                            if(response.types[a].type.name == tipo){
                                console.log(response.types[a].type.name );
                                console.log(response)
                                pintarPokemon(response);
                            }

                        }

                    
                    }
                });

                xhr1.open('GET', response.results[i].url);
                xhr1.send();

            }
        }
    });

    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
    xhr.send();
})

document.getElementById("moves").addEventListener("click", function () {
    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            const response = JSON.parse(this.responseText);
            
             document.getElementById("resultat").innerHTML = ""

             let move = document.getElementById("move").value;
             console.log(tipo)

            for (let i = 0; i < response.results.length; i++) {

                const xhr1 = new XMLHttpRequest();

                xhr1.addEventListener('readystatechange', function () {
                    if (this.readyState === this.DONE) {
                        const response = JSON.parse(this.responseText);
                        
                        for(let a = 0; a<response.types.length; a++ ){
                            
                            if(response.moves[a].move.name == move){
                                console.log(response.moves[a].move.name );
                                console.log(response)
                                pintarPokemon(response);
                            }

                        }

                    
                    }
                });

                xhr1.open('GET', response.results[i].url);
                xhr1.send();

            }
        }
    });

    xhr.open('GET', `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);
    xhr.send();
})

function pintarPokemon(pokemon) {

    let nom = document.createElement("h2")
    let imatge = document.createElement("img")
   
    nom.innerHTML = pokemon.name.toUpperCase();
    imatge.src = pokemon.sprites.front_default;

    //document.getElementById("resultat").innerHTML = ""
  
    document.getElementById("resultat").append(nom)
    document.getElementById("resultat").append(imatge) 

}