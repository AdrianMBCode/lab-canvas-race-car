window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  let imageRoad;
  let imageCar;
  let obstacles = [];

  function startGame() {
    imageRoad = new Image();
    imageRoad.src = "images/road.png";
    imageRoad.addEventListener('load', () => {
      ctx.drawImage(imageRoad, 0, 0, 500, 700);
    });

    imageCar = new Image();
    imageCar.src = "images/car.png";
    imageCar.addEventListener('load', () => {
      ctx.drawImage(imageCar, 213, 550, 70, 125);
    });

    setInterval(() => {
      update();
    }, 20);

    setInterval(() => {
      createObstacle();
    }, 1000);
  }

  class Car {
    constructor(x, velocidadx) {
      this.x = x;
      this.velocidadx = velocidadx;
      this.width = 70;
    }
    print() {
      ctx.drawImage(imageCar, this.x, 550, this.width, 125);
    }
  }

  class Obstacle {
    constructor(x) {
      this.x = x;
      this.y = 0;
      this.width = 30;
      this.height = 40;
    }
    print() {
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
      this.y += 5;
    }
  }

  let car = new Car(213, 20);
  let update = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imageRoad, 0, 0, 500, 700);
    car.print();

  };

  document.getElementsByTagName("body")[0].addEventListener("keydown", (event) => {
    switch (event.key) {
      case "ArrowLeft":
        if (car.x > 0) car.x -= car.velocidadx;
        break;

      case "ArrowRight":
        if (car.x + car.width < canvas.width) car.x += car.velocidadx;
        break;
      default:
      }
    });
  }

