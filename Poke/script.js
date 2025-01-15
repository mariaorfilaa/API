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

document.getElementById("steel").addEventListener("click", function () {
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
                        console.log(response)
                        if(response.types[0].type.name == "steel"){
                            pintarPokemon(response);
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

document.getElementById("water").addEventListener("click", function () {
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
                        console.log(response)
                        if(response.types[0].type.name == "water"){
                            pintarPokemon(response);
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

document.getElementById("ghost").addEventListener("click", function () {
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
                        console.log(response)
                        if(response.types[0].type.name == "ghost"){
                            pintarPokemon(response);
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

document.getElementById("fire").addEventListener("click", function () {
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
                        console.log(response)
                        if(response.types[0].type.name == "fire"){
                            pintarPokemon(response);
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
document.getElementById("fairy").addEventListener("click", function () {
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
                        console.log(response)
                        if(response.types[0].type.name == "fairy"){
                            pintarPokemon(response);
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

document.getElementById("electric").addEventListener("click", function () {
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
                        console.log(response)
                        if(response.types[0].type.name == "electric"){
                            pintarPokemon(response);
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