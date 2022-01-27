// Все робити за допомоги js.
// - створити блок,
    let block = document.createElement('div');
//     - додати йому класи wrap, collapse, alpha, beta
    block.classList.add('wrap');
    block.classList.add('collapse');
    block.classList.add('alpha');
    block.classList.add('beta');
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
    block.style.backgroundColor = '#ccc';
    block.style.color = '#b78a3e';
    block.style.fontSize = '20px';
// створюю текст щоб перевірити
    block.innerText = 'оранжевий текст на сірому фоні розміром 20px'
// - додати цей блок в body.
    document.body.appendChild(block);
// - клонувати його повністю, та додати клон в body.
    document.body.appendChild(block.cloneNode(true));

// Взяти файл template1.html та додати в нього скріпт
// template1.html код


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
        for (const courses of coursesAndDurationArray){
            let block = document.createElement('div');
            block.innerText = `${courses.title} ${courses.monthDuration}`;
            document.body.appendChild(block);
        }

// - Є масив
let coursesAndDurationArray2 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
    for (const cours of coursesAndDurationArray2){
        let blockDiv = document.createElement('div');
        blockDiv.classList.add('item');
        let blockH1 = document.createElement('h1');
        blockH1.classList.add('heading');
        blockH1.innerText = `${cours.title}`;
        let blockP = document.createElement('p');
        blockP.classList.add('description');
        blockP.innerText = `${cours.monthDuration}`;



        blockDiv.appendChild(blockH1);
        blockDiv.appendChild(blockP);
        document.body.appendChild(blockDiv);
    }