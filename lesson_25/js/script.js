"use strict"

// // __________________________________________________________Відпрацювання матеріалу. ДР зі 166-го рядку_______________________________________________________________ 
// // Ширина та висота ВП
// let windowWidth = window.innerWidth
// console.log(windowWidth)

// let windowHeigth = window.innerHeight
// console.log(windowHeigth)
// // ====================

// // Визначення браузера
// console.log(navigator.userAgent)
// if (navigator.userAgent.includes("Chrome")) {
//     console.log("Браузер Хром")
// } else if (navigator.userAgent.includes("Safari")) {
//     console.log("Браузер Сафарі")
// }
// // ===================

// // Визначення ос
// console.log(navigator.platform)

// console.log(navigator.userAgentData.platform)
// // Застарілий варіант опреділяе мак як MacIntel а новій як Android О_О


// // Доступ до адресного рядка, та перенаправлення користувача
// console.log(location.href)
// location.href = "#Урок_25"
// // ===================

// //  Алерт та конфірм тест...
// // alert("Hello!")
// // let confirmTest = confirm("How u doing?")
// // console.log(confirmTest)
// // ===================


// // __________________________________________________________Навігація по документу_______________________________________________________________ 

// // Звернення до ХТМЛ
// // const htmlElement = document.documentElement
// // console.log(htmlElement)
// // ===================

// // Звернення до ХЕД та БОДІ
// // const headElement = document.head
// // console.log(headElement)
// // const bodyElement = document.body
// // console.log(bodyElement)
// // ===================

// // Звернення до першого дочірньго елемента
// const bodyElement = document.body
// // const firstChild = bodyElement.firstElementChild
// // console.log(firstChild)
// // ===================

// // Створення колекції та її перебор
// // const childNodes = bodyElement.children
// // console.log(childNodes)
// // for (let varChildData of childNodes) {
// //     console.log(varChildData)
// // }
// // ===================

// // Звертання до попередньго, наступного (його немає), та батьківского елементів для БОДІ
// // const previousSibling = bodyElement.previousElementSibling
// // console.log(previousSibling)

// // const nextSibling = bodyElement.nextElementSibling
// // console.log(nextSibling)

// // const parentElement = bodyElement.parentElement
// // console.log(parentElement)
// // ===================

// // __________________________________________________________Пошук та отримання довільного елементу_______________________________________________________________ 

// // Отримання першого знайденого обʼєкту
// const firstObject = document.querySelector(".first-section")
// console.log(firstObject)
// // ===================

// // Список статичної колекції
// const collectionObject = document.querySelectorAll(".first-section")
// console.log(collectionObject)

// collectionObject.forEach(collectionObject => {
//     collectionObject.style.color="red"
// })
// // ===================

// // Перевірка наявності батьківського об'єкта
// // const startText = document.querySelector(".text-start")
// // const firstSectionParent = startText.closest(".first-section")
// // if (firstSectionParent) {
// //     console.log("Yes")
// // } else {
// //     console.log("No")
// // }
// // ===================

// // Зміна контенту в середені обʼєкту
// // const startText = document.querySelectorAll(".text-start")
// // startText.forEach(value => {
// //     value.innerHTML = "<span>test</span>"
// // })

// // const startText = document.querySelectorAll(".text-start")
// // startText.forEach(value => {
// //     value.textContent = "<span>test</span>"
// // })
// // ===================

// // Створення нового обʼєкту
// let newObject = document.createElement('section')
// newObject.innerHTML = "<span class='test'>HEY!!!</span>"
// console.log(newObject)
// // ===================

// // Вставка створеного обʼєкта
// const wrapper = document.querySelector(".wrapper")
// wrapper.after(newObject)
// wrapper.before(newObject)
// // ===================

// // Втсавка(перенос), створеного(існуючєго) обʼєкта
// const section = document.querySelector(".first-section")
// section.insertAdjacentElement("afterbegin", newObject)

