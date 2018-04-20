
///////////////////////////////////////////
////////                           ////////
////////       AUX FUNCTIONS       ////////
////////                           ////////
///////////////////////////////////////////

var gameImg = new Image()
gameImg.src =  "assets/gameOver.png";

function gameOver(){

    this.x = 0;
    this.y = 0;
    this.width = 900;
    this.height = 500;
    this.img = new Image();
    this.img.src = "assets/gameOver.png";
    stop();
    console.log(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(gameImg, this.x, this.y, this.width,this.height);
    ctx.font = "50px PR Viking";
    ctx.fillStyle = "white";
    ctx.fillText((parseInt(board2.distance / 60)), 700,200);
    ctx.font = "50px PR Viking";
    ctx.fillStyle = "white";
    ctx.fillText(coinsCollection, 700, 300);
    ctx.font = "50px PR Viking";
    ctx.fillStyle = "white";
    ctx.fillText((parseInt(board2.distance / 60)) + coinsCollection, 700, 400);
    
}

function generateEnemies (){
    var x = [100,200,300];
    var rand = x[Math.floor(Math.random() * x.length)];
    if(!(frames % rand === 0)) return;
    var enemy = new Enemy ();
    enemies.push(enemy);
}

function deleteEnemies(){
    if(enemies.length === 5){
        enemies.splice(0,1)
    }
}

function drawEnemies(){
    enemies.forEach(function(enemy){
        enemy.draw();
    })
}

function generateArrows (){
    var x = [100,200,300];
    var rand = x[Math.floor(Math.random() * x.length)];
    if(!(frames % rand === 0)) return;
    var arrow = new Arrow ();
    arrows.push(arrow);
}

function deleteArrows(){
    if(arrows.length === 5){
        arrows.splice(0,1)
    }
}

function drawArrows(){
    arrows.forEach(function(arrow){
        arrow.draw();
    })
}

function generateCoins (){
    var x = [23,67,143,320,420,520];
    var rand = x[Math.floor(Math.random() * x.length)];
    if(!(frames % rand === 0)) return;
    var coin = new Coin ();
    coins.push(coin);
}

function deleteCoins(){
    if(enemies.length === 10){
        coin.splice(0,1)
    }
}

function drawCoins(){
    coins.forEach(function(coin){
        coin.animate();
    })
}

function checkCollition(){
    enemies.forEach(function(enemy){
     if(enemy.isTouching(viking)){
        console.log("ouch!")
        gameOver();
        }   
    })
}

function checkCollition2(){
    coins.forEach(function(coin){
     if(coin.isTouching(jump)){
        coin.z = -50;
        coinsCollection = coinsCollection + 1;
        console.log("Coin + 1")
    }
    })
}

function checkCollition3(){
    arrows.forEach(function(arrow){
     if(arrow.isTouching(jump)){
        console.log("arrow ouch!");
        gameOver();
    }
    })
}

function checkCollition3(){
    arrows.forEach(function(arrow){
     if(arrow.isTouching(jump)){
        console.log("arrow ouch!");
        gameOver();
    }
    })
}
  