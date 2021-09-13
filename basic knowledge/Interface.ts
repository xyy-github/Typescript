// 接口
// 原来定义对象：
const p1: { name: string; age: number } = { name: 'cheng', age: 25 }

// 现在定义对象：改造：
interface Types {
  name: string
  age: number
  readonly address: string // readonly只读
  sex?: 'male' // ？选择性填写,不加？为必填
  [propName: string]: any // propName字段必须是 string类型 or number类型。 值是any类型，也就是任意的
}
const p2: Types = {
  name: 'cheng', //p2.name="chenger"
  age: 25,
  address: 'sichuan ' //p2.address="mianyang"//只读属性更改报错
}

// 特点一：可以出现重复类型名称；声明同名属性类型必须保持一致；
interface Types {
  eyes?: string
}
/* （1） interface接口可以出现重复类型名称，如果重复出现则是，合并起来也就是变成 
    {  
        name: string
        age: number
        readonly address: string
        sex?: 'male' 
        [propName: string]: any 
        eyes: string
    }
*/

/* （2） 后续声明的接口，必须跟前面声明的同名属性类型必须保持一致
    interface Types {
        eyes: number
    }
    此处爆红处理：将后续修改的类型改为之前声明的类型。此处number改为string
 */

//特点二：继承
interface ChildrenType extends Types {
  // 这ChildrenType接口就已经继承了父级Types接口
  funs: string
}

const p3: ChildrenType = {
  name: '瑶瑶',
  age: 18,
  address: '',
  funs: 'ch' //继承
}


//特点三：propName扩展
const p4: Types = {
  name: '要啊哟',
  age: 18,
  address: '',
  eat: 'apple' //扩展
}


//特点四：不支持表达式
/* 
const count1:number=123
interface Owntypes{
    // count:typeof count1
    [count: typeof count1]: any // 报错
}
// const c:Owntypes={
//     count:123
// }
 */


//特点五：不支持类型映射
/* 
type keys = "name" | "age"  
interface Ownkeys{
    [propName in keys]: string // 报错
} 
const own:Ownkeys={
    name:"yao",
    age:10
}
*/
