var canvas = document.getElementById('mainGame');
var ctx = canvas.getContext('2d');


///////////////////////////////////////////
////////                           ////////
////////          CLASSES          ////////
////////                           ////////
///////////////////////////////////////////

////////////////////////////
//////// MOUNTAINS  ////////
////////////////////////////

function Board(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = "assets/bg/rocks_1.png"


    this.img.onload = function(){
        this.draw();
    }.bind(this);

    this.move = function(){
        this.x = this.x-3;
        if(this.x < -canvas.width) this.x = 0;
    };

    this.draw = function(){
        this.move();
        ctx.drawImage(this.img, this.x,this.y, this.width,this.height);
        ctx.drawImage(this.img,this.x + canvas.width,this.y,this.width,this.height);
    };
} 

function Board2(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = "assets/bg/rocks_2.png"
    this.distance = 0;
    this.recorded = Math.floor(frames / 60)
    this.score = 0;
    this.music = new Audio();
    this.music.src = "assets/bg/Viking.mp3";
    this.distance = 0;

    this.img.onload = function(){
        this.draw();
    }.bind(this);

    this.move = function(){
        this.x = this.x -4;
        if(this.x < -canvas.width) this.x = 0;
    };

    this.draw = function(){
        this.move();
        ctx.drawImage(this.img, this.x,this.y, this.width,this.height);
        ctx.drawImage(this.img,this.x + canvas.width,this.y,this.width,this.height);
    };

    this.drawScore = function(){
        this.score = "Distance : " + Math.floor(frames / 60);
        this.coinScore = "Coins : " + coinsCollection;

        if (Math.floor(frames / 60)){
            this.distance = this.distance + 1;
        }

        ctx.font = "50px PR Viking";
        ctx.fillStyle = "Gray";
        ctx.fillText(this.score,60, this.y+50);
        ctx.fillText(this.coinScore,660, this.y+50);
};
} 

////////////////////////////
////////   CLOUDS   ////////
////////////////////////////

function Clouds1(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = "assets/bg/clouds_1.png"


    this.img.onload = function(){
        this.draw();
    }.bind(this);

    this.move = function(){
        this.x = this.x -2;
        if(this.x < -canvas.width) this.x = 0;
    };

    this.draw = function(){
        this.move();
        ctx.drawImage(this.img, this.x,this.y, this.width,this.height);
        ctx.drawImage(this.img,this.x + canvas.width,this.y,this.width,this.height);
    };
} 

function Clouds2(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = "assets/bg/clouds_2.png"


    this.img.onload = function(){
        this.draw();
    }.bind(this);

    this.move = function(){
        this.x = this.x -1;
        if(this.x < -canvas.width) this.x = 0;
    };

    this.draw = function(){
        this.move();
        ctx.drawImage(this.img, this.x,this.y, this.width,this.height);
        ctx.drawImage(this.img,this.x + canvas.width,this.y,this.width,this.height);
    };
} 

////////////////////////////
////////    SKY     ////////
////////////////////////////

function Sky(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = "assets/bg/sky.png"

    this.img.onload = function(){
        this.draw();
    }.bind(this);

    this.draw = function(){
        ctx.drawImage(this.img, this.x,this.y, this.width,this.height);
    };
    this.delete = function(){
        ctx.clearRect(0,0,canvas.width, canvas.height);
    };
} 
function Sky2(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = "assets/bg/sky2.png"

    this.img.onload = function(){
        this.draw();
    }.bind(this);

    this.draw = function(){
        ctx.drawImage(this.img, this.x,this.y, this.width,this.height);
    };
} 
function Sky3(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = "assets/bg/sky3.png"

    this.img.onload = function(){
        this.draw();
    }.bind(this);

    this.draw = function(){
        ctx.drawImage(this.img, this.x,this.y, this.width,this.height);
    };
} 

////////////////////////////
////////    SCORE   ////////
////////////////////////////

function Score(){
    
}

////////////////////////////
//////// CHARACTERS ////////
////////////////////////////

////////////////////////////
////////    HERO    ////////
////////////////////////////

