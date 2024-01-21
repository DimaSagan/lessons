"use strict"



Задача №1
Дано в html: три елементи з класом item.
При кліку на кожен з елментів додати клас active,
при повторному кліку прибрати клас 

*/

const items = document.querySelectorAll(".item")
items.forEach(item => {
    item.addEventListener("click", itemActive)
    function itemActive() {
        item.classList.toggle("active")
    }
})

/* 
Задача №2
Дано в css/scss: body прозорий
При повному завантаженню сторінки додати клас до body який прибирає прозорість.
*/

const bodyElement = document.body
window.addEventListener("load", pageLoaded)
function pageLoaded(e) {
    bodyElement.classList.add("load")
}

/*
Задача №3
Дано в html: header main footer
Пи наведенні курсору на header змінювати колір фону у footer.
Коли курсор йде з header повертати початковий фон для footer.
*/
const header = document.querySelector(".header")
const footer = document.querySelector(".footer")
header.addEventListener("mouseenter", changeFooter)
header.addEventListener("mouseleave", reChangeFooter)

function changeFooter(e) {
    footer.style.backgroundColor = "red";
}
function reChangeFooter(e) {
    footer.style.backgroundColor = "rgb(173, 205, 110)";
}

/*
Задача №4
Дано в html: текст, елемент з класом item, текст. Так, що елемент з класом item за межами в'юпотрта.
Створити функцію яка будує інтервал який буде змінювати контент в елементі item виводячи цифру яка збільшується на одиницю: 1 2 3 ... і т.д.
Затримка між зміною числа, та до якого числа має працювати інтервал має задаватись в дата атрибутах елемента item.
Функція має запустатить коли ми доскролюємо до елементу item (його видно), і не запускатись повторно.
*/

let item = document.querySelector(".my-timer")

let options = {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.3,
};

let callback = (entries, observer) => {
    entries.forEach((entry) => {
        const targetElement = entry.target;
        if (entry.isIntersecting) {
            const value = targetElement.dataset.value = +"100"
            const steps = targetElement.dataset.steps = +"25"

            let startValue = 1
            let timer = setInterval(() => {
                startValue === value ? clearInterval(timer) : item.textContent = ++startValue
            }, steps)

            targetElement.dataset.observed = true;
            observer.unobserve(targetElement)
        }
    });
}

let observer = new IntersectionObserver(callback, options);

const target = item;
observer.observe(target);




