// 基础类型 null, undefined, symbol, boolean, void
const count: number = 123;
const teacherName: string = 'Dell';

// 对象类型

class Person {}

const teacher: {
  name: string;
  age: number;
} = {
  name: 'Dell',
  age: 18
};

const numbers: number[] = [1, 2, 3];

const dell: Person = new Person();

//getTotal是一个函数，他的返回值是一个number，并将具体他是一个怎样的函数赋值给他
const getTotal: () => number = () => {
  return 123;
};
