// 对象静态类型
//#region  object && {}
var Object1 = {}; // 空对象
var Object2 = null; // null对象
var Object3 = []; // 数组对象
var Object4 = {};
// list3.name = 1 // 报错 不可更改里面的字段，但是可以读取
Object4.toString();
//#endregion
//#region 数组
var arr = []; // 定义一个数组类型
var arr1 = [1, 2]; // 定义一个数组，里面值必须是number
var arr2 = [null, {},
    []
]; // 定义一个数组里面必须是对象类型的
var arr3 = [1, 2, 3]; // 泛型定义数组必须是number类型
//#endregion
//#region 类
var Person = /** @class */ (function () {
    function Person() {}
    return Person;
}());
var p = new Person();
var p2 = new Person();
// person.xxx = 123; // 这行代码报错，因为当前类中不存在该xxx属性
//#endregion
//#region 函数
var fn = function () {
    return 'hello';
}; // 定义一个变量必须是函数类型的，返回值必须是string类型
//补充：函数类型注解
//1:返回类型为number
function addfn(a, b) {
    return a + b;
}
addfn(1, 2);
//2:函数为void（不返回）
function reback() {
    console.log('没有返回值');
}
//3:函数不会自动类型推导
//3.1 传递any时，不认识
function anyFn(a, b) {
    return a + b;
}
anyFn(1, 2);
//将传递any改造为num
function numFn(a, b) {
    return a + b;
}
numFn(1, 2);
//3.2 参数对象显示注解类型
function objfn(obj) {
    return obj.num;
}
objfn({
    num: 18
});
//#endregion