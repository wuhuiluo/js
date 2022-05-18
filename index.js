// 暂时性死区，不能在定义(声明)变量前赋值
// var fullName = "123";
// function a() {
//   fullName = "qwe";
//   console.log(fullName);
//   let fullName;
// }
// a();
// 箭头函数中的this指向父级作用域中的this
// call bind apply无法改变箭头函数的this指向 这里输出undefined因为这里this指向的是window
// function sayName() {
//   console.log("myname", this.name);
// }

// const obj = {
//   name: "whl",
// };

// sayName.call(obj);
// new Set 得出类数组对象 Array.from将类数组转换成数组
// const array = [1, 2, 3, 4, 2, 3, 4];
// const result = Array.from(new Set(array));
// console.log(result);

// const number1 = {
//   name: "whl",
// };
// const number2 = {
//   age: "wqe",
// };
// console.log(Object.assign(number1, number2));

// const obj = {
//   name: "whl",
//   age: 18,
// };
// const result1 = Object.keys(obj);
// 返回可遍历的key数组
// const result2 = Object.values(obj);
// console.log(result1);
// console.log(result2);
// 返回键值对数组
// const result3 = Object.entries(obj);
// console.log(result3);

// new Promise((resolve, reject) => {
//   let name = "whl";
//   if (name === "whl2") {
//     resolve(1);
//   } else {
//     reject(2);
//   }
// }).then(
//   (res) => {
//     console.log("resolve", res);
//   },
//   (res) => {
//     console.log("reject", res);
//   }
// );

// new Promise((resolve, reject) => {
//   let name = "whl";
//   if (name === "whl") {
//     resolve(1);
//   } else {
//     reject(2);
//   }
// })
//   .then((res) => {
//     console.log("成功了", res);
//     return res + 1;
//   })
//   .then(
//     (res) => {
//       console.log("成功了2", res);
//     },
//     (res) => {
//       console.log("失败了", res);
//     }
//   );

// new Promise((resolve, reject) => {
//   let name = "whl";
//   if (name === "whlq") {
//     resolve(1);
//   } else {
//     reject(2);
//   }
// })
//   .then((res) => {
//     console.log("成功了", res);
//   })
//   .catch((err) => {
//     console.log("失败了", err);
//   });

// const PromiseArray = [1, 2, 3, 4, 5].map((item) => {
//   return new Promise((resolve) => {
//     resolve(item);
//   });
// });
// Promise.all(PromiseArray).then((res) => {
//   console.log(res);
// });
// Promise.resolve(1).then((res) => {
//   console.log(res);
// });
// let a = [1, 2, 3];
// b = a.map((item) => {
//   item += 2;
// });
// console.log(b);

// const array = [1, 2, 3, 2, 3, 4];
// const result = array.filter((item, index, list) => {
//   return list.indexOf(item) !== index;
// });

// const arr = [1, 3, 4, 5, 4];
// console.log(Array.from(new Set(arr)));
// console.log([...new Set(arr)]);
// const newArr = [];
// arr.forEach((item) => {
//   if (newArr.indexOf(item) === -1) {
//     newArr.push(item);
//   }
// });
// console.log(newArr);
// const q = arr.filter((item, index) => {
//   return arr.indexOf(item) === index;
// });
// console.log(q);
// const objArray = [
//   {
//     age: "20",
//     name: "whl",
//   },
//   {
//     age: "20",
//     name: "qwe",
//   },
//   {
//     age: "30",
//     name: "qwe",
//   },
// ];

// const arr = [];

// objArray.forEach((item) => {
//   if (!arr.some((items) => items.age === item.age)) {
//     arr.push(item);
//   }
// });
// console.log(arr);
// function Filter(data, key) {
//   let target = {};
//   data.forEach((item) => {
//     let k = item[key];
//     if (!target[k]) target[k] = item;
//   });
//   return Object.values(target);
// }

// console.log(Filter(objArray, "age"));

// const arr = [];
// objArray.forEach((item) => {
//   if (!arr.some((items) => items.age === item.age)) {
//     arr.push(item);
//   }
// });
// console.log(arr);
// function good(data, key) {
//   let target = {};
//   data.forEach((item) => {
//     let k = item[key];
//     if (!target[k]) target[k] = item;
//   });
//   return target;
// }

// console.log(good(objArray, "age"));

// const objArray = [
//   {
//     age: "20",
//     name: "whl",
//   },
//   {
//     age: "20",
//     name: "qwe",
//   },
//   {
//     age: "30",
//     name: "qwe",
//   },
// ];

