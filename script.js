document.getElementById("gmaes").addEventListener("wheel", function (event) {
  if (event.deltaY !== 0) {
    this.scrollLeft += event.deltaY;
    event.preventDefault();
  }
});
