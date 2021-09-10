// 静态类型

//在当前目录运行：tsc basicType.ts，生成.js文件

//#region  number
const count: number = 18 // 显示注解一个number类型
const count1 = 18 // 不显示注解，ts会自动推导出来类型
//#endregion

//#region  String
const str: string = 'hello chengcheng' // 显示注解一个string类型
const str1 = 'hello chengcheng' // 不显示注解，ts会自动推导出来类型
//#endregion

//#region  boolean
const flag: boolean = false // 显示注解一个string类型
const flag1 = true // 不显示注解，ts会自动推导出来类型
//#endregion

//#region  null
const val: null = null
const val2: null = undefined // 这一点null类型可以赋值undefined跟在 js中是一样的，null == undefined
//#endregion

//#region  undefined
const val3: undefined = null
const val4: undefined = undefined // 这一点null类型可以赋值undefined跟在 js中是一样的，null == undefined
//#endregion

//#region  void （无效的）
function fn (): void {} // 正确
// function testFn(): void {
//     return 1; // 报错，不接受返回值存在
// }

function fn1 (): void {
  return undefined
} // 显示返回undefined类型，也是可以的
function fn2 (): void {
  return null
} // 显示返回null类型也可以，因为 null == undefined
//#endregion

//#region  nerver（一个永远不会有值的类型或者也可以说一个永远也执行不完的类型，代表用于不会有值，undefined、null也算做是值）

// const test: never = null // 错误
// const test1: never = undefined // 错误
function Person1 (): never {
  // 正确，因为死循环了，一直执行不完
  while (true) {}
}
function Person2 (): never {
  // 正确，因为递归，永远没有出口
  Person2()
}
function Person3 (): never {
  // 正确 代码报错了，执行不下去
  throw new Error()
}
//#endregion

//#region  any (任何的、任意的。不推荐任意使用)
let any1: any = '' // 正确
any1 = null // 正确
any1 = {} // 正确
any1 = undefined // 正确
//#endregion

//#region  unknown （未知的。TypeScript中第二个any类型，也是接受任意的类型的值）
let unknow1: unknown = ''
unknow1 = 1
unknow1 = 'fdsfs'
unknow1 = null
unknow1 = {}
//#endregion

//！！！ any Vs unknown :都是任意赋值，any接受任意赋值，别人也接受any的值；而unknown类型接受别人，但别人不接受unknown类型。
