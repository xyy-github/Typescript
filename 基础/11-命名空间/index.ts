//使用命名空间解决不同文件重名爆红问题

namespace SomeNameSpace {
  const q = {} //q没有export，作为内部变量不会被暴露出去
  export interface obj {
    //暴露的obj可以被全局访问
    name: string
  }
}
