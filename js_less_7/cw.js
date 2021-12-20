
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

        function CarInfo1 (model, producer,year,maxspeed,engine){
            this.model = model;
            this.producer = producer;
            this.year = year;
            this.maxspeed = maxspeed;
            this.engine = engine;
            this.drive = function (){
                console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
            };
            this.info = function () {
                for (const key in this) {
                    if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`) // переписав з resolve, зрозкміло але сам не догнав
                }
            };
            this.increaseMaxSpeed = function (newSpeed){
                this.maxspeed = this.maxspeed + newSpeed;
            };
            this.changeYear = function (newValue){
                this.year = newValue;
            };
            this.addDriver = function (driver){
                this.drive = driver;
            };
        }
        let addCar = new CarInfo1('Peugeot', 'France', 2000, 270, 2.0); //  з resolve
        console.log(addCar);
        addCar.drive();
        addCar.info();
        addCar.increaseMaxSpeed(20);
        addCar.drive();
        addCar.changeYear(2010)
        addCar.info();
        addCar.addDriver('Dimas')
        console.log(addCar)
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
        class CarInfo {
            constructor(model, producer,year,maxspeed,engine) {
                this.model = model;
                this.producer = producer;
                this.year = year;
                this.maxspeed = maxspeed;
                this.engine = engine;
            }
            drive() {
                console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
            }
            info() {
                for (const key in this) {
                    console.log(`${key} - ${this[key]}`)
                }
            }
            newMaxSpeed (newSpeed) {
                this.maxspeed = this.maxspeed + newSpeed;
            }
            changeYear (newValue) {
                this.year = newValue;
            }
            addDriver (driver) {
                this.driver = driver;
            }
        }

        let CarInfo2 = new CarInfo('Peugeot', 'France', 2000, 270, 2.0);
        console.log(CarInfo2);
        CarInfo2.drive();
        CarInfo2.info();
        CarInfo2.newMaxSpeed(20);
        CarInfo2.drive();
        CarInfo2.changeYear(2010)
        CarInfo2.info();
        CarInfo2.addDriver('Vasil')
        console.log(CarInfo2)




// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
    class Cinderella {
            constructor(name,age,size) {
                this.name = name;
                this.age = age;
                this.size = size;
            }
    }
    let CinderellaArrow = [
        new Cinderella ('Alla',24,44),
        new Cinderella ('Inna',30,38),
        new Cinderella ('Natali',23,34),
        new Cinderella ('Katya',24,37),
        new Cinderella ('Olia',21,44),
        new Cinderella ('Nastya',20,39),
        new Cinderella ('Olenka',27,37),
        new Cinderella ('Lila',32,38),
        new Cinderella ('Maryanna',23,39),
        new Cinderella ('Sofi',17,36),
    ]
    console.log(CinderellaArrow)
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
        class PrinceClass {
            constructor(name,age,findshoe) {
                this.name = name;
                this.age = age;
                this.findshoe = findshoe;
            }
        }
        let Prince = new PrinceClass (Andean,25,34)
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку