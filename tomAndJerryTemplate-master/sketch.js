var mouse, mouseAnimation, mouseHappyImg, mouseStartingImg;
var cat, catAnimation, catHappyImg, catStartingImg;
var garden, gardenImg;
var gameState = "start";

function preload() {
    gardenImg = loadImage("images/garden.png");
    
    catAnimation = loadAnimation("images/cat2.png", "images/cat3.png");
    catHappyImg = loadImage("images/cat4.png");
    catStartingImg = loadImage("images/cat1.png");

    mouseAnimation = loadAnimation("images/mouse2.png", "images/mouse3.png");
    mouseHappyImg = loadImage("images/mouse4.png");
    mouseStartingImg = loadImage("images/mouse1.png");
}

function setup(){
    createCanvas(1000,800);
    
    garden = createSprite(500, 400);
    garden.addImage(gardenImg);
    
    cat = createSprite(870, 650);
    cat.addImage("sittingCat", catStartingImg);
    cat.scale = 0.13;
    
    mouse = createSprite(100, 650);
    mouse.addImage("sittingMouse", mouseStartingImg);
    mouse.scale = 0.1;
}

function draw() {
    background(255);
    
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
       gameState = "end";
    }

    if (gameState === "end"){
        cat.addImage("happyCat", catHappyImg);
        mouse.addImage("happyMouse", mouseHappyImg);
        cat.changeImage("happyCat");
        mouse.changeImage("happyMouse");
        cat.velocityX = 0;
        cat.x = 175;
    }
   
    if(gameState === "start"){
        if(keyWentDown("left")){
        keyPressed()
    }
}

    drawSprites();
}


function keyPressed(){
    cat.addAnimation("catWalking", catAnimation);
    mouse.addAnimation("teasing", mouseAnimation);
    cat.changeAnimation("catWalking");
    mouse.changeAnimation("teasing");
    cat.velocityX = -5;
}