// let title = document.querySelector(".title")
// section.insertAdjacentElement("beforeend", title)
// // ===================

// // Клонування обʼєкта
// const subtitle = document.querySelector(".subtitle")
// const subtitleClone = subtitle.cloneNode(true)
// console.log(subtitleClone)
// // ===================

// // Видалення обʼєкта
// // subtitle.remove()
// // ===================


// // __________________________________________________________Стилі та класи_______________________________________________________________ 

// // Перезапис класу
// const textBlock = document.querySelector(".text-block")
// textBlock.className = "super-text-block"
// // ===================

// const section = document.querySelector(".first-section")
// section.classList.add("test")
// // section.classList.remove("test")
// section.classList.toggle("first-section")

// section.style.paddingTop = `${100}px`



// // ***********************************************______________Домашня робота______________***********************************************



// Задача №1
// Отримати в константу елемент <body>

const bodyElement = document.body

/* Задача №2
Написати функцію, яка додає в <body> список UL
з певною кількістю LI (кількість має передаватись як параметр функції, також мати значення за замовченням) */

function createList(q = 5) {
    const createOl = document.createElement('ol')
    for (let i = 1; i <= q; ++i) {
        const createLi = document.createElement('li')
        const showLi = createOl.insertAdjacentElement("beforeend", createLi)
    }
    const showOl = bodyElement.insertAdjacentElement("beforeend", createOl)

}

createList(1)

createList()

createList(66)

/* Задача №3
Додати до елементу <body> класс loaded.
Потім перевірити чи є клас loaded у елемента <body>
і, якщо є, додати стиль кольору тесту зедлений. */

bodyElement.classList.add("loaded")
if (bodyElement.classList.contains("loaded")) {
    bodyElement.style.color = "green"
} else {
    bodyElement.style.color = "black"
}

// Трохи практики
/*
function createClass() {
    bodyElement.classList.toggle("loaded")
    if (bodyElement.classList.contains("loaded")) {
        bodyElement.style.color = "green"
        console.log("green")
    } else {
        bodyElement.style.color = "black"
        console.log("black")
    }
}
createClass()
createClass()
createClass()
createClass()
*/

/*Задача №4
Дано в html: три елементи з класом item.
Треба отримати ці елементи в константу, кожному додати клас active, 
та перезаписати контент всередені кожного елемента на "Елемент №(тут порядковий номер елементу починаючи з 1)".*/

const items = document.querySelectorAll(".item")
console.log(items)
if (items.length) {
    for (let item of items) {
        item.classList.add("active")


    }
    items.forEach((item, index) => {
        item.textContent = `Елемент № ${++index}`
    })

} else {
    console.log("Елементів item не знайдено")
}

/* Задача №5
Дано в html: текст, далі кнопка з класом button.
Треба прокрутити скрол сторінки до кнопки */

// const windowScroll = window.scrollY
// console.log(windowScroll)
// window.scrollTo({
//     top: 1062,
//     left: 0,
//     behavior: "smooth"
// })

/* Задача №6
Дано в html: посилання з класом link
Треба додати до посилання дата атрибут зі значенням 100
Поім отримати значення трибуту, та, якщо значення меньше 200
пофарбувати колір тексту посилання в червоний */

const link = document.querySelector(".link")
link.dataset.value = +"200"
let linkColor = parseFloat(link.dataset.value)
console.log(linkColor)
if (linkColor <= 200) {
    link.style.color = "red"
}

// Трохи практики
/*const link = document.querySelector(".link")
function changeValue(e) {
    link.dataset.value = e
    let linkColor = parseFloat(link.dataset.value)
    if  (linkColor < 100 && linkColor < 100) {
        link.style.color = "red"
    } else if(linkColor >= 100 && linkColor < 199){
        link.style.color = "blue"
    } else if(linkColor >= 200 && linkColor < 300){
        link.style.color = "yellow"
    }
}
changeValue(111)
changeValue(211)
changeValue(11)*/