//虽然可以根据参数类型推断出最终的返回值类型，但为了防止函数内部对最终返回值做了处理，为了能检测出异常
//可显式标注返回值的类型
function add(first: number, second: number): number {
  return first + second;
}

//当表明一个函数无返回值时，可用void
function sayHello(): void {
  console.log('hello');
  //return 12 error
}

//当一个函数永远不能执行到最后，其类型为never
function errorEmitter(): never {
  while(true) {}

  //throw new Error();
  //console.log("error")
}

//参数为解构赋值类型
function add1({ first, second }: { first: number; second: number }): number {
  return first + second;
}

function getNumber({ first }: { first: number }) {
  return first;
}

const total = add1({ first: 1, second: 2 });
const count = getNumber({ first: 1 });
