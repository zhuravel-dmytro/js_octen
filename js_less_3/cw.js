// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let arr = [2,17,13,6,22,31,45,66,100,-18];
//     1. перебрати його циклом while
//         let i =0;
//         while (i < arr.length){
//             console.log(`${arr[i]}`)
//             i++
//         }
//     2. перебрати його циклом for
//         for (i = 0; i < arr.length; i++){
//             console.log(`${arr[i]}`)
//         }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
//         let i = 0;
//         while (i < arr.length){
//             if (i % 2 !== 0){
//                 console.log(arr[i]);
//             }
//             i++;
//         }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//     for (i =0; i < arr.length; i++){
//         const inarr = arr[i];
//         if (inarr % 2 !== 0){
//             console.log(inarr);
//         }
//     }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
//                 let i = 0;
//                 while (i < arr.length){
//                     if (i % 2 === 0){
//                         console.log(arr[i]);
//                     }
//                     i++;
//                 }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//             for (i =0; i < arr.length; i++){
//                 const inarr = arr[i];
//                 if (inarr % 2 === 0){
//                     console.log(inarr);
//                 }
//             }
// 7. замінити кожне число кратне 3 на слово "okten"

// підглянув вирішення у відео практика
 
        // for (item of arr){
        //     if (item % 3 === 0){
        //         item = "okten";
        //         document.write(item + " ")
        //     }
        // }
// 8. вивести масив в зворотньому порядку.
//             for (let i = arr.length - 1; i >= 0; i--) {
//                 let item = arr[i];
//                 if (item % 3 === 0){
//                     item = "okten";
//                     document.write(item + " ")
//                 }
//             }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//   1.перебрати його циклом while
//           let i = arr.length - 1;
//            while (i>=0){
//                console.log(arr[i])
//            i--
//         };


    // 2. перебрати його циклом for
            // for (let i = arr.length - 1; i>=0; i--){
            //     console.log(arr[i])
            // }

//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
//         let i = arr.length - 1;
//         while (i>=0){
//             if (i % 2 !== 0){
//                 console.log(arr[i]);
//             }
//             i--;
//         }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//     for (i = arr.length - 1; i>=0; i--){
//         let inarr = arr[i];
//         if (inarr % 2 !== 0){
//             console.log(inarr);
//         }
//     }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
//                 let i = arr.length -1;
//                 while (i>=0){
//                     if (i % 2 === 0){
//                         console.log(arr[i]);
//                     }
//                     i--;
//                 }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
//             for (i = arr.length - 1; i>=0; i--){
//                 let inarr = arr[i];
//                 if (inarr % 2 === 0){
//                     console.log(inarr);
//                 }
//             }