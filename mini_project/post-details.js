
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


        let url = new URL(location.href);
        let postInfo = url.searchParams.get('post');
        let obj = JSON.parse(postInfo);

        fetch(`https://jsonplaceholder.typicode.com/posts/${obj.id}/comments`)
            .then(comments => comments.json())
            .then(commentsArr => {
                console.log(commentsArr);

                let wrap = document.createElement('div');
                for (const comment of commentsArr){
                    let post = document.createElement('div');
                    let PostId = document.createElement('div');
                        PostId.innerText = comment.postId;
                    let id = document.createElement('div');
                        id.innerText = comment.id;
                    let name = document.createElement('div');
                        name.innerText = comment.name;
                    let email = document.createElement('div');
                        email.innerText = comment.email;
                    let body = document.createElement('div');
                        body.innerText = comment.body;

                    post.appendChild(PostId);
                    post.appendChild(id);
                    post.appendChild(name);
                    post.appendChild(email);
                    post.appendChild(body);
                    wrap.appendChild(post);
                }


                document.body.appendChild(wrap);
            })

