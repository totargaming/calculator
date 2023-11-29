gsap.from(".container", { duration: 2, opacity: 0, stagger: 0.5, y: 500 });
let btns = document.querySelectorAll(".num-button");
let allBtns = document.querySelectorAll(".button");
let resultBox = document.querySelector("#result-box");
let clearBtn = document.querySelector("#clear");
let totalBtn = document.querySelector("#total");
let btnSpread = [...btns];
let allBtnSpread = [...allBtns];

btnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {
    if (resultBox.innerHTML == "0") {
      resultBox.innerHTML = "";
    }

    let value = btns[i].innerHTML;
    resultBox.innerHTML += value;
  });
});
document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (
    (key >= "0" && key <= "9") ||
    key == "+" ||
    key == "-" ||
    key == "*" ||
    key == "/" ||
    key == "%"
  ) {
    if (resultBox.innerHTML == "0") {
      resultBox.innerHTML = "";
    }
    resultBox.innerHTML += key;
  }
  if (key == "Enter") {
    if (resultBox.innerHTML == "0") {
      resultBox.innerHTML = "";
    }
    if (resultBox.innerHTML) {
      try {
        resultBox.innerHTML = eval(resultBox.innerHTML);
      } catch (error) {
        resultBox.innerHTML = "Error";
      }
    }
  }
  if (key === "Backspace") {
    resultBox.innerHTML = resultBox.innerHTML.slice(0, -1);
    if (resultBox.innerHTML === "") {
      resultBox.innerHTML = "0";
    }
  }
});
totalBtn.addEventListener("click", () => {
  if (resultBox.innerHTML == "0") {
    resultBox.innerHTML = "";
  }
  if (resultBox.innerHTML) {
    try {
      resultBox.innerHTML = eval(resultBox.innerHTML);
    } catch (error) {
      resultBox.innerHTML = "Error";
    }
  }
});

clearBtn.addEventListener("click", () => {
  resultBox.innerHTML = "0";
});

allBtnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {
    let element = allBtns[i];
    element.style.boxShadow =
      "inset -6px -6px 16px 0 rgba(255,255,255, .5), inset 6px 6px 16px 0 rgba(209, 205, 199, .05)";
    setTimeout(function () {
      element.style.boxShadow =
        "6px 6px 16px 0 rgba(209, 205, 199, .05), -6px -6px 16px 0 rgba(255,255,255, .5)";
    }, 300);
  });
});
