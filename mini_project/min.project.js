//     В index.html
//     1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
//     2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
//     3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users =>{
        console.log(users); // перевірка
        let wrap = document.createElement('div');
            wrap.classList.add('wrap')
        for (const user of users){
            let box = document.createElement('div');
                box.classList.add('box');

           let name = document.createElement('div');
                name.innerText = user.name;
                name.classList.add('divForUser');

            let id = document.createElement('div');
                id.innerText = user.id;

            let btn = document.createElement('a');
                btn.href = 'user-details.html?data=' + JSON.stringify(user);
                btn.classList.add('button');
                btn.innerText = 'детальніше';

            box.appendChild(id)
            box.appendChild(name)
            box.appendChild(btn)
            wrap.appendChild(box)
        }
        document.body.appendChild(wrap)
    })
        let btn = document.createElement('button');


// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)
