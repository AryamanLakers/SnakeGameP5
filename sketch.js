let object;
let flag = 0;
let scl = 30;
let prev = "ArrowRight";
let foodObject;
let count = 0;
function setup() {
  createCanvas(600, 600);
  foodObject = createVector(
    floor(random(width / scl)) * scl,
    floor(random(height / scl)) * scl
  );
  object = new Snake();
  frameRate(10);
}

function draw() {
  background(51);
  object.update();
  object.show();
  object.food(foodObject);
}

function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.v = [];

  this.update = function () {
    
    for (var i = 0; i < this.v.length; i++) {
      if (this.x === this.v[i].x && this.y === this.v[i].y) {
        object = new Snake();
        alert(count);
        flag = 0;
      }
    }
    
    if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
      flag = 0;
      object = new Snake();
      alert(count);
    } 
    
    else if (flag === 1) {
      if (this.total === this.v.length) {
        for (var i = 0; i < this.v.length - 1; i++) {
          this.v[i] = this.v[i + 1];
        }
      }
    this.v[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    if (this.x === foodObject.x && this.y === foodObject.y) {
        count++;
        this.total++;
        foodObject = createVector(
          floor(random(width / scl)) * scl,
          floor(random(height / scl)) * scl
        );
      }
    }
  };
  
  
  this.show = function () {
    for (var i = 0; i < this.v.length; i++) {
      fill(100, 30, 85);
      rect(this.v[i].x, this.v[i].y, scl, scl);
    }
    fill(255);
    rect(this.x, this.y, scl, scl);
  };
  
  
  this.food = function (foodi) {
    fill(100, 56, 125);
    rect(foodi.x, foodi.y, scl, scl);
  };
  
  
}


function keyPressed() {
  if (key === "ArrowLeft" && prev != "ArrowRight") {
    prev = "ArrowLeft";
    object.xspeed = -1;
    object.yspeed = 0;
  } else if (key === "ArrowRight" && prev != "ArrowLeft") {
    prev = "ArrowRight";
    flag = 1;
    object.xspeed = 1;
    object.yspeed = 0;
  } else if (key === "ArrowUp" && prev != "ArrowDown") {
    prev = "ArrowUp";
    object.xspeed = 0;
    object.yspeed = -1;
  } else if (key === "ArrowDown" && prev != "ArrowUp") {
    prev = "ArrowDown";
    object.xspeed = 0;
    object.yspeed = 1;
  }
}
