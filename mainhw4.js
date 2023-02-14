function changeBorder() {
  var element = document.body;
  element.classList.toggle("changed_border");
} 

function getPoint(d){
    alert(d.getAttribute("data-value"));
}