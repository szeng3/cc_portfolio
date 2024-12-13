function setup() {
    createCanvas(600,600);
    angleMode(DEGREES)
  }
  
  function draw() {
    background(255, 236, 184);
    
    //p rect
    noStroke();
    fill(102, 76, 150)
    rect(150,75,110,200)
    
        //sleeve
    fill(255, 236, 184)
    ellipse(140,100,60,100)
    
      //sleeve
    fill(255, 236, 184)
    ellipse(270,100,60,100)
    
      //neck
    fill(255, 236, 184)
    ellipse(203,70,100,40)
    
       //sun
    fill(255, 161,101)
    ellipse(203,200,40,40)
    
     //shine
    push()
    translate(203, 200)
    rotate(180)
    fill(255, 161,101)
    triangle(30, 5, 35, 15, 25, 15)
    pop()
    
       //shine
    push()
    translate(203, 200)
    rotate(100)
    fill(255, 161,101)
    triangle(30, 5, 35, 15, 25, 15)
    pop()
    
     //shine
    push()
    translate(203, 200)
    rotate(20)
    fill(255, 161,101)
    triangle(30, 5, 35, 15, 25, 15)
    pop()
  
       //shine
    push()
    translate(203, 200)
    rotate(320)
    fill(255, 161,101)
    triangle(30, 5, 35, 15, 25, 15)
    pop()
    
        //shine
    push()
    translate(203, 200)
    rotate(260)
    fill(255, 161,101)
    triangle(30, 5, 35, 15, 25, 15)
    pop()
    
    // background
    // bench
    fill(117, 88, 54)
    rect(105,270,200,20)
    
    // bench leg
    fill(117, 88, 54)
    rect(120,270,20,90)
  
    // bench leg
    fill(117, 88, 54)
    rect(265,270,20,90)
    
  }