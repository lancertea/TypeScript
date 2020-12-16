// 数组
const arr: (number | string)[] = [1, '2', 3];
const stringArr: string[] = ['a', 'b', 'c'];
const undefinedArr: undefined[] = [undefined];

//对象类型数组
//1
//const objectArr1:{name:string,age:number}[] = [{name:'lancer',age:12}];

//2
// type alias 类型别名
type User = { name: string; age: number };
const objectArr1:User[] = [{name:'lancer',age:12}];

class Teacher {
  name: string;
  age: number;
}

const objectArr: Teacher[] = [
//注意和Teacher数据类型结构一致的对象也是可以的
  new Teacher(),
  {
    name: 'dell',
    age: 28
  }
];


// 元组 tuple
const teacherInfo: [string, string, number] = ['Dell', 'male', 18];
// csv
const teacherList: [string, string, number][] = [['dell', 'male', 19], ['sun', 'female', 26], ['jeny', 'female', 38]];
