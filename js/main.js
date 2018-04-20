
///////////////////////////////////////////
////////                           ////////
////////      MAIN FUNCTIONS       ////////
////////                           ////////
///////////////////////////////////////////

function update(){
    generateEnemies();
    generateCoins();
    generateArrows();
    deleteEnemies();
    deleteCoins();
    deleteArrows();
    frames++
    ctx.clearRect(0,0,canvas.width, canvas.height);
    
    if(Math.floor(frames / 60) >= 0){
        sky.draw();
    }
    if(Math.floor(frames / 60) >= 20){
        sky2.draw();
    }
    if(Math.floor(frames / 60) >= 40){
        sky3.draw();
    }
    if(Math.floor(frames / 60) >= 60){
        sky2.draw();
    }
    if(Math.floor(frames / 60) >= 80){
        sky.draw();
    }

    clouds1.draw();
    clouds2.draw();
    board.draw();
    board2.draw();
    board2.drawScore();
    floor.draw();
    drawEnemies();
    drawArrows();

    if (viking.z != 270){
        jump.draw();
        
    }else {
        viking.animate();
        viking.z = 270;
    }

    drawCoins();
    checkCollition();
    checkCollition2()
    checkCollition3()
}

function start(){
    if(intervalo > 0) return;
    intervalo = setInterval(function(){
        update();
    }, 1000/60);
    board2.score = 0;
    frames = 0;
    board2.music.play();
}

function stop(){
    clearInterval(intervalo);
    intervalo = 0;
    frames = frames;
    board2.music.pause();
}