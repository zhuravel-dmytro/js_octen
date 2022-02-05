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
                id.classList.add('id')
                id.innerText = user.id;

            let btn = document.createElement('a');
                btn.href = 'html/user-details.html?data=' + JSON.stringify(user);
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