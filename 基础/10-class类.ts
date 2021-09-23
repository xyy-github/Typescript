//类

//（1）public： 类里面定义的属性及方法默认都是public定义。
class Student {
  name = 'cheng'
  public age = 10
  protected ud = 's'
  private sex = 'male'
}
const s1 = new Student()
console.log(s1.name, s1.age) //name也默认为public，都能访问
// console.log(s1,sex) //爆红
// console.log(s1.ud)// 爆红，当前属性为私有属性，只能在类内部访问

class School extends Student {
  getdata () {
    // return this.sex//爆红~，虽然继承了Person类，但是private定义是只能在当前类访问，子类也不能访问。
    return this.ud
  }
}
const tmp = new School()
console.log(tmp.getdata())

// implements关键字只能在class中使用，实现一个新的类，从父级或者从接口实现所有的属性和方法，如果在person类里面写不进去接口里面已有的属性和方法就会报错
interface fron {
  name: string
  fn: () => void
}
class Person implements fron {
  name: 'yaoyao'
  fn () {}
}

// 抽象类,抽象类使用abstract关键字定义。abstract抽象方法不能实例化，如果，抽象类里面方法是抽象的，那么本身的类也必须是抽象的，抽象方法不能写函数体。父类里面有抽象方法，那么子类也必须要重新该方法。
abstract class Boss {
  name: 'wang'
  // call(){} //抽象方法不能写函数体
}
class A extends Boss {
  call () {
    console.log(this.name)
    console.log('A')
  }
}

class B extends Boss {
  call () {
    console.log('B')
  }
}
new A().call()