// const target = [];
// objArray.forEach((item) => {
//   if (!target.some((items) => items.age === item.age)) {
//     return target.push(item);
//   }
// });
// console.log(target);

// const Filter = (data, key) => {
//   let target = {};
//   data.forEach((item) => {
//     let k = item[key];
//     if (!target[k]) target[k] = item;
//   });
//   return Object.values(target);
// };

// console.log(Filter(objArray, "age"));

// const arr = [1, 2, 3, 4, 4];
// console.log(Array.from(new Set(arr)));
// console.log([...new Set(arr)]);
// const res = arr.filter((item, index) => {
//   return arr.indexOf(item) === index;
// });
// let target = [];
// arr.forEach((item) => {
//   if (target.indexOf(item) === -1) {
//     target.push(item);
//   }
// });
// console.log(target);
// console.log(res);
// const arr = [1, [2, [3, [4, 5]]], 6];
// function flatten(arr) {
//   return arr.reduce((result, item) => {
//     return result.concat(Array.isArray(item) ? flatten(item) : item);
//   }, []);
// }
// console.log(flatten(arr));

// new的原理
// 1.创建一个新对象
// 2.将构造函数中的作用域赋给新对象
// 3.执行构造函数中的代码
// 4.返回新对象

// function _new() {
//   let obj = {};
//   let Con = [].shift.call(arguments);
//   obj.__proto__ = Con.protoype;
//   let result = Con.apply(obj, arguments);
//   return typeof result === "object" ? result : obj;
// }

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let a = _new(Person, "whl", 23);
// console.log(a);

// function _new() {
//   let obj = {};
//   let Con = [].shift.call(arguments);
//   obj.__proto__ === Con.prototype;
//   const result = Con.apply(obj, arguments);
//   return typeof result === "object" ? result : obj;
// }

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const person = _new(Person, "whl", 21);
// console.log(person);

// A instanceof B
// B的pototype指向的原型对象是否在对象A的原型链上
// function InstanceOf(L, R) {
//   if (typeof L !== "object" || L === null) return false;
//   let p = Object.getPrototypeOf(L);
//   while (true) {
//     if (p === null) return false;
//     if (p === R.prototype) return true;
//     p = Object.getPrototypeOf(p);
//   }
// }
// function InstanceOf(L, R) {
//   if (typeof L !== "object" || L === null) return false;
//   let p = Object.getPrototypeOf(L);
//   while (true) {
//     if (p === null) return false;
//     if (p === R.prototype) return true;
//     p = Object.getPrototypeOf(p);
//   }
// }
// console.log(InstanceOf("111", String));
// console.log(InstanceOf(new String("111"), String));
// B的prototype属性指向的原型对象是否在A的原型链上

// Javascript一共有八种数据类型

// number string boolean null undefined object bigint symbol
// console.log(Object.prototype.toString.call({}) === "[object Object]");
// console.log(Object.prototype.toString.call(2));
// console.log(Object.prototype.toString.call([]) === "[object Array]");
// console.log(Object.prototype.toString.call(function () {}));
// console.log(Object.prototype.toString.call([]) === "[object Array]");
// console.log([] instanceof Array);
// console.log([].__proto__ === Array.prototype);
// console.log(Array.isArray([]));

// let obj = {};
// function obj1(o) {
//   if (Object.keys(o).length === 0) {
//     console.log("我是空对象");
//   }
// }
// obj1(obj);
// let outobj = {
//   inobj: {
//     a: 1,
//     b: 2,
//   },
// };
// let newObj = Object.assign({}, outobj);
// newObj.inobj.a = 2;
// console.log(outobj);

// let outobj = {
//   inobj: {
//     a: 1,
//     b: 2,
//   },
// };
// let newObj = { ...outobj };
// newObj.inobj.a = 2;
// console.log(outobj);

//  ...扩展运算符的作用：拷贝数组或对象的每一个值到一个新的数组或对象中

// let const var
// var可以重复声明，const和let不可以
// var存在变量提升，const和let不存在
// let和const存在块级作用域，var不存在，主要解决内层变量可能会覆盖外层变量
// let和const存在暂时性死区，不能在声明前使用该变量,var不存在暂时性死区
// let和var可以不用设置初始值，const必须设置初始值
// var声明的变量会被添加到全局对象上
// let obj1 = {
//   p: { a: 1, b: 2 },
// };
// let newObj = { ...obj1 };
// newObj.p.a = 2;
// console.log(obj1);
// const arr = [1, 2, 3, 4];
// console.log(new Set(arr));
// console.log(Array.prototype.slice.call(new Set(arr)));

