// interface 和 type 相类似，但并不完全一致
//接口是一个帮助我们在编译时做语法校验的工具，在最终生成的js文件中会被剔除掉
interface Person {
  // readonly name: string;  只读属性的写法
  name: string;
  age?: number; //?表明age可有可无
  [propName: string]: any;//有其他类型的属性
  say(): string;//一个返回值为string的方法
}

//接口可继承
interface Teacher extends Person {
  teach(): string;
}

//用接口还可定义一个函数
interface SayHi {
  (word: string): string;
}

const getPersonName = (person: Person): void => {
  console.log(person.name);
};

const setPersonName = (person: Teacher, name: string): void => {
  person.name = name;
};

const person = {
  name: 'dell',
  sex: 'male',
  say() {
    return 'say hello';
  },
  teach() {
    return 'teach';
  }
};

getPersonName(person);

// 以对象字面量形势传参是强校验，传的对象必须和其定义的对象格式完全一致
// 以变量形势传参只要保证传的对象包含其定义的对象的属性就可以
// getPersonName({
//   name:'jack',
//   sex:'male'
// })
setPersonName(person, 'lee');

//类应用于一个接口
class User implements Person {
  name = 'dell';
  say() {
    return 'hello';
  }
}

const say: SayHi = (word: string) => {
  return word;
};
