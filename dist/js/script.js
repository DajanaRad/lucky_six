const balls = document.querySelectorAll(".balls div");

const colors = [
  "#ac05fa",
  "#faef16",
  "#0d0d0d",
  "#4d0b0b",
  "#07912a",
  "#f58014",
  "#c90616",
  "#0535f5"
];

balls.forEach(
  (element, index) =>
    (element.style.background = `radial-gradient(circle at 10px 10px, ${
      colors[index]
    }, #000)`)
);
