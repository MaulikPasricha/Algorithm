var movingRect, fixedSprite

function setup(){
    createCanvas(500, 500);

    movingRect = createSprite(350, 300, 50, 100);
    movingRect.shapeColor = "red"
    fixedSprite = createSprite(250,250,50,50);
    fixedSprite.shapeColor = "blue"
}

function draw(){
    background(0);
    drawSprites();
    movingRect.x = mouseX
    movingRect.y = mouseY
}