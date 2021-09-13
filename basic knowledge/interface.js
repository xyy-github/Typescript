// 接口
// 原来定义对象：
var p1 = { name: 'cheng', age: 25 };
var p2 = {
    name: 'cheng',
    age: 25,
    address: 'sichuan ' //p2.address="mianyang"//只读属性更改报错
};
var p3 = {
    name: '瑶瑶',
    age: 18,
    address: '',
    funs: 'ch' //继承
};
//特点三：propName扩展
var p4 = {
    name: '要啊哟',
    age: 18,
    address: '',
    eat: 'apple' //扩展
};
//特点四：不支持表达式
var count1 = 123;
var c = {
    count: 123
};
