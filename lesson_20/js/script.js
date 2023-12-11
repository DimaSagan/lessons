// const like = document.querySelector('.card__item-button');
// like.addEventListener('click', function () {
//     like.classList.toggle('liked');
// });


const like = document.querySelectorAll('.card__item-button');
like.forEach((button, index) => {
    button.addEventListener('click', function () {
        like[index].classList.add('liked');
    });
});


