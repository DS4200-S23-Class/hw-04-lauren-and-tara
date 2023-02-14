function changeBorder() {
  var element = document.body;
  element.classList.toggle("changed_border");
} 

function getPoint(d){
    x = alert(d.getAttribute("data-value"));
    return x
}

function plotPoint(x,y) {
  x_position = (50*(x-1)) + 100;
  y_position = 350-(40*(y-1));
  x_pos = x_position.toString();
  y_pos = y_position.toString();
  new_point = (x_pos, y_pos);
  return new_point;
  console_log(new_point);

  r
}

  //  var text = document.createTextNode("point");

   // paragraph.appendChild(text)


