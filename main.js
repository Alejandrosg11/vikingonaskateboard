var canvas = document.getElementById('mainGame');
var ctx = canvas.getContext('2d');


///////////////////////////////////////////
////////                           ////////
////////          Classes          ////////
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
        this.score = "Score - " + Math.floor(frames / 60);
        ctx.font = "50px Lucida Console";
        ctx.fillStyle = "Gray";
        ctx.fillText(this.score,300, this.y+50);
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
//////// CHARACTERS ////////
////////////////////////////

////////////////////////////
////////    HERO    ////////
////////////////////////////

function Viking(){
    this.x = 0;
    this.y = 0;
    this.z = 270
    this.width = 245;
    this.height = 216;
    
    this.animate = function(){

        ctx.drawImage(this.img,this.width*this.x,this.height*this.y,this.width,this.height,150,this.z,this.width,this.height);
        
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
    
    this.isTouching = function(enemy){
        return (this.x < enemy.x + enemy.width) &&
               (this.x + this.width > enemy.x) &&
               (this.y < enemy.y + enemy.height) &&
               (this.y + this.height > enemy.y);
    };
}

function jumpViking(){
    viking.z -= 120;
    if (frames % 400 === 0){
        viking.z = 270;
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
var enemies = [];
var intervalo;
var frames = 0;


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

function checkCollition(){
    enemies.forEach(function(enemy){
        if(viking.isTouching(enemy)){
            console.log("ouch!")
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
    deleteEnemies();
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
    clouds1.draw();
    clouds2.draw();
    board.draw();
    board2.draw();
    board2.drawScore();
    drawEnemies();
    viking.animate();
    checkCollition();
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
        jumpViking()    
    }
});
