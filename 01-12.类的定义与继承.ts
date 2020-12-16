class Person {
  name = 'dell';
  getName() {
    return this.name;
  }
}

class Teacher extends Person {
  getTeacherName() {
    return 'Teacher';
  }
  //一般子类重写了父类的方法，如果还想使用父类的方法就可以用super
  getName() {
    return super.getName() + 'lee';
  }
}

const teacher = new Teacher();
console.log(teacher.getName());
console.log(teacher.getTeacherName());
