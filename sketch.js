var bgopImg
var bg
var standImg , stand ,sitattack , jumpattack , standattack
var play = false
var x= 0
function preload() {
  bgopImg = loadAnimation("./bgimages/bg1.png","./bgimages/bg2.png","./bgimages/bg3.png","./bgimages/bg4.png")
  standImg = loadAnimation("./boss1/stand.png","./boss1/stand1.png","./boss1/stand2.png","./boss1/stand4.png")
  standattack = loadAnimation("./boss1/standattack.png","./boss1/standattack1.png","./boss1/standattack2.png","./boss1/standattack3.png",
  "./boss1/standattack4.png","./boss1/standattack5.png","./boss1/standattack6.png","./boss1/standattack7.png","./boss1/standattack8.png",
  "./boss1/standattack9.png","./boss1/standattack10.png","./boss1/standattack11.png","./boss1/standattck12.png")
  standattack.looping = false
  sitattack = loadAnimation("./boss1/sitattack.png","./boss1/sitattack1.png","./boss1/sitattack2.png","./boss1/sitattack3.png","./boss1/sitattack5.png",
  "./boss1/sitattack6.png","./boss1/sitattck7.png")
  jumpattack = loadAnimation("./boss1/jumpattack.png","./boss1/jumpattack1.png","./boss1/jumpattack2.png","./boss1/jumpattack3.png",
  "./boss1/jumpattack4.png","./boss1/jumpattack5.png","./boss1/jumpattack6.png","./boss1/jumpattack7.png","./boss1/jumpattack8.png",
  "./boss1/jumpattack9.png","./boss1/jumpattack10.png","./boss1/jumpattack11.png","./boss1/jumpattack12.png","./boss1/jumpattack13.png",
  "./boss1/jumpattack14.png","./boss1/jumpattack15.png","./boss1/jumpattack16.png",)
 
 jumpattack.playing = true
 sitattack.playing = true 
 standattack.playing = true
 jumpattack.looping = false
 //sitattack.looping = false
}

function setup() {
  createCanvas(windowWidth,windowHeight);
 bg =  createSprite(width/2,height/2);
 bg.addAnimation("bg",bgopImg)
 bg.scale = 2

 boss = createSprite(width/2,height/2)
 boss.addAnimation("stand",standImg)
 boss.addAnimation("attack",standattack)
 boss.addAnimation("sitattack",sitattack)
 boss.addAnimation("jumpattack",jumpattack)
 boss.scale = 0.8
 standImg.framedelay = 20
 standattack.framedelay = 20 
 jumpattack.framedelay = 20 
 sitattack.framedelay = 20 
 ground = createSprite(width/2, height - 75 , width , 20)
 ground.visible = false 
 boss.debug = true
 boss.setCollider("rectangle",-20,+50,200,250)
  frameRate(80)
}

function draw() {
  background(0); 
  boss.velocityY = boss.velocityY + 0.5
  boss.collide(ground)
  drawSprites();
if (keyDown("enter")) {
  boss.changeAnimation("attack")
}

if (keyDown("space")) {
  boss.changeAnimation("sitattack")
  console.log("hellow")
}
if (keyDown("shift")) {
  boss.changeAnimation("jumpattack")
}
}
