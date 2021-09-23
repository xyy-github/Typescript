//简单的泛型理解
function test (a: string | number, b: string | number) {
  console.log(a, b)
}
test(1, '瑶瑶')



//(1) 泛型 -简单示例(同一类型)
function test1<T> (a: T, b: T) {
  console.log(a, b)
}
// test1<number>(1,"s");报错：需同一类型
test1<number>(1, 2)
test1<boolean>(true, false)
test1<string>('cheng', 'yao')
test1<any>('cheng', 25) //any任何类型



//（2）可不同类型，用**约束
function test2<T extends number | string, Y extends number | string> (
  a: T,
  b: Y
) {
  console.log(a, b)
}
test2<number, string>(18, '瑶瑶')
test2<string, number>('要', 18)
