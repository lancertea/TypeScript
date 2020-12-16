interface Point {
  x: number;
  y: number;
}

function tsDemo(data: Point) {
  console.log("123");
  return Math.sqrt(data.x ** 2 + data.y ** 2);
}

//tsDemo()  //报错，TS的静态类型在开发过程中，就能发现潜在问题

tsDemo({ x: 1, y: 123 });
