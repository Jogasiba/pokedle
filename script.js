var random = Math.floor(Math.random() * 100) + 1;

async function buscar() {
    var input = document.getElementById('inputPokemon')

    var escolhido = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`).then(resposta => {return resposta.json()});
    var escolhido1 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${random}`).then(resposta => {return resposta.json()});
    var selecionado = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`).then(resposta => {return resposta.json()});
    var selecionado1 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${input.value}`).then(resposta => {return resposta.json()});
    var area = document.getElementById('cardsArea')

    var tipo1 = selecionado.types[0].type.name
    if(selecionado.types[1] == undefined){
        var tipo2 = "Não tem"
    } else{
        var tipo2 = selecionado.types[1].type.name
    }
    var ataque = selecionado.stats[1].base_stat
    var defesa = selecionado.stats[2].base_stat
    var cor = selecionado1.color.name
    var altura = parseInt(selecionado.height) / 10;
    var peso = parseInt(selecionado.weight) / 10;

    var Rtipo1 = escolhido.types[0].type.name
    if(escolhido.types[1] == undefined){
        var Rtipo2 = "Não tem"
    } else{
        var Rtipo2 = escolhido.types[1].type.name
    }
    var Rataque = escolhido.stats[1].base_stat
    var Rdefesa = escolhido.stats[2].base_stat
    var Rcor = escolhido1.color.name
    var Raltura = parseInt(escolhido.height) / 10;
    var Rpeso = parseInt(escolhido.weight) / 10;

    if(tipo1 == Rtipo1){
      var boolTipo1 = 'green'
    } else{
      var boolTipo1 = 'red'
    }

    if(tipo2 == Rtipo2){
      var boolTipo2 = 'green'
    } else{
      var boolTipo2 = 'red'
    }

    if(ataque == Rataque){
      var boolAtaque = 'green'
    } else if(ataque < Rataque){
      var boolAtaque = 'orange'
    } else{
       var boolAtaque = 'red'
    }

    if(defesa == Rdefesa){
      var boolDefesa = 'green'
    } else if(defesa < Rdefesa){
      var boolDefesa = 'orange'
    } else{
       var boolDefesa = 'red'
    }

    if(cor == Rcor){
      var boolCor = 'green'
    } else{
      var boolCor = 'red'
    }
    
    if(altura == Raltura){
      var boolAltura = 'green'
    } else if(altura < Raltura){
      var boolAltura = 'orange'
    } else{
       var boolAltura = 'red'
    }

    if(peso == Rpeso){
      var boolPeso = 'green'
    } else if(peso < Rpeso){
      var boolPeso = 'orange'
    } else{
       var boolPeso = 'red'
    }

    
    area.innerHTML += `<div class="row">
        <div class="card col-lg-1">
          <div class="card-body">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selecionado.id}.png">
          </div>
        </div>
        <div class="card col-lg-1" style="background-color:${boolTipo1}">
          <div class="card-body">
            ${tipo1}
          </div>
        </div>
        <div class="card col-lg-1" style="background-color:${boolTipo2}">
          <div class="card-body">
            ${tipo2}
          </div>
        </div>
        <div class="card col-lg-1" style="background-color:${boolAtaque}">
          <div class="card-body">
            ${ataque}
          </div>
        </div>
        <div class="card col-lg-1" style="background-color:${boolDefesa}">
          <div class="card-body">
            ${defesa}
          </div>
        </div>
        <div class="card col-lg-1" style="background-color:${boolCor}">
          <div class="card-body">
            ${cor}
          </div>
        </div>
        <div class="card col-lg-1" style="background-color:${boolAltura}">
          <div class="card-body">
           ${altura}
          </div>
        </div>
        <div class="card col-lg-1" style="background-color:${boolPeso}">
          <div class="card-body">
            ${peso}
          </div>
        </div>
      </div>`;
}