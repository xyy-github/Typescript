// 交叉类型 & 
// 同时满足两个条件
interface Student {
  ownName: string
}
interface Teacher {
  ownAge: number,
//   ownName: number//出现同名属性，且类型不一致时，会变成nerver
}

function test (params: Student & Teacher) {
  console.log(params)
}
test({ ownName: 'cheng', ownAge: 25 })

