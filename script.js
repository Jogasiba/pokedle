var random = Math.floor(Math.random() * 100) + 1; //seleciona um numero entre um e 100

async function buscar() {
    var input = document.getElementById('inputPokemon') //pega o elemento cm o id 'inputPokemon'

    var escolhido = await fetch(`https://pokeapi.co/api/v2/pokemon/${random}`).then(resposta => {return resposta.json()}); //pega o json do pokemon escolhido aleatoriamente
    var escolhido1 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${random}`).then(resposta => {return resposta.json()}); //pega o json do pokemon escolhido aleatoriamente - pagina para pegar a cor
    var selecionado = await fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`).then(resposta => {return resposta.json()}); //pega o json do pokemon escolhido pelo jogador
    var selecionado1 = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${input.value}`).then(resposta => {return resposta.json()}); //pega o json do pokemon escolhido jogador - pagina para pegar a cor
    var area = document.getElementById('cardsArea') //pega o elemento cm o id 'cardsArea'

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
      ataque += ' <'
      var boolAtaque = 'red'
    } else{
      ataque += ' >'
       var boolAtaque = 'red'
    }

    if(defesa == Rdefesa){
      var boolDefesa = 'green'
    } else if(defesa < Rdefesa){
      defesa += ' <'
      var boolDefesa = 'red'
    } else{
      defesa += ' >'
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
      altura += ' <'
      var boolAltura = 'red'
    } else{
      altura += ' >'
      var boolAltura = 'red'
    }

    if(peso == Rpeso){
      var boolPeso = 'green'
    } else if(peso < Rpeso){
      peso += ' <'
      var boolPeso = 'red'
    } else{
      peso += ' >'
      var boolPeso = 'red'
    }

    var auxArea = area.innerHTML
    area.innerHTML = `<div class="row">
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

      area.innerHTML += auxArea
}