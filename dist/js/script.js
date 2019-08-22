"use strict";
const colorBalls = document.querySelectorAll(".balls div");

const start = document.querySelector("#start");
const firstFiveBalls = document.querySelectorAll(".fixed");
const firstFiveBallsP = document.querySelectorAll(".fixed p");
const balls = document.querySelectorAll(".main_div div div");
const ballsP = document.querySelectorAll(".main_div div div p");
const colors = [
  "#0d0d0d",
  "#ac05fa",
  "#faef16",
  "#faf9f5",
  "#07912a",
  "#f58014",
  "#c90616",
  "#0535f5"
];

const randomColor = num => Math.floor(Math.random() * num + 1);
const randomNum = num => Math.floor(Math.random() * num + 1);
//ON THE BEGGINNING AL BALLS HAVE DIFERENT COLLOR

colorBalls.forEach(
  (element, index) =>
    (element.style.background = `radial-gradient(circle at 10px 10px, ${
      colors[index]
    }, #000)`)
);

//COLLOR BALLS CHANGES IN 1S COLOR UNTIL THE END WHEN EVERY BALL HAVE DIFERNET COLOR

function animationBalls() {
  const interval = setInterval(
    () =>
      colorBalls.forEach(
        element =>
          (element.style.background = `radial-gradient(circle at 10px 10px, ${
            colors[randomNum(8)]
          }, #2b2a25)`)
      ),
    1000
  );

  //AFTER 20 SEKUNDS COLORS STOPS CHANGING AND AGAIN THERE ARE ALL DIFERNET

  setTimeout(function() {
    clearInterval(interval);
    colorBalls.forEach(
      (element, index) =>
        (element.style.background = `radial-gradient(circle at 10px 10px, ${
          colors[index]
        }, #000)`)
    );
  }, 30000);
}
animationBalls();

// RANDOMLY CHOOSING NUMBERS FOR BALLS WHICH WILL BE DISPLAYED
var allNumbers = [];
const displayedNumbers = () => {
  for (let i = 0; i < 90; i++) {
    const num = randomNum(48);
    if (
      !allNumbers.some(element => element === num) &&
      allNumbers[34] === undefined
    ) {
      allNumbers.push(num);
    }
  }
};

//FUNCTION FOR CHECKING IF IN INPUTVALUES THERE ARE NOT AL DIFFERENT NUMBERS
function hasDuplicates(arr) {
  return arr.some(item => {
    return arr.indexOf(item) !== arr.lastIndexOf(item);
  });
}

//DISPLAY BALL ON THE SCREEN

const popBalls = () => {
  displayedNumbers();
  var inputValues = [];
  var inputs = document.querySelectorAll("input[name=num]");
  inputs.forEach(element => {
    inputValues.push(element.value);
  });

  // have to be 6 diferent numbers between 1 and 48 to execute function further
  if (
    !hasDuplicates(inputValues) &&
    !inputValues.some(element => element === 0 || element === "") &&
    !inputValues.some(num => num > 48)
  ) {
    //for first five balls
    firstFiveBalls.forEach((element, index) => {
      setTimeout(function() {
        firstFiveBallsP[index].innerText = allNumbers[index];
        element.style.background = `radial-gradient(circle at 10px 10px, ${
          colors[randomNum(8)]
        }, #000)`
          ? `radial-gradient(circle at 10px 10px, ${
              colors[randomNum(8)]
            }, #000)` ||
            `radial-gradient(circle at 10px 10px, ${
              colors[randomNum(8)]
            }, #000)`
          : `radial-gradient(circle at 10px 10px, ${
              colors[randomNum(8)]
            }, #000)` ||
            `radial-gradient(circle at 10px 10px, ${
              colors[randomNum(8)]
            }, #000)`;
      }, 2000 * index);
    });
    //for all the other balls
    balls.forEach((element, index) => {
      setTimeout(function() {
        ballsP[index].innerText = allNumbers[index + 5];
        element.style.background = `radial-gradient(circle at 10px 10px, ${
          colors[randomNum(8)]
        }, #000)`
          ? `radial-gradient(circle at 10px 10px, ${
              colors[randomNum(8)]
            }, #000)` ||
            `radial-gradient(circle at 10px 10px, ${
              colors[randomNum(8)]
            }, #000)`
          : `radial-gradient(circle at 10px 10px, ${
              colors[randomNum(8)]
            }, #000)` ||
            `radial-gradient(circle at 10px 10px, ${
              colors[randomNum(8)]
            }, #000)`;
      }, 2000 * (index + 5));
    });
  } else {
    alert("you have to choose 6 diferent numbers between 1 and 48");
  }
};
start.addEventListener("click", popBalls);
allNumbers = [];

//CHECKING HOW MUCH NUMBERS YOU GUESSED
// const guesedNumbers = inputValues.filter(element =>
//   allNumbers.includes(element)
// );
// console.log(guesedNumbers);

// function writeHtml(p, ball, index3) {
//   p[index3].innerText = allNumbers[index3 + 5];
//   ball.style.background = `radial-gradient(circle at 10px 10px, ${
//     colors[randomNum(8)]
//   }, #000)`
//     ? `radial-gradient(circle at 10px 10px, ${colors[randomNum(8)]}, #000)` ||
//       `radial-gradient(circle at 10px 10px, ${colors[randomNum(8)]}, #000)`
//     : `radial-gradient(circle at 10px 10px, ${colors[randomNum(8)]}, #000)` ||
//       `radial-gradient(circle at 10px 10px, ${colors[randomNum(8)]}, #000)`;
// }

//for all the other balls
// balls.forEach(function(element, index) {
//   const index1 = index;
//   console.log(index1);
//   setTimeout(writeHtml(element, balls, index1), 2000 * (index + 5));
// });