function Viking(){
    this.x = 0;
    this.y = 0;
    this.z = 270
    this.w = 150
    this.width = 245;
    this.height = 216;
    
    this.animate = function(){

        if(this.z < 270){   
        this.z += 4
    }
        ctx.drawImage(this.img,this.width*this.x,this.height*this.y,this.width,this.height,this.w,this.z,this.width,this.height);
        
        if (frames % 4 === 0){
        this.x++;
    }
        if(this.x>2){
          this.x=0;
          this.y++;
        }
        if(this.y>4){
          this.y=0;
        }
    }
    this.img = document.createElement("img");
    this.img.src = "assets/bg/character4.png";

    this.jumpViking = function(){
        if(viking.z === 270){
        viking.z -= 2000;
        jump.colY = 100;
    }else{
        viking.z = viking.z;
        }
    }

 }

 function Jump(){
    this.x = 150;
    this.y = 100;
    this.colX = 150;
    this.colY = 270;
    this.width = 245;
    this.height = 216;
    this.img = new Image();
    this.img.src = "assets/bg/images/para_spritesheet/01.png";

    this.img.onload = function(){
        this.draw();
    }.bind(this);

    this.draw = function(){
        this.y = this.y + 4
        this.colY = this.colY + 4
        ctx.drawImage(this.img, this.x,this.y, this.width,this.height);
        if (this.y === 272){
            console.log("ya!")
            viking.z = 270;
            this.y = 100;
            this.colY = 270;
    }

    
    }

} 

 /*
function Viking(){
    this.x = 0;
    this.y = 0;
    this.z = 270
    this.w = 150
    this.width = 245;
    this.height = 216;
    
    this.animate = function(){

        if(this.z < 270){   
        this.z += 4
    }
        ctx.drawImage(this.img,this.width*this.x,this.height*this.y,this.width,this.height,this.w,this.z,this.width,this.height);
        
        if (frames % 4 === 0){
        this.x++;
    }
        if(this.x>2){
          this.x=0;
          this.y++;
        }
        if(this.y>4){
          this.y=0;
        }
    }
    this.img = document.createElement("img");
    this.img.src = "assets/bg/character4.png";

    this.jumpViking = function(){
        if(viking.z === 270){
        viking.z -= 200;
    }else{
        viking.z = viking.z
        }
    }
 }

 */


////////////////////////////
////////    ENEMY   ////////
////////////////////////////

function Enemy(){
    this.x = canvas.width;
    this.y = 440;
    this.width = 75;
    this.height = 50;
    this.img = new Image();
    this.img.src = "assets/bg/chocolate.png";

    this.img.onload = function(){
        this.draw();
    }.bind(this);

    this.draw = function(){
        this.x = this.x - 7;
        ctx.drawImage(this.img, this.x,this.y, this.width,this.height);
    }

    this.isTouching = function(viking){
        return ((this.x - 50) < (viking.w / 2) + (viking.width / 2)) &&
               ((this.x - 50) + (this.width / 2) > (viking.w / 2)) &&
               (this.y < viking.z + viking.height) &&
               (this.y + this.height > viking.z);
    };

} 

function Arrow(){
    this.x = canvas.width;
    this.y = 120;
    this.width = 154;
    this.height = 34;
    this.img = new Image();
    this.img.src = "assets/bg/arrow.png";

    this.img.onload = function(){
        this.draw();
    }.bind(this);

    this.draw = function(){
        this.x = this.x - 12;
        this.y = this.y + .2;
        ctx.drawImage(this.img, this.x,this.y, this.width,this.height);
    }

    this.isTouching = function(jump){
        return (this.x < jump.colX + jump.width) &&
               (this.x + this.width > jump.colX) &&
               (this.y < (jump.colY + 20) + (jump.height / 2)) &&
               (this.y + (this.height / 2) > (jump.colY + 20));
    };

} 

////////////////////////////
////////  POWER UPS ////////
////////////////////////////

function Coin(){
    this.x = 0;
    this.y = 0;
    this.z = 150;
    this.w = canvas.width;
    this.width = 41;
    this.height = 41;
    
    this.animate = function(){

        this.w = this.w - 6;

        ctx.drawImage(this.img,this.width*this.x,this.height*this.y,this.width,this.height,this.w,this.z,this.width,this.height);
        
        if (frames % 4 === 0){
        this.x++;
    }
        if(this.x>2){
          this.x=0;
          this.y++;
        }
        if(this.y>2){
          this.y=0;
        }
    }

    this.img = document.createElement("img");
    this.img.src = "assets/36002.png";

    this.isTouching = function(jump){
        return (this.w < (jump.colX + 100) + jump.width) &&
               (this.w + (this.width / 2) > (jump.colX - 100)) &&
               (this.z < jump.colY + jump.height) &&
               (this.z + (this.height / 2) > jump.colY);
    };



}

///////////////////////////////////////////
////////                           ////////
////////         VARIABLES         ////////
////////                           ////////
///////////////////////////////////////////

var board = new Board();
var board2 = new Board2();
var sky = new Sky();
var sky2 = new Sky2();
var sky3 = new Sky3();
var clouds1 = new Clouds1();
var clouds2 = new Clouds2();
var viking = new Viking();
var jump = new Jump();
var coins = [];
var enemies = [];
var arrows = [];
var intervalo; 
var frames = 0;
var coinsCollection = 0;

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
    if(Math.floor(frames / 60) >= 80){
        sky2.draw();
    }
    if(Math.floor(frames / 60) >= 160){
        sky3.draw();
    }
    if(Math.floor(frames / 60) >= 240){
        sky2.draw();
    }
    if(Math.floor(frames / 60) >= 320){
        sky.draw();
    }

    clouds1.draw();
    clouds2.draw();
    board.draw();
    board2.draw();
    board2.drawScore();
    drawEnemies();
    drawArrows();

/*
    viking.animate();
    jump.draw();
*/

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


///////////////////////////////////////////
////////                           ////////
////////        START GAME         ////////
////////                           ////////
///////////////////////////////////////////

document.getElementById("start-button").onclick = function() {
    start();
  };

document.getElementById('pause-button').onclick = function(){
    stop();
}

addEventListener('keydown', function(e){
    if(e.keyCode === 32){
        viking.jumpViking()
    }
});
