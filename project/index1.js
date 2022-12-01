var numberOfDrumButtons = document.querySelectorAll(".drum").length;
let res = [];
let isRecStart = false;
let keys = ["b", "g", "n", "m", "f", "o", "v"];
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  }); 
}

document.addEventListener("keypress", function (event) {
  if(event.key == 'r')
    isRecStart = true
  if (event.key == 't'){
    isRecStart = false;
    if (res.length){
      playALL();
    }
  }
  if (keys.includes(event.key)) {
    if(isRecStart)
      res.push(event.key);
    makeSound(event.key);
    buttonAnimation(event.key);
  }
});

function playALL(){
  let i = 0;
  console.log(res);
  let b = setInterval(function(){
    if(i==res.length)
      clearInterval(b);
    makeSound(res[i]);
    i+=1;
  },500);
}

function makeSound(key) {
  switch (key) {
    case "b":
      var tom1 = new Audio("./B.wav");
      tom1.play();
      break;
     

    case "g":
      var tom2 = new Audio("./G.wav");
      tom2.play();
      break;

    case "n":
      var tom3 = new Audio("./N.mp3");
      tom3.play();
      break;
     

    case "m":
      var tom4 = new Audio("./M.mp3");
      tom4.play();
      break;

    case "f":
      var snare = new Audio("./F.wav");
      snare.play();
      break;

    case "o":
      var crash = new Audio("./O.mp3");
      crash.play();
      break;

    case "v":
      var kick = new Audio("./V.mp3");
      kick.play();
      break;


    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}