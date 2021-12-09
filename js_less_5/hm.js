// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
    let area = (a,b) => a * b;
    console.log(area(5,4));
// - створити функцію яка обчислює та повертає площу кола
    let circle = (a,b) => a * b;
    console.log(3.14 * circle(5,4));

// - створити функцію яка обчислює та повертає площу циліндру
    let cylinder = (h,r,p) => {
        if (p === 3.14) {
            return p * (h + r);
        } else (p !== 3.14)
        {
            return 0;
        }
    }
        console.log(cylinder(2,4,3.14))
// - створити функцію яка приймає масив та виводить кожен його елемент
    let numbers = (...arg) => {
        for (const item of arg)
        console.log(item)
    }
    numbers(1,23,4,5,67)

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
    let paragraf = (text) => {
        document.write(`<p>`);
        document.write(text);
        document.write(`</p>`);
    }
    paragraf("задаю текст через аргумент")
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
    let li = (text) => {
        document.write(`<ul>`);
            for (i = 0; i < 3; i++){
                document.write(`<li>${text}</li>`)
            }
            document.write(`</ul>`);
        }
        li("задаю текст через аргумент")
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
    let ul = (text,limit) => {
    document.write(`<ul>`);
    for (i = 0; i < limit; i++){
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`);
}
    ul("задаю текст через аргумент",10)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

    let anyArray = [true,'Stepan Giga', 2021, 'Ivo Bobul'];
    let primitives = (array) => {
        document.write(`<ol>`)
            for (let i = 0; i < array.length; i++) {
                document.write(`<li>${array[i]}</li>`);
            }
        document.write(`</ol>`)
    }
        primitives(anyArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

    let newArray = [{id: 1, name: 'Soso', age: 55}, {id: 2, name: 'Valeriy', age: 50}, {id: 3, name: 'Ivo', age: 65}];
    let objArray = (array) => {
         for (const arrayElement of array) {
            document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
        }
    }
        objArray(newArray);