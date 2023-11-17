const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");

button1.addEventListener("click", function () {
  button1.classList.add("btn-active");
  button1.classList.remove("btn-inactive");
  button2.classList.remove("btn-active");
  button2.classList.add("btn-inactive");
  button3.classList.remove("btn-active");
  button3.classList.add("btn-inactive");
  text1.classList.remove("d-none");
  text2.classList.add("d-none");
  text3.classList.add("d-none");
});

button2.addEventListener("click", function () {
    button2.classList.add("btn-active");
    button2.classList.remove("btn-inactive");
    button1.classList.remove("btn-active");
    button1.classList.add("btn-inactive");
    button3.classList.remove("btn-active");
    button3.classList.add("btn-inactive");
    text2.classList.remove("d-none");
    text1.classList.add("d-none");
    text3.classList.add("d-none");
  });
  button3.addEventListener("click", function () {
    button3.classList.add("btn-active");
    button3.classList.remove("btn-inactive");
    button2.classList.remove("btn-active");
    button2.classList.add("btn-inactive");
    button1.classList.remove("btn-active");
    button1.classList.add("btn-inactive");
    text1.classList.remove("d-none");
    text2.classList.add("d-none");
    text3.classList.add("d-none");
  });