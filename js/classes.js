var canvas = document.getElementById('mainGame');
var ctx = canvas.getContext('2d');


///////////////////////////////////////////
////////                           ////////
////////          CLASSES          ////////
////////                           ////////
///////////////////////////////////////////

////////////////////////////
////////    FLOOR   ////////
////////////////////////////

////////////////////////////
//////// MOUNTAINS  ////////
////////////////////////////

function Floor(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = "assets/bg/floor.png"


    this.img.onload = function(){
        this.draw();
    }.bind(this);

    this.move = function(){
        this.x = this.x-7;
        if(this.x < -canvas.width) this.x = 0;
    };

    this.draw = function(){
        this.move();
        ctx.drawImage(this.img, this.x,this.y, this.width,this.height);
        ctx.drawImage(this.img,this.x + canvas.width,this.y,this.width,this.height);
    };
} 

////////////////////////////
//////// MOUNTAIN 1 ////////
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

////////////////////////////
//////// MOUNTAIN 2 ////////
////////////////////////////

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
        return ((this.x - 100) < (viking.w / 2) + (viking.width / 2)) &&
               ((this.x - 100) + (this.width / 2) > (viking.w / 2)) &&
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
               (this.x > (jump.colX + 20)) &&
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
