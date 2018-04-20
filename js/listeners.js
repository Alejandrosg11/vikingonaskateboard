
///////////////////////////////////////////
////////                           ////////
////////        START GAME         ////////
////////                           ////////
///////////////////////////////////////////

document.getElementById("start-button").onclick = function() {
    start();
  };

document.getElementById('pause-button').onclick = function(){
    location.reload();
}

addEventListener('keydown', function(e){
    if(e.keyCode === 32){
        viking.jumpViking()
    }
});
