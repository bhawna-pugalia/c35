var dog,happyDog,database,foodS,foodStock

function preload()
{
  dogImg=loadImage("images/dogImg.png")
  dogImg1=loadImage("images/dogImg1.png")
}

function setup() {
  database=firebase.database()
  createCanvas(500, 500);
  dog=createSprite(200,250,20,20)
dog.scale=0.2
dog.addImage(dogImg1)
  
  foodStock=database.ref('Food')
  foodStock.on("value",readStock);
  
}


function draw() {  
  background(46, 139, 87)

if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(dogImg)
}
  drawSprites();
  textSize(20);
  fill("black")
  text("Food Remaining: "+foodS,170,150)
  text("Note:Press Up Arrow to feed the doggo milk",10,20);


  
}
function readStock(data){
  foodS=data.val()
}
function writeStock(x){
  if(x<0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
}

