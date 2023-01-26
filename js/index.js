window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let imageRoad
let imageCar
  function startGame() {
    imageRoad = new Image();
    imageRoad.src = "images/road.png";
    imageRoad.addEventListener('load', () => {
    ctx.drawImage(imageRoad, 0, 0, 500, 700);
    })
    imageCar = new Image();
    imageCar.src = "images/car.png";
    imageCar.addEventListener('load', () => {
    ctx.drawImage(imageCar, 213, 550, 70, 125)
    })
  

    setInterval(() => {
      update();
    },20);
  }

class Car {
    constructor(x, velocidadx) {
      this.x = x;
      this.velocidadx = velocidadx;
    }
    print() {
      ctx.drawImage(imageCar, this.x, 550, 70, 125);
  
    }
  }
  let cars = new Car(213, 20)
  let update = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imageRoad, 0, 0, 500, 700);
    cars.print();
  }
  

   

  document.getElementsByTagName("body")[0].addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        cars.x -= cars.velocidadx;
        if(cars.x > 0) cars.x = cars.x -10;
        break;

      case "ArrowRight":
        cars.x += cars.velocidadx;
        if(cars.x < (canvas.width - canvas-height)) cars.x = cars.x +10;
        break;
      default:
        break;
    }
  })
  
  }

