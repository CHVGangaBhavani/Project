var numberOfDrumButtons = document.querySelectorAll(".drum").length;
let res = [];
let isRecStart = false;
let keys = ["a", "w", "s", "d", "j", "k", "l"];
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
  let a = setInterval(function(){
    if(i==res.length)
      clearInterval(a);
    makeSound(res[i]);
    i+=1;
  },500);
}

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./l.mpeg");
      tom1.play();
      break;
     

    case "a":
      var tom2 = new Audio("./a.mpeg");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("./k.mpeg");
      tom3.play();
      break;
     

    case "d":
      var tom4 = new Audio("./d.mpeg");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("./j.mpeg");
      snare.play();
      break;

    case "k":
      var crash = new Audio("./w.mpeg");
      crash.play();
      break;

    case "l":
      var kick = new Audio("./s.mpeg");
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