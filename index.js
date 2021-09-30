const btn = document.querySelector("#btn");
const car = document.querySelector(".car");
const start = document.querySelector(".start");
const end = document.querySelector(".end");
const dest = document.querySelector(".dest");
const point = document.querySelector(".point");
const submitbtn = document.querySelector(".submit");
const loc = document.querySelector(".loc");
const nav = document.querySelector("nav");
const bar = document.querySelector(".bar");
const navbar = document.querySelector(".nav-bar");
function round() {
  btn.style.left = "0px";
  car.innerHTML = "PICK ZOOMCAR FROM";
  start.innerHTML = "START TIME";
  end.innerHTML = "END TIME";
  point.style.visibility = "visible";
  dest.classList.remove("desti");
  submitbtn.classList.remove("whi");
}
function oneway() {
  car.innerHTML = "SELECT YOUR STARTING POINT";
  btn.style.left = "110px";
  start.innerHTML = "PICK UP TIME";
  end.innerHTML = "RETURN TIME";
  point.style.visibility = "hidden";
  dest.classList.add("desti");
  submitbtn.classList.add("whi");
  loc.placeholder = "";
}
const showBar = () => {
  navbar.classList.toggle("show");
  bar.classList.toggle("hide");
};
bar.addEventListener("click", showBar);
