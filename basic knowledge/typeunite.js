// 联合类型 ｜ in as
// (1) |
//普通声明
var myname = 'cheng';
//对象
var p1 = { name: 'cheng' };
//接口对象
var p2 = {
    name: 'cheng'
};
//函数
function tests(params) {
    // console.log(params.toFixed())  报错
    if (typeof params == 'string') {
        console.log(params.split);
    }
    if (typeof params == 'number') {
        console.log(params.toFixed);
    }
}
tests(1);
/* 报错
function testStudent(params:Student|Teacher){
    console.log(params)
}
testStudent({name:"cheng"})
 */
function testStudent2(params) {
    if ('name' in params) { //in 
        console.log(params.name);
    }
    if ('age' in params) {
        console.log(params.age);
    }
}
testStudent2({ name: 'cheng' });
//(3) as断言
function testStudent3(params) {
    if ('name' in params) { //in 
        var res = params.name;
        console.log(params.name);
    }
    if ('age' in params) {
        var res = params.age;
        console.log(params.age);
    }
}
testStudent3({ age: '25' });
