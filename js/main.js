function handleSliderScroll() {
    var scroll = document.querySelector('.scslider__wrap');
    if (!scroll) return;
    var flktySlider = new Flickity(scroll, {
        // options
        prevNextButtons: false,
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        pageDots: false,
        autoPlay: 2000,
        pauseAutoPlayOnHover: false,
        fade: true
    });
    const prev = document.querySelector('.homepage .--prev')
    const next = document.querySelector('.homepage .--next')
    prev.addEventListener('click', function () {
        flktySlider.previous(true)
    })
    next.addEventListener('click', function () {
        flktySlider.next(true)
    })
}

handleSliderScroll();

//Videos list 
function handleClickPlay() {
    let modal = document.querySelector('.popupvideo')
    let close = document.querySelector('.btnclose')
    let playbtn = document.querySelector('.scvideo__play')
    if (!modal) return;
    playbtn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        modal.classList.add('active')
        playVideo();
    }),
        close.addEventListener('click', function () {
            modal.classList.remove('active')
            closeVideo();
        })

    document.addEventListener('click', function (e) {
        modal.classList.remove('active')
        closeVideo();
    })
}

function playVideo() {
    const url = 'https://www.youtube.com/embed/FcEVbVrNIyg?autoplay=1';
    const player = document.querySelector('.popupvideo__inner-iframe iframe')
    player.setAttribute('src', `${url}`)
}

function closeVideo() {
    const player = document.querySelector('.popupvideo__inner-iframe iframe')
    player.setAttribute('src', ``)
}

handleClickPlay();

function handleSliderBrand() {
    var scroll = document.querySelector('.scevent__brand');
    var flktySlider = new Flickity(scroll, {
        // options
        prevNextButtons: false,
        cellAlign: 'left',
        contain: true,
        wrapAround: false,
        pageDots: false,
        freeScroll: true,
    });
}

handleSliderBrand();


//Select language 
function selectLang() {
    const lang = document.querySelector('.header__right-lang')
    let langCurrent = document.querySelector('.lang-current'),
        langOpt = document.querySelector('.dropdown'),
        langItems = document.querySelectorAll('.lang-select')
    lang.addEventListener('click', function (e) {
        e.stopPropagation();
        langOpt.classList.toggle('active')
    })

    langItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            let textSelect = this.textContent;
            let textTemp = langCurrent.textContent;
            langCurrent.innerHTML = textSelect;
            this.innerHTML = textTemp;
        })
    });

    document.addEventListener('click', function () {
        langOpt.classList.remove('active')
    })
}
selectLang();



//Back to top
function btnBackClick() {
    const btnback = document.querySelector('.totop')
    window.addEventListener('scroll', function () {
        let scrollY = window.pageYOffset;
        let height = document.body.offsetHeight;
        let heightFooter = document.querySelector('.footer').offsetHeight;
        if (scrollY > height / 5) {
            btnback.classList.add('active')
        }
        else {
            btnback.classList.remove('active')
        }
    })
    btnback.addEventListener('click', function () {
        window.scrollTo({
            'top': 0,
            'behavior': "smooth"
        })
    })
}

btnBackClick();
function handleMenuMobile() {
    const nav = document.querySelector('nav'),
        btn = document.querySelector('.btn-mobile'),
        close = document.querySelector('.btnclose'),
        wrap = document.querySelector('.wrap')

    wrap.addEventListener('click', function (e) {
        e.stopPropagation();
    })
    btn.addEventListener('click', function (e) {
        e.stopPropagation();
        nav.classList.add('active')
    })

    close.addEventListener('click', function () {
        nav.classList.remove('active')
    })
    document.addEventListener('click', function () {
        nav.classList.remove('active')
    })

    window.addEventListener('resize', function () {
        nav.classList.remove('active')
    })
}

handleMenuMobile();

function handleLibrary() {
    const btnTabs = document.querySelectorAll('.sclibrary__filter-btns .item')
    const list = document.querySelectorAll('.sclibrary__content')
    btnTabs.forEach(element => {
        element.addEventListener('click', function () {
            btnTabs.forEach(element => {
                element.classList.remove('active')
            })
            this.classList.add('active');

            list.forEach(element => {
                element.classList.remove('active')
            })
            let id = 1;
            id = this.getAttribute('data-tab');
            if (id > 3) id = 1;
            let temp = document.querySelector(`.tab-${id}`)
            temp.classList.add('active')
        })
    });
}

handleLibrary();

function handleServicesScroll() {
    var scroll = document.querySelector('.scservices__slide');
    var progressbar = document.querySelector('.scservices .process-bar .current')
    var flktySlider = new Flickity(scroll, {
        // options
        prevNextButtons: false,
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        pageDots: false,
    });
    flktySlider.on('scroll', function (progress) {
        let current = progress * 100;
        if (current > 100) current = 0;
        else if (current < 0) current = 100;
        progressbar.style.left = current + '%';
    });
}

handleServicesScroll();

function handleLoad() {
    const body = document.querySelector('body');
    function removeLoad() {
        setTimeout(function () {
            body.classList.remove('loading');
        }, 1000)
    }
    window.addEventListener('load', function () {
        window.addEventListener('scroll', function (e) {
            e.preventDefault();
        })
        removeLoad();
    })
}
handleLoad();