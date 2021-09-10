# TypeScript

# 一 :特点

1. 优点

   - 一般我们在前后端联调时，都要去看接口文档上的字段类型，而 TypeScript 会自动帮我们识别当前的类型。节省了我们去看文档或者 network 时间。这叫做类型推导(待会我们会讲到)
   - 友好地在编辑器里提示错误，避免代码在运行时类型隐式转换踩坑。

2. 缺点

   - 有一定的学习成本，TypeScript 中有几种类型概念，interface 接口、class 类、enum 枚举、generics 泛型等这些需要我们花时间学习。
   - 可能和一些插件库结合的不是很完美

# 二： TypeScript 运行流程及 JavaScript 代码运行流程

1. JavaScript 运行流程如下，依赖 NodeJs 环境和浏览器环境

   - 将 JavaScript 代码转换为 JavaScript-AST
   - 将 AST 代码转换为字节码
   - 运算时计算字节码

2. TypeScript 运行流程，以下操作均为 TSC 操作，三步执行完继续同上操作，让浏览器解析

   - 将 TypeScript 代码编译为 TypeScript-AST
   - 检查 AST 代码上类型检查
   - 类型检查后，编译为 JavaScript 代码
   - JavaScript 代码转换为 JavaScript-AST
   - 将 AST 代码转换为字节码
   - 运算时计算字节码

# 三：TypeScript 和 JavaScript 区别

类型系统特性｜ JavaScript ｜ TypeScript ｜
类型是如何绑定？｜ 动态｜ 静态｜
是否存在类型隐式转换？｜ 是｜ 否｜
何时检查类型？｜ 运行时 ｜编译时｜
何时报告错误｜ 运行时｜ 编译时｜

1. 类型绑定

   - JavaScript
     JavaScript 动态绑定类型，只有运行程序才能知道类型，在程序运行之前 JavaScript 对类型一无所知
   - TypeScript
     TypeScript 是在程序运行前（也就是编译时）就会知道当前是什么类型。当然如果该变量没有定义类型，那么 TypeScript 会自动类型推导出来。

2. 类型转换

   - JavaScript
     比如在 JavaScript 中 1 + true 这样一个代码片段，JavaScript 存在隐式转换，这时 true 会变成 number 类型 number(true)和 1 相加。
   - TypeScript
     在 TypeScript 中，1+true 这样的代码会在 TypeScript 中报错，提示 number 类型不能和 boolean 类型进行运算。

3. 何时检查类型

   - JavaScript
     在 JavaScript 中只有在程序运行时才能检查类型。类型也会存在隐式转换，很坑。
   - TypeScript
     在 TypeScript 中，在编译时就会检查类型，如果和预期的类型不符合直接会在编辑器里报错、爆红

4. 何时报告错误

   - JavaScript
     在 JavaScript 只有在程序执行时才能抛出异常，JavaScript 存在隐式转换，等我们程序执行时才能真正的知道代码类型是否是预期的类型，代码是不是有效。
   - TypeScript
     在 TypeScript 中，当你在编辑器写代码时，如有错误则会直接抛出异常，极大得提高了效率，也是方便。

# 四：TypeScript 总共围绕两种模式展开

1. 显式注解类型：声明变量时定义上类型
   例如：let age: number = 38;
2. 推导类型：去掉显示注解，系统自动会识别当前值是一个什么类型的
   例如：let age = 38;// 是一个 number 类型

# 五：安装 TypeScript && 运行

1. typescript （安装）
   全局安装 typescript 环境。
   `(sudo) npm i -g typescript`
   安装完成，执行 tsc 命令。
   如：我们的文件叫做 index.ts，在其当前目录执行 tsc index.ts。然后就可以看到在目录下编译出来一个 index.js，这就是 tsc 编译完的结果。

2. index.ts （运行）
   新建 index.ts 文件，编译 `const userName: string = "hello"`
   运行 tsc index.ts，你可以看见在 index.ts 的同级下又生成一个 index.js，如下就是编译的结果文件 index.js
   `var userName = "hello"`
   tsc 命令运行一次就可以编译生成一个文件

3. ts-node 插件
   `(sudo) npm i ts-node` 安装插件
   运行`ts-node index.ts`，直接运行.ts 文件，并且也不会编译出来.js 文件
