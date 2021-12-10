
//Всі функції повинні бути описані стрілочним типом!!!!

//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
        let minNum = (num1,num2,num3) => {
        if ( num1 < num2 && num1 < num3){
            console.log(num1)
        } else if( num2 < num1 && num2 < num3){
            console.log(num2)
        }else if( num3 < num1 && num3 < num2){
            console.log(num3)
        }
        }
        minNum(23,45,4)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
    let maxNum = (num1,num2,num3) => {
        if ( num1 > num2 && num1 > num3){
            console.log(num1)
        } else if( num2 > num1 && num2 > num3){
            console.log(num2)
        }else if( num3 > num1 && num3 > num2){
            console.log(num3)
        }
    }
    maxNum(23,45,4)

// - створити функцію яка повертає найбільше число з масиву
    let MaxArr = (...nums) => {
    console.log(Math.max (...nums))
    }
        MaxArr(1,435,68,98,9,0,6,33)
// - створити функцію яка повертає найменьше число з масиву
        let MinArr = () => {
            console.log(Math.min (1,435,68,98,9,0,6,3))
        }
        MinArr()
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
    let sum = (a,b,c) => a + b + c;
    console.log(sum(1,2,10));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
    let middle = (num1,num2,num3) => (num1 + num2 + num3) / 3;
    console.log(middle(4,5,6)) // 15 / 3 = 5
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
        let randomArr = () => {
        arr = [Math.round(Math.random()*50),Math.round(Math.random()*50),Math.round(Math.random()*50)]
        console.log(arr)
    }
         randomArr()

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
    let randomArrWithLimit = (limit) => {
        arr = [Math.round(Math.random()*limit),Math.round(Math.random()*limit),Math.round(Math.random()*limit)]
        console.log(arr)
    }
        randomArrWithLimit(20)

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

        let arrMaxToMin = () => {
               let arr = [1,2,3,5];
                let revers = arr.reverse();
                console.log(revers)
            }
                arrMaxToMin()