import "./style.css";
const WIDTH = 1280;
const HEIGHT = 720;
const START_POINT = {
  x: 0,
  y: 0,
};

const canvas =
  document.querySelector<HTMLCanvasElement>("#app") ||
  document.createElement("canvas");

canvas.width = WIDTH;
canvas.height = HEIGHT;

//Декларируем контекст
const ctx = canvas.getContext("2d")!;

type Position = {
  x: number;
  y: number;
};

type Velocity = {
  x: number;
  y: number;
};

type PlayerConfig = {
  position: Position;
  color: string;
  velocity: Velocity;
};

class Player {
  position: Position;
  velocity: Velocity;
  color: string;
  width: number = 60;
  heigth: number = 150;
  constructor({ position, color, velocity }: PlayerConfig) {
    this.position = position;
    this.color = color;
    this.velocity = velocity;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.heigth);
  }
  update() {
    this.draw();
    this.position.y = this.position.y + this.velocity.y;
    if (this.position.y + this.heigth === HEIGHT) {
      this.velocity.y = 0;
    }
  }
}

const player1 = new Player({
  color: "red",
  position: {
    x: 50,
    y: 50,
  },
  velocity: {
    x: 0,
    y: 5,
  },
});

const player2 = new Player({
  color: "blue",
  position: {
    x: 450,
    y: 50,
  },
  velocity: {
    x: 0,
    y: 1,
  },
});

const animate = () => {
  window.requestAnimationFrame(animate);
  ctx.fillStyle = "rgb(0,0,0)";
  ctx.fillRect(START_POINT.x, START_POINT.y, WIDTH, HEIGHT);
  player1.update();
  player2.update();
};

animate();
