(function(){
    var tiles = [];

    function init(){
        for(var i = 1; i < 9; i++){
            var tile = document.querySelector("#n"+i);
            tile.style.background = "url('images/n"+i+".png')";
            tiles.push(tile);
        }
        tiles.push(null);
        render();
    }

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