function setup() {
  createCanvas(700,600);
}

function draw() {
  var counter = 0
  var x = 50;
  var y = 50
  background(100);
  fill(250);

  while (counter < 8) {
    if (counter % 2 === 0) {
      fill('black')
    } else {
      fill('white')
    }
    rect(counter * 50, y, 50,50)
    counter = counter + 1
  }
  counter = 0
  while (counter < 8) {
    if (counter % 2 === 0) {
      fill('white')
    } else {
      fill('black')
    }    
    rect(counter * 50, y + 50, 50,50)
    counter = counter + 1
  } 
  counter = 0
  while (counter < 8) {
    if (counter % 2 === 0) {
      fill('black')
    } else {
      fill('white')
    }    
    rect(counter * 50, y + 100, 50,50)
    counter = counter + 1
  }   
  counter = 0
  while (counter < 8) {
    if (counter % 2 === 0) {
      fill("white")
    } else {
      fill("black")
    }
    rect(counter * 50, y + 150, 50,50)
    counter = counter + 1
  } 
counter = 0
  while (counter < 8) {
    if (counter % 2 === 0) {
      fill("black")
    } else {
     fill("white")
    }
    rect(counter * 50, y + 200, 50,50)
    counter = counter + 1
  } 
  counter = 0
  while (counter < 8) {
    if(counter % 2 === 0) {
      fill("white")
    } else {
      fill("black")
    }
    rect(counter * 50, y + 250, 50,50)
    counter = counter + 1
  } 
 counter = 0
  while (counter < 8) {
    if(counter % 2 === 0) {
      fill("black")
    } else {
      fill("white")
    }
    rect(counter * 50, y + 300, 50,50)
    counter = counter + 1
  }  
   counter = 0
  while (counter < 8) { 
    if(counter % 2 === 0) {
    fill("white")
  } else {
    fill("black")
  }
    rect(counter * 50, y + 350, 50,50)
    counter = counter + 1
  }
  while (counter < 8) {
    rect(counter * 50, y + 400, 50,50)
    counter = counter + 1
  }
}
/*

while(x < width) {
  ellipse(x, y, 40, 40)
  x +=50

  ellipse(x, y, 40, 40);
  x += 50;
  
  ellipse(x, y, 40, 40);
  x += 50;
  
  ellipse(x, y, 40, 40);
  x +=50
  
  ellipse(x, y, 40, 40);
  x +=50;
  
  y += 50
  x-= 200
  }

*/