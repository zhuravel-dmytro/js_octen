// - створити функцію яка обчислює та повертає площу прямокутника висотою
//     function kyt (a,b){
//     let result = a * b;
//     console.log(result)
//     }
//     kyt(5,4)
// - створити функцію яка обчислює та повертає площу кола
//     function circle (){
//     let radius = 5 * 5;
//     console.log(3.14 * radius)
//     }
//     circle()
// - створити функцію яка обчислює та повертає площу циліндру
//         function cilindr (h,r){
//         const p = 3.14;
//         console.log(p * (h+r))
//         }
//         cilindr(3,4)
// - створити функцію яка приймає масив та виводить кожен його елемент
//     function arr(numbers){
//     for (const item of numbers){
//         console.log(item)
//     }
//     }
//     arr([1,45,6,8,87])
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//     function paragraf(text){
//         document.write(`<p>`);
//         document.write(text);
//         document.write(`</p>`);
//     }
//     paragraf("задаю текст через аргумент")
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//         function paragraf(text){
//             document.write(`<ul>`);
//             for (i = 0; i < 3; i++){
//                 document.write(`<li>${text}</li>`)
//             }
//             document.write(`</ul>`);
//         }
//         paragraf("задаю текст через аргумент")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//         function paragraf(text, num){
//                     document.write(`<ul>`);
//                     for (i = 0; i < num; i++){
//                         document.write(`<li>${text}</li>`)
//                     }
//                     document.write(`</ul>`);
//                 }
//                 paragraf("задаю текст через аргумент",5)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let anyArray = [true,'Stepan Giga', 2021, 'Ivo Bobul'];
// function primitives (array){
//     document.write(`<ol>`)
//         for (let i = 0; i < array.length; i++) {
//             document.write(`<li>${array[i]}</li>`);
//         }
//     document.write(`</ol>`)
// }
// primitives(anyArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let newArray = [{id: 1, name: 'Soso', age: 55}, {id: 2, name: 'Valeriy', age: 50}, {id: 3, name: 'Ivo', age: 65}];
// function objArray(array) {
//     for (const arrayElement of array) {
//         document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
//     }
// }
// objArray(newArray);