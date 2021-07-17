

let x_down,y_down,x_up,y_up,count=0;

let canvasElem = document.getElementById("canvas");
const context = canvasElem.getContext('2d');

function getMousePosition(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
   
    console.log("Coordinate x: " + x, 
                "Coordinate y: " + y);
                let arr=[];
                arr.push(x);
                arr.push(y);
                return arr;
           
                
}



  
canvasElem.addEventListener("mousedown", function(e)
{
    let brr=[];
   brr =getMousePosition(canvasElem, e);
  
   x_down = brr[0];
   y_down = brr[1];
   
});

canvasElem.addEventListener("mouseup", function(e)
{
    let brr=[];
    brr =getMousePosition(canvasElem, e);
    x_up = brr[0];
    y_up = brr[1];

    draw();

});

function draw(){
   if(count==0)
   {
       context.beginPath();
       context.moveTo(x_down,y_down);
   }
  
    context.strokeStyle = 'black'; // color of the line
    context.lineTo(x_up,y_up); // used to create a pointer based on x and y  
    context.stroke();
    count++;
    
    if(count===3){
    
        context.closePath();
        Math.floor(Math.random()*16777215).toString(16)
        context.fillStyle = "#"+Math.floor(Math.random()*16777215).toString(16);
        context.fill(); 
        count=0;  
    }
}

document.getElementById('clear').addEventListener('click', function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }, false);



 