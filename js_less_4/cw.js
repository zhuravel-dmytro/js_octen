// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// взяв вирішення в resolve і аж стидно стало що все так просто
// function numMin(num1, num2, num3) {
//     if (num1 < num2 && num1 < num3) {
//         document.write(num1);
//         console.log(num1);
//     } else if (num2 < num3 && num2 < num1) {
//         console.log(num2);
//         document.write(num2);
//     } else {
//         console.log(num3);
//         document.write(num3);
//     }
// };
// numMin(400, 200, 70);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
    // function numMах(num1, num2, num3) {
    //     if (num1 > num2 && num1 > num3) {
    //         document.write(num1);
    //         console.log(num1);
    //     } else if (num2 > num3 && num2 > num1) {
    //         console.log(num2);
    //         document.write(num2);
    //     } else {
    //         console.log(num3);
    //         document.write(num3);
    //     }
    // };
    //     numMах(345, 12, 64);

// - створити функцію яка повертає найбільше число з масиву
//         function maxarr(arg1,arg2,arg3,arg4,arg5,arg6){
//             console.log(Math.max (12,5,64,8,0,11))
//         }
//         maxarr()
// - створити функцію яка повертає найменьше число з масиву
//     function minarr(arg1,arg2,arg3,arg4,arg5,arg6){
//         console.log(Math.min (12,5,64,8,0,11))
//     }
//     minarr()

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

    // function arrfun (a,b,c){
    //     console.log(a,b,c);
    //     console.log(a+b+c)
    // }
    // arrfun(12,5,45)
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//     function serednee (num1,num2,num3){
//         console.log(num1 + num2 + num3 / 3)
//     }
//         serednee(34,5,7)

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function minMax(arg) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const element of arguments) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log("max ", max);
//     return min;
// }
// document.write('Мінімальне число з введених: ' + minMax(100, 20, 3, 100, 2021))

// - створити функцію яка заповнює масив рандомними числами
//     let arr = [];
//     function randomArr(){
//         arr = [Math.round(Math.random()*50),Math.round(Math.random()*50),Math.round(Math.random()*50)]
//         console.log(arr)
//     }
//     randomArr()
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
//         let arrlim = [] ;
//         function limitArrow(limit){
//             arrlim = [Math.round(Math.random()*limit),Math.round(Math.random()*limit),Math.round(Math.random()*limit)];
//             console.log(arrlim)
//         }
//             limitArrow(300)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
//             function arrMaxToMin(){
//                 arrminus = [1,2,3]
//                 for (i = arrminus.length - 1; i>=0; i--){
//                     console.log(arrminus[i])
//                  }
//             }
//                 arrMaxToMin()