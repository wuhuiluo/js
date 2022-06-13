// HTTP请求方法

// GET: 获取资源
// POST：提交、上传数据
// PUT：修改数据
// DELETE：删除资源
// TRACE：追踪请求响应的传输路径
// OPTIONS: 列出可对资源实行的请求方法
// HEAD: 获取资源的元信息
// CONNEXT: 简历链接隧道，用于dialing服务器

// GET 获取资源
// POST 提交上传数据
// PUT: 修改数据
// DELETE: 删除资源
// HEAD: 获取资源元信息
// OPTIONS: 列出可对资源实行的请求方法
// TRACE: 追踪请求响应的传输路径
// connect: 建立链接隧道用于代理服务器

// get和post的区别
// 缓存、URL编码，请求体中传输敏感信息

// get会被浏览器缓存起来，post不会
// get一般放在URL中，post放在请求体里，传输敏感信息
// get只能进行URL编码，post没有这个限制
// get幂等性

// 200: 客户端的请求被服务器正确处理了
// 204: 客户端的请求被服务器正确处理了，但是没有内容返回
// 206: 客户端进行了范围请求，服务器执行了这部分get请求
// 301: 永久重定向
// 302: 临时重定向
// 304: 命中协商缓存时返回
// 400: 请求报文存在语法错误
// 401: 发送的请求需要有通过http认证的认证信息
// 403: 请求资源的访问被服务器拒绝
// 404: 服务器上无法找到该请求的资源
// 405: 该请求方法不被服务器允许
// 500: 服务器执行请求时发生了错误
// 503: 服务器处于停机或负载 无法正确处理请求

// 400: 请求报文存在语法错误
// 401: 请求需要有通过HTTP认证的认证信息
// 403: 请求资源的访问被服务器拒绝
// 404: 服务器上找补刀该请求的资源
// 405: 请求方法不被服务器允许
// 500: 服务器执行请求时发生了错误

// XSS攻击
// XSSk跨站脚本攻击 浏览器向服务器发送请求时被注入脚本攻击 攻击类型 存储型 反射型 DOM型
// 防御措施 输入输出过滤 添加http-only请求头 锁死cookie
// CSRF跨站请求伪造 黑客通过网站B诱使得用户访问已经登录的网站A，做一些违背意愿的操作,防御措施 请求时验证http请求头的refer信息，请求时传token，加验证码

// cookie localstorage sessionstorage
// 都存储在客户端，cookie存储大小只有4k，l和s有5mb以上，cookie在设置的过期时间内一直有效，lolcati为永久存储，关闭浏览器之后数据仍然存在，除非自己删除，ses在关闭当前浏览器后自动删除，cookie会自动传递到服务器，l和s会被保存在本地
// 同源策略 协议域名端口一致
// 解决跨域CORS和JSONP

// 修改响应头res.header('access-contorl-allow-orign'),前端定义一个handleCallback函数,然后通过script标签传入callback=hanldeCallbak
// 前端定义handleCallback函数，然后通过script标签传入callback=handleCallback,服务器端使用这个handlecallback然后传入对应的数据，前端就跨域拿到对应的数据

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
//     target.push(item);
//   }
// });
// console.log(target);

// const arr = [1,2,3,4,4]
// console.log(Array.from(new Set(arr)))
// const arr = [1, 2, 3, 4, 4, 3];
// const res = arr.filter((item, index) => {
//   return arr.indexOf(item) === index;
// });
// console.log(res);
// const arr = [1, [2, [3, [4, 5]]], 6];
// function flatten(arr) {
//   return arr.reduce((result, item) => {
//     return result.concat(Array.isArray(item) ? flatten(item) : item);
//   }, []);
// }
// console.log(flatten(arr));
// console.log([] instanceof Array);
// console.log(Array.isArray([]));

// let obj1 = {
//   p: { a: 1, b: 2 },
// };
// let newObj = { ...obj1 };
// newObj.p.a = 2;
// console.log(obj1);

// let const var

// let和const有块级作用域
// var存在变量提升，let和const没有
// var声明的变量会被添加到全局对象下
// var可以重复声明，let和const不行
// const和let存在暂时性死区，需要声明后才能调用
// const 必须有初始值，let和var不用

// const 声明的常量可以修改，对象类型的内存地址不变