// const a = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// // for (let index in a) {
// //   console.log(index);
// // }
// const b = Array.from(a)
// console.log(b)
// for (let k of Array.from(b)) {
//   console.log(k);
// }
// const arr = [1,2,3,4]
// for(let k of arr) {
//   console.log(k)
// }
// const a = {
//   a: 1,
//   b: 2,
//   c: 3
// }
// for(let k in a) {
//   console.log(k)
// }

// p.__proto__ Person.prototype
// Person.prototype.__proto__ Object.prototype

// 剩下一个promise

// 三句话
// prototype是函数的原型对象,会被对应的__proto__引用
// __proto__引用了哪个protoype，看哪个函数构造了你，那proto就是那个构造函数的prototype

// function A() {
//   let a = 1;
//   window.B = function () {
//     console.log(a);
//   };
// }
// A()
// B()
// 有权访问另一个函数作用域中的变量的函数

// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// Promise call apply bind 防抖 节流

// get 获取资源
// post 上传、提交数据
// put 修改数据
// delete 删除资源
// connect 建立链接隧道，用于代理服务器
// head：获取资源的元信息
// options 列出可对资源实行的请求方法，用于跨域请求
// trace 追踪请求响应的传输路径

// get和post的区别

// get会被浏览器缓存下来 post不会
// get只进行URL编码，post无限制
// get具有幂等性，执行相同的操作，结果相同
// get一般放在url中，post放在请求体中，适合传输敏感信息

// 200: 客户端发来的请求被服务器正常处理了
// 204: 客户端发来的请求被服务器正常处理了，但是没有返回内容
// 206: 客户端进行了范围请求，服务器执行了这部分get请求

// 301: 永久重定向 
// 302: 临时重定向
// 304: 命中协商缓存时返回

// 400: 请求报文存在语法错误
// 401: 发送的请求需要有通过http认证的认证信息
// 403: 请求资源的访问被服务器拒绝了
// 404: 服务器上无法找到请求的资源
// 405: 该请求方法不被服务器允许

// 500: 服务器在执行请求时发生了错误
// 503: 服务器处于负载或者停机维护,无法处理请求

// 400: 请求报文存在语法错误
// 401 发送的请求需要有通过http认证的认证信息
// 403 请求资源的访问被服务器拒绝
// 404 服务器上无法找到请求的资源
// 405 该请求方法不被服务器允许

// 强缓存 expires
// cache-control属性可设置的字段有no-cache max-age

// last-modefied if-modified-since
// Etag if none-match

// get 获取资源
// post 上传提交数据
// put 修改数据
// head 获取资源元信息
// connect 建立链接隧道，用于代理服务器
// delete 删除资源
// trace 追踪请求响应的传输路径
// options 列出可对资源实行的请求方法，用于跨域请求

// get会被浏览器缓存起来，post不会
// get只能进行url编码，post无限制
// get一般放在url中，而post一般放在请求体中传输敏感信息
// get具有幂等性，执行相同的操作返回相同 结果

// 200: 客户端发送的请求被服务器正确处理了
// 204: 客户端发送的请求被服务器正确处理了，但是没有内容返回
// 206: 客户端发送了范围请求，服务器执行了这部分的get请求

// 301: 永久重定向
// 302： 临时重定向
// 304：命中协商缓存时返回

// 400: 请求报文存在语法错误
// 401: 发送的请求需要有通过http认证的认证信息
// 403: 请求资源的访问被服务器拒绝了
// 404: 无法找到该请求的资源
// 405: 该请求方法不被服务器允许

// 500: 服务器执行请求时发生了错误
// 502: 服务器处于负载或停机维护，无法处理请请求

// 400: 请求报文存在语法错误
// 401: 需要有通过http认证的认证信息
// 403: 资源的访问被服务器拒绝了
// 404: 无法找到请求的资源
// 405: 该请求方法不被服务器允许

// xss 浏览器像服务器发送请求时注入脚本攻击
// 输入输出过滤 添加http-only，锁死cookie
// csrf: 跨站请求伪造 黑客通过网站B 诱时用户访问已经登录的网站A进行违背用户医院的操作，曹诚一些损失
// 加验证码 请求时传token，验证请求头的的refer信息

// cookie存储大小为4k，l和s的存储大小为5kb
// cookie在过期时间之前一直有效，loca为永久存储，浏览器关闭后数据不会丢失，除非删除数据。s数据在关闭当浏览器窗口后自动删除
// cookie数据会自动传递到服务器，l和s保存在本地

// 防抖节流 三次握四挥手