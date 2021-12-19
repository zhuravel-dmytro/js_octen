// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

      function User (id, name, surname, email, phone){
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
       }
        let user = new User(1,'Dimas',"Zhuravel","zhuravel@gmail.com","+380935184413")
        console.log(user)

// створити пустий масив, наповнити його 10 об'єктами new User(....)
        let usersArr = [
            new User( 10,'Dimas',"Zhuravel","zhuravel@gmail.com","+380935184413"),
            new User( 23,'Vasia',"Vasok","Vasok@gmail.com","+380939364416"),
            new User( 3,'Olga',"Trofimuk","Trofimuk@gmail.com","+380935588915"),
            new User( 4,'Oleg',"Sus","Sus@gmail.com","+380935589573"),
            new User( 56,'Andrey',"Turkevuch","Turkevuch@gmail.com","+380946186615"),
            new User( 7,'Stepan',"Pavluk","Pavluk@gmail.com","+380935346457"),
            new User( 18,'Tamara',"Nikolska","Nikolska@gmail.com","+380935484486"),
            new User( 8,'Pavlo',"Zhuravlov","Zhuravlov@gmail.com","+380245184414"),
            new User( 1,'Inna',"Semenchuk","Semenchuk@gmail.com","+380935186722"),
            new User( 66,'Yura',"Merkyriev","Merkyriev@gmail.com","+380934584411"),
        ];
    console.log(usersArr)
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
            let filter = usersArr.filter((users) =>{
                if (users.id %2 === 0) {
                return users
                }
            })
            console.log(filter)
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
            let sortUserId = usersArr.sort((num1,num2)=> num1.id - num2.id)
            console.log(sortUserId)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
 class Client {
        constructor(id, name, surname , email, phone, order) {
            this.id = id;
            this.name = name;
            this.surname = surname;
            this.email = email;
            this.phone = phone;
            this.order = order;
        }
 }
 console.log(Client)
// створити пустий масив, наповнити його 10 об'єктами Client


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)