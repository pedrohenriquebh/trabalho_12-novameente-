var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg=loadImage("path.png");
 boyImg=loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG",
 "jake5.png",);
}

function setup(){
  
  createCanvas(400,400);
 //crie um sprite para a pista 
 path=createSprite (200,200,200,800);
 path.addImage("path",pathImg)
//adicione uma imagem para a pista

//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.scale=1.2;

//crie um sprite de menino
boy = createSprite(200,350,30,30);
//adicione uma animação de corrida para ele
boy.addAnimation("boy",boyImg)
boy.scale=0.8; 
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);

leftBoundary.visible = false
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false
}

function draw() {
  background(0);
  path.velocityY = 4;
  
 
  
  
  // mover o menino com o mouse usando mouseX
  boy.bounceOff(leftBoundary)
  boy.bounceOff(rightBoundary)
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
