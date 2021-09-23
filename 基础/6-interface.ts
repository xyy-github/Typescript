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

//特点六：实用类型
interface UtilityFirst {
  name: string
  age: number
  hobby: []
}

interface UtilityLast {
  age: number
}

type TypeTest = UtilityFirst | UtilityLast

// Exclude :从一个类型排除另一个类型，只能是联合类型。从TypeTest类型中排除UtilityLast类型
const obj1: Exclude<TypeTest, UtilityLast> = {
  name: '瑶瑶'
}

//Extract: Extract正好跟上面那个相反，这是选择某一个可赋值的联合类型，从TypesTest类型中只选择UtilityLast类型。
const obj2: Extract<TypeTest, UtilityLast> = {
  age: 1
}

//Readonly :只读
const obj3: Readonly<UtilityFirst> = {
  name: 'yaoyao'
}
// obj3.name="s"//报错 只读

//Partial ：不带“？”都是必填
const obj4: Partial<UtilityFirst> = {}
//Required :对象所有可选属性转换成必选属性。
const obj4: Required<UtilityFirst> = {
  name: '瑶瑶',
  age: 10,
  hobby: ['code']
}

//Pick:Pick选择对象类型中的部分key值，提取出来。第一个参数目标值，第二个参数联合key
const obj6: Pick<UtilityFirst, 'name' | 'age'> = {
  name: 'yaoyao',
  age: 10
}

//Omit:Omit选择对象类型中的部分key值，过滤掉。第一个参数目标值，第二个参数联合key
// 实用于：对象
const obj7: Omit<UtilityFirst, 'name' | 'age'> = {
  hobby: ['杨', 'cehng']
}

//Record:创建一个对象结果集，第一个参数则是key值，第二个参数则是value值。规定我们只能创建这里面字段值
type IDBIndex = 0 | 1 | 2
const obj8: Record<IDBIndex, 'yao'> = {
  0: 'a',
  1: 'b',
  2: 'c'
}
