//用来声明类型别名，别名类型只能定义是：基础静态类型、对象静态类型、元组、联合类型。
type types = string
type typeunit = string | number

const ownname: typeunit = '这个名字可以是String也可以是Number'
const age: types = '25'

// 特点一：不允许重复命名类型
// type types=number 已经有types，重复会报错

//特点二： type支持表达式，interface不支持
const count1: number = 123
type testType = typeof count1
const count2: testType = 123


//特点三：type支持类型映射，interface不支持
type keys = "name" | "age"  
type KeysObj = {
    [propName in keys]: string
}
const p1: KeysObj = { // 正常运行
    name: "瑶瑶",
    age: "23"
} 


