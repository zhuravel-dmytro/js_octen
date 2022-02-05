// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.
//
let url = new URL(location.href);
let DataObject = url.searchParams.get('data');
let obj = JSON.parse(DataObject);
        let wrap = document.createElement('div');
            wrap.classList.add('wrap');
    let detailInfo = document.createElement('div');
        detailInfo.classList.add('detailInfo')
    let h3 = document.createElement('h3');
        h3.innerText = `Інформація про ${obj.name}`;
    let OneP = document.createElement('p');
        OneP.innerText = 'Information';
        let info = document.createElement('div');
            info.classList.add('infoBlock');
            info.innerText = `id ${obj.id} | name ${obj.name} | username ${obj.username} | email ${obj.email} | website ${obj.website} `;
        let TwoP = document.createElement('p');
            TwoP.innerText = 'Address';
        let info2 = document.createElement('div');
            info2.classList.add('infoBlock');
            info2.innerText = `city: ${obj.address.city} | street: ${obj.address.street} | suite: ${obj.address.suite} | zipcode: ${obj.address.zipcode}
            geo: ${obj.address.geo.lat} | ${obj.address.geo.lng} `;
        let ThreeP = document.createElement('p');
            ThreeP.innerText = 'Company';
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
                            let WrapTitle = document.createElement('div');
                            WrapTitle.classList.add('WrapTitle');
                            document.body.appendChild(WrapTitle)
                            for (post of postsArr){
                                let title = document.createElement('div');
                                title.classList.add('title');
                                title.innerText = post.body;

                                let btn = document.createElement('a');
                                    btn.classList.add('button');
                                    btn.classList.toggle('btnTitle');
                                    btn.innerText = 'детальніше';
                                    btn.href = 'post-details.html?post=' + JSON.stringify(post);
                                title.appendChild(btn);
                                WrapTitle.appendChild(title)
                            }
                        })
}

    wrap.appendChild(h3)
    detailInfo.appendChild(OneP)
    detailInfo.appendChild(info)
    detailInfo.appendChild(TwoP)
    detailInfo.appendChild(info2)
    detailInfo.appendChild(ThreeP)
    detailInfo.appendChild(info3)
    wrap.appendChild(detailInfo)
    wrap.appendChild(btnPost)
    document.body.appendChild(wrap);
