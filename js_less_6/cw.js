// - Дано список імен.
    let n1 = 'Harry..Potter'
    let n2 = 'Ron---Whisley'
    let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
    let cleanString = (a,d,f) => {
        let dot = n1.replaceAll('.', ' ');
        let line = n2.replaceAll('-',' ');
        let underLine = n3.replaceAll('_',' ');
        document.write(dot);
        document.write(`<br>`)
        document.write(line);
        document.write(`<br>`)
        document.write(underLine);
}
        cleanString()

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

        let RandomArr = (limit) => {
            let numbers = [];
            numbers.push (Math.round(Math.random() * limit));
            console.log(numbers);
        }
            RandomArr(100)

// - створити (або згенерувати, за допомог  и попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
            let arrRandom = [Math.round(Math.random()* 20),Math.round(Math.random()* 20),Math.round(Math.random()* 20)];
            let sort = arrRandom.sort((num1, num2) => {
                return num1 - num2;
            });
            console.log(sort)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

                let numb = [Math.round(Math.random()* 20),Math.round(Math.random()* 20),Math.round(Math.random()* 20)];
                let filter = numb.filter( value => value % 2 === 0)
                console.log(filter)


// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
            let RandomArrow = [Math.round(Math.random()* 20),Math.round(Math.random()* 20),Math.round(Math.random()* 20)];
            let map = RandomArrow.map(number =>{
               return number
            })
    console.log(map)

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
    // sortNums('ascending') // [3,11,21]
    // sortNums('descending') // [21,11,3]
        function sortNums(number,direction) {
        if (direction === "ascending"){
            return number.sort((a,b) => a - b);
        } else if (direction === "descending"){
            return number.sort((a,b) => b - a);
        }
            return nums
        }
        console.log(sortNums(nums,"descending"))
        console.log(sortNums(nums,"ascending"))
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
        let sortDuration = coursesAndDurationArray.sort((num1, num2) => {
            return num1.monthDuration - num2.monthDuration;
        })
        console.log(sortDuration)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

    let filterCourses = coursesAndDurationArray.filter(value => {
        if (value.monthDuration > 5){
            return true
        } else {
            return false
        }
    })
        console.log(filterCourses)