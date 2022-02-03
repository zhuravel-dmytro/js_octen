// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//
let url = new URL(location.href);
let DataObject = url.searchParams.get('data');
let obj = JSON.parse(DataObject);
console.log(obj)
    let detailInfo = document.createElement('div');
    let h1 = document.createElement('h1');
        h1.innerText = obj.name;
    let OneH2 = document.createElement('h2');
        OneH2.innerText = 'Information';
        let info = document.createElement('div');
            info.classList.add('infoBlock');
            info.innerText = `id ${obj.id} | name ${obj.name} | username ${obj.username} | email ${obj.email} | website ${obj.website} `;
        let TwoH2 = document.createElement('h2');
            TwoH2.innerText = 'Address';
        let info2 = document.createElement('div');
            info2.classList.add('infoBlock');
            info2.innerText = `city: ${obj.address.city} | street: ${obj.address.street} | suite: ${obj.address.suite} | zipcode: ${obj.address.zipcode}
            geo: ${obj.address.geo.lat} | ${obj.address.geo.lng} `;
        let ThreeH2 = document.createElement('h2');
            ThreeH2.innerText = 'Company';
        let info3 = document.createElement('div');
        info3.classList.add('infoBlock');
        info3.innerText = `name: ${obj.company.name} | bs: ${obj.company.bs} | catchPhrase: ${obj.company.catchPhrase} `;


       let btnPost = document.createElement('a');
            btnPost.classList.add('button');
            btnPost.innerText = 'post of current user';
            btnPost.onclick = (e)=>{
                console.log(e)
                    fetch(`https://jsonplaceholder.typicode.com/users/${obj.id}/posts`)
                        .then(posts => posts.json())
                        .then(postsArr =>{
                            for (post of postsArr){
                                let title = document.createElement('div');
                                title.classList.add('title');
                                title.innerText = post.body;
                                document.body.appendChild(title)
                            }
                        })
}

    detailInfo.appendChild(h1)
    detailInfo.appendChild(OneH2)
    detailInfo.appendChild(info)
    detailInfo.appendChild(TwoH2)
    detailInfo.appendChild(info2)
    detailInfo.appendChild(ThreeH2)
    detailInfo.appendChild(info3)
    detailInfo.appendChild(btnPost)
    document.body.appendChild(detailInfo)
