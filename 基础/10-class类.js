//类
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//（1）public： 类里面定义的属性及方法默认都是public定义。
var Student = /** @class */ (function () {
    function Student() {
        this.name = 'cheng';
        this.age = 10;
        this.ud = 's';
        this.sex = 'male';
    }
    return Student;
}());
var s1 = new Student();
console.log(s1.name, s1.age); //name也默认为public，都能访问
// console.log(s1,sex) //爆红
// console.log(s1.ud)// 爆红，当前属性为私有属性，只能在类内部访问
var School = /** @class */ (function (_super) {
    __extends(School, _super);
    function School() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    School.prototype.getdata = function () {
        // return this.sex//爆红~，虽然继承了Person类，但是private定义是只能在当前类访问，子类也不能访问。
        return this.ud;
    };
    return School;
}(Student));
var tmp = new School();
console.log(tmp.getdata());
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.fn = function () { };
    return Person;
}());
// 抽象类
var Boss = /** @class */ (function () {
    function Boss() {
    }
    return Boss;
}());
var A = /** @class */ (function (_super) {
    __extends(A, _super);
    function A() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    A.prototype.call = function () {
        console.log(this.name);
        console.log('A');
    };
    return A;
}(Boss));
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    B.prototype.call = function () {
        console.log('B');
    };
    return B;
}(Boss));
new A().call();
