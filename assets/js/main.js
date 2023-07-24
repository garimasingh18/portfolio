var div = document.querySelector(".mouse-move");
div.addEventListener("mousemove", function (e) {
  x = e.offsetX;
  y = e.offsetY;
  div.style.backgroundImage = `radial-gradient(
          600px at ${x}px ${y}px,
          rgba(29, 78, 216, 0.25),
          transparent 80%
        )`;
});

function makeActive(e) {
  console.log(e);
  var previous = document.getElementsByClassName("active");
  if (previous.length > 0) {
    previous[0].className = previous[0].className.replace(" active", "");
  }
  e.className += " active";
}
