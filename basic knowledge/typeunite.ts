// 联合类型 ｜ in as

// (1) |
//普通声明
const myname: string | number = 'cheng'
//对象
const p1: { name: string | number } = { name: 'cheng' }
//接口
interface p {
  name: string | number
}
//接口对象
const p2: p = {
  name: 'cheng'
}
//函数
function tests (params: number | string) {
  // console.log(params.toFixed())  报错
  if (typeof params == 'string') {
    console.log(params.split)
  }

  if (typeof params == 'number') {
    console.log(params.toFixed)
  }
}
tests(1)

//（2） in
interface Student {
  name: string
}
interface Teacher {
  age: string
}
/* 报错
function testStudent(params:Student|Teacher){
    console.log(params)
}
testStudent({name:"cheng"}) 
 */
function testStudent2 (params: Student | Teacher) {
  if ('name' in params) {//in 
    console.log(params.name)
  }

  if ('age' in params) {
    console.log(params.age)
  }
}
testStudent2({ name: 'cheng' })


//(3) as断言
function testStudent3 (params: Student | Teacher) {
    if ('name' in params) {//in 
      const res = (params as Student).name
      console.log(params.name)
    }
  
    if ('age' in params) {
      const res = (params as Teacher).age
      console.log(params.age)
    }
  }
  testStudent3({ age: '25' })
  