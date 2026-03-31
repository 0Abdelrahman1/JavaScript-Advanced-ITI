//  var propName = 'window global variable'
//  //shared function
// function display(){
//     console.log(this)
//     return this.propName
// }
// // alert('hello')
// console.log(display())
// var obj ={
//     propName:"obj",
//     skills:[],
//     anotherObj:{},
//     // display:function(){
//     //     // return 'hello display fun'
//     //     return this.propName
//     // }
//     display:function (){
//         console.log(this)
//         return propName
//     }
// }
// obj.propAge = 20

// var obj2 = {
//     propName:"obj2",
//     skills:[],
//     anotherObj:{},
//     // display:function(){
//     //     // return 'hello display fun'
//     //     return this.propName
//     // }
//     display:display

//     ,propAge:25
// }

// var obj3 = {
//     propName:"obj3",
//     skills:[],
//     anotherObj:{},
//     // display:function(){
//     //     // return 'hello display fun'
//     //     return this.propName
//     // }
//     display:display
//     ,propAge:25
// }

// console.log(obj.display())
// console.log(obj2.display())
// console.log(obj3.display())
// console.log(obj)
// console.log(obj.hasOwnProperty('propAge'))
// console.log(obj.hasOwnProperty('prop'))

// const myObj = new Object()
// myObj.nm = "ali"
// myObj.age=25

// myObj.nm = "ahmed"

// //function statement
// function fun(a,b){
//     return a+b
// }

// var x = 1;console.log(x)
// var y = 'str'

// //function expression
// //anonymous function
// // console.log(myfun())
// var myfun = function testfun(a,b){
//     return a+b
// }

// //call back/anonymous function
// setTimeout(function(){
//     console.log('hello')
// },1000)

// function newFun(){
//     return function(){
//         console.log('test inner function')
//     }
// }

// var res = newFun()//


// var arr = [display]

// setTimeout(display,1000)

// var newFun2 = new Function('a','b','c','return a + b')
// console.log(newFun2(1,2,1))

// 1;
// "str";
// / /g;
//immediate invoke function expression
// ;(function(){var x = 1;console.log('expression')})();
// var res = (function(x,y){ console.log('test')
//         var obj = {
//         nm:x,
//         age:y
//     }
//     // return obj
//     window.libObj = obj
// }('ali',20))
// !function(){
//     console.log('test anonymous function')
// }()
// void function(){
//     console.log('test')
//     var obj = {
//         nm:'ali',
//         age:20
//     }
//     // return obj
//     window.libObj = obj
// }()
// ((x+y)+())

// var add=function (){
//     console.log(arguments)
//     // sum
    
// }
// console.log(add.length)
// add(1,2,3,4,5,6)
// console.log(add.length)

/**apply,call,bind */

var str = 'hello world'
// console.log(str.join())
// console.log([].join.apply(str,['*','-']))
// console.log([].join.call(str,'*'))

// var res = [].join.bind(str)
// console.log(res('&'))

console.log([].toReversed.apply(str))//reverse



linkedList={
    data:[{val:5}]
}



[{val:3},{val:5},{val:7}]
// linkedList.insert(2,1)

linkedList.remove(5,1)