// 箭头函数的this指向父级作用域中的this
// call bind apply无法改变箭头函数中的this指向
// 箭头函数没有prototype
// 不能作为构造函数使用，没有自己的this
// const a = {
//   a: 1,
//   b: 2,
//   c: 3,
// };
// for (let k in a) {
//   console.log(k);
// }

// const arr = [1, 2, 3, 4];
// for (let k of arr) {
//   console.log(k);
// }

// call bind apply
// call传递的是参数列表，
// apply传递的是数组

// call、apply改变this趾向后直接调用
// bind会返回对应的函数
// 浏览器缓存 promise 项目描述 防抖节流  闭包

// 把内层元素绑定的事件绑定到外层元素上，通过事件对象拿到当前元素进行操作，

// beforeCreate: 实例初始化之后数据观测、事件配置之前调用，这时候data、methods、computed watch还没初始化 无法访问
// created: 可以拿到data里的数据和调用methods里的方法，如果需要拿到DOm需要使用this.$nextTick
// beforeMount: 挂载前调用，编译模板、创建虚拟DOM
// mounted: 挂载后调用，DOM创建好了，可以使用refs操作DOM
// beforeupdate：更新前调用，数据改变但是DOM还没改变
// updated 更新后调用，DOm已经更新
// beforedestory 销毁前带哦用，实例仍然可以使用
// destroy：销毁后调用，移除事件监听，消除所有子实力

// props/$emit
// vuex
// provide/inject
// $attrs
// ref

// 检测数据变化后并作出响应
// 主要是通过
// 监听器 递归遍历对象的所有属性，使用object.defineProperty设置各个属性的setter和getter，一旦数据发生变化，通知订阅者，更新视图
// 解析器 解析vue模板指令，将变量替换成数据，指令对应的节点绑定更新函数，添加订阅者，一旦数据发生变化，更新视图
// 订阅者：订阅监听器中属性的变化，一旦属性发生变化，调用自身的update函数，触发解析器中的更新函数，更新视图
// 订阅器: 收集订阅者，管理监听器和订阅者
// vue双向数据绑定使用vue的指令v-model是一个语法糖，可以绑定一个响应式的数据，默认情况下是绑定一个value属性和对input事件的监听

// computed和watch的区别
// computed具有缓存性，只有当他依赖的数据发生变化时才会重新计算产生新数据，watch监听的是现有数据，参数是newValue和oldvalue

// 为什么data是一个函数
// data如果是对象的话，对象是引用类型，保存的是内存地址，造成所有实例都公用一份，会产生一变多变的情况，如果是一个函数，他会重新返回一份新的data，让组件各自维护各自的数据

// nextTick vue采用的是异步更新策略，数据更新后DOM不会理解更新，而是开启一个任务队列，缓冲在同一事件循环中发生变化的所有数据，减少DOM操作，this.nextTick接受一个回调函数将改回带哦用放在DOM更新后调用，更新后元素的高度
// keep-alive是vue的内置组件，能在组件切换的过程中将状态缓存下来，防止DOM重复渲染

// v-show和v-if
// 都是控制元素显示和隐藏一个是通过display: none来控制 一个是对DOM元素的增加和删除，v-show适合频繁切换的常见

// vuex集中式存储组件状态
// state: 存储数据
// getters: 从state中派生出来的数据，类似计算属性，只有当他依赖的数据发生变化后才会重新计算
// mutation:s: 定义改变state中数据的方法，必须是同步函数 store.commit
// actions:提交mutations，可以包含任何异步操作，store.dispatch
// modules: 将vuex模块化

// 一次只能监听一个属性，需要遍历才能监听所有，如果属性值是也给对象则需要递归遍历，无法监听属性的添加或者删除，无法监听数组的拜年话
// proxy直接监听整个对象，返回一个新对象

// vue3性能更好，代码体积小，对ts支持不错

// ref: 一般用来定义基本数据类型的响应式数据，使用值需要.value
// reactive: 一般用来定义引用类型的响应式数据
// toref: 为响应式数据的某个属性创建一个新的ref
// torefs: 为响应式数据的属性创建对应的ref

// teleport 将组件中的html节点挂载到任意位置
// 组件可以包含多个根元素
// 单个组件支持多个v-model绑定 prop: modelValue update:modelValue

// hash 改变的是#后的值，不会像服务器发送请求，history刷新的时候回想浏览器发送请求如果没有对以后给的数据返回会返回404