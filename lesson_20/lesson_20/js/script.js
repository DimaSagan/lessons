// const like = document.querySelector('.card__item-button');
// like.addEventListener('click', function () {
//     like.classList.toggle('liked');
// });

const menu = document.querySelector('.header__action-button');
menu.addEventListener('click', function () {
    document.documentElement.classList.toggle('menu-open');
})

const like = document.querySelectorAll('.card__item-button');
like.forEach((button, index) => {
    button.addEventListener('click', function () {
        like[index].classList.add('liked');
    });
});


