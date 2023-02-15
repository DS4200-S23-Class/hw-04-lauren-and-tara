function changeBorder(id) {
  var element = document.getElementById(id);
  element.classList.toggle("changed_border");
} 


function getPoints(d){
  point = d.getAttribute("data-value");
  paragraph= document.getElementById('p');
  paragraph.append(point);

}

function plotPoint(x,y) {
  x_pos = (50*(x-1)) + 100;
  y_pos = 350-(40*(y-1));
  new_point = "(" + x_pos +"," + y_pos + ")";
  return new_point;
  console_log(new_point);

  var radius = 4;
  var center_x = x_pos;
  var center_y = y_pos;

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  function drawCircle(){
    ctx.beginPath();
    ctx.arc(center_x, center_y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}


}


function addBorder(id,x1,x2) {
    let element = document.getElementbyID(id)
    let xcoord = ele.getAttribute("cx");
    let ycoord = ele.getAttribute("cy");
    let x_position = (50*(x-1)) + 100;
    let y_position = 350-(40*(y-1));

    if (document.getElementById(id).style.fill == "lightseagreen") {
      document.getElementById(id).style.fill ="none";
    }

    if (document.getElementById(id).style.fill == "red") {
      document.getElementById(id).setAttribute("stroke-width", "3px");
      document.getElementById("p").innerHTML = "Select Point Coordinates:" + "(" + x_position + "," + y_position + ")";
    } ;



}
