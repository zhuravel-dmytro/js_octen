// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//     let array = [1,45,225,-4,6.3];
//     console.log(array)
//     let arraystring = ['party','book','js','green','apple'];
//     console.log(arraystring)
//     let arraymix = ['program', 33, true,'octen',-45];
//     console.log(arraymix)

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//     let arr = [];
//     for (let i = 0; i < 3; i++){
//         console.log(arr[i]= [1,45,'sadg'])
//     }


// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//     for (let a = 0; a <10; a++) {
//         document.write('<div>10 блоків div</div>');
//     }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//     for (let i = 1; i <= 10; i++) {
//         document.write(`<div>10 блоків div це - ${i}</div>`);
//     }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//        let h = 0;
//         while (h < 20){
//            document.write(`<h1>text</h1>`)
//             h++
//         }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//             let h = 1;
//             while (h <= 20){
//                 document.write(`<h1>text${h}</h1>`)
//                 h++
//             }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//     let arr = [3,64,7,89,2,54,6,89,-43,3];
//     for (let i = 0; i < 10; i++){
//         console.log(`${arr[i]}`)
//     }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
//             let arr = ['octen','apple','day','john','git','cupple','mac','idj','foo','10'];
//             for (let i = 0; i < arr.length; i++){
//                 console.log(`${arr[i]}`)
//             }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//             let some = [32,'arr',true,'apple',432,43,5,'lisa',44,'ten'];
//             for (let i = 0; i < some.length; i++){
//                 console.log(`${some [i]}`)
//             }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//             let arr = ['a', 33, true,'octen',false,'gggf',34,'8',134,'text'];
//             for (const inarr of arr){
//                 if (typeof inarr === "boolean"){
//                     console.log(inarr)
//                 }
//             }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
//                 let arr = ['a', 33, true,'octen',false,'gggf',34,'8',134,'text'];
//                 for (const inarr of arr){
//                     if (typeof inarr === "number"){
//                         console.log(inarr)
//                     }
//                 }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//                 let arr = ['a', 33, true,'octen',false,'gggf',34,'8',134,'text'];
//                 for (const inarr of arr){
//                     if (typeof inarr === "string"){
//                         console.log(inarr)
//                     }
//                 }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//     let arr = [];
//     for (i = 0; i < 10; i++){
//         console.log(arr[i] = ['dsaf',34,true,'afterv',44,'sd',-57,'8','octen',5])
//     }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//         for (i = 1; i <= 10; i++){
//             console.log(`${i}`)
//             document.write(`${i}`)
//         }



// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
            for (i = 0; i <= 100; i++){
                    console.log(i)
                    document.write(i)
            }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
            for (i = 1; i <= 200; i++){
                console.log(`${i}`)
                document.write(`${i}`)
            }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write