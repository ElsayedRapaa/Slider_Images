// const slider = document.querySelector('.slider'),
//     the_Img = document.querySelectorAll('.img'),
//     the_Btn = document.querySelectorAll('.btn'),
//     option = document.querySelectorAll('.option');

// let index = 1,
//     size = the_Img[index].clientWidth;

// update();

// function update() {

//     slider.style.transform = `translateX(${-size * index}px)`;

//     // slide();

// };

// function slide() {

//     slider.style.transition = `transform .5s ease`;

//     update();

// };

// function check_btn() {

//     if (this.classList.contains('prev')) {

//         index--;

//     } else if (this.classList.contains('next')) {

//         index++;

//     };

//     slide();

// };


// slider.addEventListener('transitionend', function() {

//     if (the_Img[index].id === 'last') {

//         slider.style.transition = 'none';

//         index = the_Img.length - 2;

//         slider.style.transform = `translateX(${-size * index}px)`;

//     } else if (the_Img[index].id === 'first') {

//         slider.style.transition = 'none';

//         index = 1;

//         slider.style.transform = `translateX(${-size * index}px)`;

//     }

// })

// the_Btn.forEach((btn) => btn.addEventListener('click', check_btn));



const slider = document.querySelector('.slider'),
    the_Img = document.querySelectorAll('.img'),
    the_Btn = document.querySelectorAll('.btn'),
    the_Option = document.querySelectorAll('.option'),
    background = document.querySelectorAll('.bg');

let index = 1,
    opt_index = 0,
    size = the_Img[index].clientWidth;

update();

function update() {

    slider.style.transform = `translateX(${-size * index}px)`;

    the_Option.forEach((opt) => opt.classList.remove('colored'));
    the_Option[opt_index].classList.add('colored');

    background.forEach((bg) => bg.classList.remove('show'));
    background[opt_index].classList.add('show');

};

function slide() {

    slider.style.transition = 'transform 500ms ease-in-out';

    update();

};

function check_btn() {

    if (this.id === 'prev') {

        index--;

        if (opt_index == 0) {

            opt_index = 9;

        } else {

            opt_index--

        };

    } else if (this.id === 'next') {

        index++;

        if (opt_index == 9) {

            opt_index = 0;

        } else {

            opt_index++;

        };

    };

    slide()

};

function click_option() {

    let i = Number(this.getAttribute('data-opt'));

    index = i + 1;

    opt_index = i;

    slide();

    // console.log(i)

}

slider.addEventListener('transitionend', function() {

    if (the_Img[index].id === 'last') {

        slider.style.transition = 'none';

        index = the_Img.length - 2;

        slider.style.transform = `translateX(${-size * index}px)`;

    } else if (the_Img[index].id === 'first') {

        slider.style.transition = 'none';

        index = 1;

        slider.style.transform = `translateX(${-size * index}px)`;

    };

});

the_Btn.forEach((btn) => btn.addEventListener('click', check_btn));
the_Option.forEach((opt) => opt.addEventListener('click', click_option));