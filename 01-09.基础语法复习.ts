// 基础类型, boolean, number, string, void, undefined, symbol, null
//1.分开写无法推断出其类型，想明确类型必须自己添加类型注解
let c;
c = 123;//any

let count: number;
count = 123;

// 对象类型, {}, Class, function, []
const func = (str: string) => {
  return parseInt(str, 10);
};

//巧记：冒号后面跟的是类型，等号后面跟的是具体实现
const func1: (str: string) => number = str => {
  return parseInt(str, 10);
};

const date = new Date();

// 其他的 case
interface Person {
  name: string,
  age: number
}
const rawData = '{"name":"lancer","age":12}';
const newData: Person = JSON.parse(rawData);

let temp: number | string = 123;
temp = '456';
