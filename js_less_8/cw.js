// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let ChangeColor = document.getElementById('main_header');
ChangeColor.classList.add('h1')
// b) робить шириниу елементу ul 400px
let widthUl = document.getElementsByTagName('ul');
for (const w of widthUl) {
    w.style.width = '400px';
}
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let widthLink = document.getElementsByClassName('linkList');
for (const wl of widthLink) {
    wl.style.width = '50%';
}
// d) отримує текст який зберігається в елементі з класом listElement2
let txt = document.getElementsByClassName('listElement2');

// e) отримує всі елементи li та змінює ім колір фону на сірий
let bgForLi = document.getElementsByTagName('li');
for (li of bgForLi) {
    li.style.backgroundColor = "silver";
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let link = document.getElementsByTagName('a');
for (const l of link) {
    l.classList.add('anchor');
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let allLink = document.getElementsByTagName('a');
for(a of allLink){
    if(a.innerText.includes('link3')){
        a.style.fontSize = '40px' }
};
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

//  let allLinks = document.getElementsByTagName('a');
//       for(a of allLinks) {}


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let color = prompt( 'write color' );
let sub = document.getElementsByClassName('sub-header');
for(const s of sub) {
    s.style.color = color;
}
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let sub2 = document.getElementsByClassName('sub-header');
for( s of sub2) {
    if(s.innerText.includes('content 2 segment')){
        s.style.color = color
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// l) отримати елементи p та змінити їм padding на 20px
let changePaddinng = document.getElementsByTagName('p');
for(p of changePaddinng) {
    p.style.padding = '20px'
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let changeTxt = document.getElementsByClassName('text2');
for(p of changeTxt) {
    p.innerHTML = 'sep-2021';
}
