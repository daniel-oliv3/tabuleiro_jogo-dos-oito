(function(){
    var tiles = []; //arrays que arazenam o estado do jogo e o de vitria, respectivamente

    //função que inicializa os elementos do jogo
    function init(){
        for(var i = 1; i < 9; i++){ //varre os elementos 'btn' adicionando a imagem e inserindo os elementos no array
            var tile = document.querySelector("#n"+i);
            tile.style.background = "url('images/n"+i+".png')";
            tiles.push(tile);
        }
        tiles.push(null); //completa o array com um espaço nulo e o copia para a resposta, depois renderiza o tabuleiro
        render();
    }

    //ajusta a exibição do tabuleiro em função do array tiles
    function render(){
        for(var i in tiles){
            var tile = tiles[i];
            if(tile){
                tile.style.left = (i%3) * 100 + 5 + "px";
                if(i < 3){
                    tile.style.top = "5px";
                }else
                if(i < 6){
                    tile.style.top = "105px";
                }else {
                    tile.style.top = "205px";
                }
            }
        }
    }

    init();
}());