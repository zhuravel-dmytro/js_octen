
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
                    wrap.classList.add('wrap');
                for (const comment of commentsArr){
                    let post = document.createElement('div');
                        post.classList.add('postBlock')
                    let InfoPost = document.createElement('div');
                        InfoPost.classList.add('InfoPost');
                    let PostId = document.createElement('div');
                        PostId.classList.add('information');
                        PostId.classList.toggle('PostId');
                        PostId.innerText = comment.postId;
                    let id = document.createElement('div');
                        id.classList.add('information');
                        id.innerText = comment.id;
                    let name = document.createElement('div');
                        name.classList.add('information');
                        name.innerText = comment.name;
                    let email = document.createElement('div');
                        email.classList.add('information');
                        email.innerText = comment.email;
                    let body = document.createElement('div');
                        body.classList.add('bodyComment')
                    let comments = document.createElement('div');
                        comments.classList.add('comments')
                        comments.innerText = comment.body;


                    post.appendChild(InfoPost);
                    InfoPost.appendChild(PostId);
                    InfoPost.appendChild(id);
                    InfoPost.appendChild(name);
                    InfoPost.appendChild(email);
                    post.appendChild(body);
                    body.appendChild(comments);
                    wrap.appendChild(post);
                }


                document.body.appendChild(wrap);
            })

