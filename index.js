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