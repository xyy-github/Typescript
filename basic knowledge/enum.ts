//枚举

/*  Enum枚举类型，可以设置默认值，如果不设置则为索引。
    enum可以递增值，也可以设置默认值。
 */

enum color1 {
  RED,
  BLUE = 'blue',
  GREEN = 'green'
}
/* color["RED"] 0 
   color["BLUE"] blue
 */

/* enum color2 {
    RED,
    BLUE = "blue",
    GREEN 
}
报错：因为 red没有默认值，blue设置了默认值，green没有默认值，这时代码不知如何递增，于是green报错
 */

/* enum color3 {
    RED,
    BLUE = 4,
    GREEN 
}
正常：因为此时的递增会认为red:0,blue:4,gren:5,同时可以通过value查Key值，例 console.log(color[4]) // BLUE
 */
