function changeBorder(d) {
  stroke = d.style.stroke
  stroke.toggle("changed_border");
} 


function getPoints(d){
  point = d.getAttribute("data-value");
  paragraph= document.getElementById('p');
  paragraph.append(point);

}


var btn = document.getElementById('submit');
btn.addEventListener('click', func);



function func() {
  console.log(document.getElementById("x").value)
  console.log(document.getElementById("y").value)

}


function plotPoint() {
  x = document.getElementById("x").textContent
  x_c = Number(x)
  y= document.getElementById("y").textContent
  y_c = Number(y)
  x_pos = (50*(x_c-1)) + 100;
  y_pos = 350-(40*(y_c-1));
  new_point = "(" + x_pos +"," + y_pos + ")";
  console_log(new_point);

  frame = document.getElementById("frame");
  circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", x_pos);
  circle.setAttribute("cy",y_pos);
  circle.setAttribute("r", "4");
  circle.setAttribute("onclick", "getPoints(this)");
  
  frame.appendChild(circle);
  plotPoint();

}
