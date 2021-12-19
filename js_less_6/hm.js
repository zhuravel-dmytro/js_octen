// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
    console.log('hello world'.length);
    console.log('lorem ipsum'.length);
    console.log('javascript is cool'.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
        let  upperCase = ['hello world', 'lorem ipsum', 'javascript is cool'];
        console.log(upperCase[0].toUpperCase())
        console.log(upperCase[1].toUpperCase())
        console.log(upperCase[2].toUpperCase())
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
        let  LoweCase = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
        console.log(LoweCase[0].toLowerCase())
        console.log(LoweCase[1].toLowerCase())
        console.log(LoweCase[2].toLowerCase())
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
        let str = ' dirty string   '
        console.log(str.length);// просто для порівняння кількості символів
        let clear = str.slice(1,13);
        console.log(clear)
        console.log(clear.length);// просто для порівняння кількості символів
        // мабуть правильніше
        let trim = str.trim()
        console.log(trim)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
        let strToArray = 'Каждый охотник желает знать';
        function stringToarray(){
           let split = strToArray.split(' ');
            document.write(split); // ['Каждый', 'охотник', 'желает', 'знать']
            console.log (split); // ['Каждый', 'охотник', 'желает', 'знать']
        }
            stringToarray()
//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
        let strString = 'Каждый охотник желает знать';
        function delete_characters(strString, length){
            return strString.substring(0,length);
        }
        document.write(delete_characters(strString, 7)); // Каждый
        console.log(delete_characters(strString, 7)); // Каждый
//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
        let strWithoutDash = "HTML JavaScript PHP";
        function insert_dash(strWithoutDash){
            return strWithoutDash.replaceAll(' ', '-').toUpperCase();
        }
        document.write(insert_dash(strWithoutDash)); // 'HTML-JAVASCRIPT-PHP'
        console.log(insert_dash(strWithoutDash)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
        let LowerString = 'lower string';
        function StringLowerCase (LowerString){
           return LowerString[0].toUpperCase() + LowerString.slice(1);
        }
        console.log(StringLowerCase(LowerString));
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
        let capitalize = (str) => {
            return str.split(' ').map(word=>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
        };
        document.write(capitalize('okten hi you are welcome'));
        console.log(capitalize('okten hi you are welcome'));

