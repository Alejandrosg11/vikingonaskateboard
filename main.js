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
    this.score = 0;



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
        viking.z -= 200;
    }else{
        viking.z = viking.z
        }
    }
 }

////////////////////////////
////////    ENEMY   ////////
////////////////////////////

function Enemy(){
    this.x = canvas.width;
    this.y = 380;
    this.width = 100;
    this.height = 100;
    this.img = new Image();
    this.img.src = "assets/bg/enemy.png";

    this.img.onload = function(){
        this.draw();
    }.bind(this);

    this.draw = function(){
        this.x = this.x - 5;
        ctx.drawImage(this.img, this.x,this.y, this.width,this.height);
    }

    this.isTouching = function(viking){
        return (this.x < viking.w + viking.width) &&
               (this.x + this.width > viking.w) &&
               (this.y < viking.z + viking.height) &&
               (this.y + this.height > viking.z);
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

    this.isTouching = function(viking){
        return (this.w < viking.w + viking.width) &&
               (this.w + this.width > viking.w) &&
               (this.z < viking.z + viking.height) &&
               (this.z + this.height > viking.z);
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
var coins = [];
var enemies = [];
var intervalo; 
var frames = 0;
var coinsCollection = 0;

///////////////////////////////////////////
////////                           ////////
////////       AUX FUNCTIONS       ////////
////////                           ////////
///////////////////////////////////////////

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
     }
    })
}

function checkCollition2(){
    coins.forEach(function(coin){
     if(coin.isTouching(viking)){
        coin.z = -50;
        coinsCollection = coinsCollection + 1;
        console.log(coinsCollection)
    }
    })
}

  
///////////////////////////////////////////
////////                           ////////
////////      MAIN FUNCTIONS       ////////
////////                           ////////
///////////////////////////////////////////

function gravedad (){
    var grav = 0.8;
    var val_reb = 0;
}

function update(){
    generateEnemies();
    generateCoins();
    deleteEnemies();
    deleteCoins();
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
    viking.animate();
    drawCoins();
    checkCollition();
    checkCollition2()

}

function start(){
    if(intervalo > 0) return;
    intervalo = setInterval(function(){
        update();
    }, 1000/60);
    board2.score = 0;
    frames = 0;
}

function stop(){
    clearInterval(intervalo);
    intervalo = 0;
    frames = frames;
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
