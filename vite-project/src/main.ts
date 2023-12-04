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

ctx.fillStyle = "rgb(0,0,0)";
ctx.fillRect(START_POINT.x, START_POINT.y, WIDTH, HEIGHT);
