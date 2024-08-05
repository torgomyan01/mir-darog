const { none, show, active, hidden, opacity25, disabled } = {
    none: "d-none",
    show: 'show',
    active: 'active',
    hidden: 'overflow-hidden',
    opacity25: 'opacity-25',
    disabled: 'disabled'
}


///...... menu


const menuItemMobile = $('.menu-item-mobile');

$('.mobile-menu-board').on('click', function (){
    if($(this).hasClass(active)){
        $(this).removeClass(active);
        menuItemMobile.removeClass(active);
        $('body').css('overflow', '')
    } else {
        $(this).addClass(active);
        menuItemMobile.addClass(active);
        $('body').css('overflow', 'hidden')
    }
})

const menu_item_mobile_teg = $('.menu-item-mobile-teg')
const menu_ItemMobile = $('.menu-item-mobile');

menu_item_mobile_teg.on('click', function (){
    menu_ItemMobile.removeClass(active);
})

//  ... Modal out serviser


const modalProducts = new bootstrap.Modal('#full-desktop', {
    keyboard: false
})


const modalOpenFull = $('.modal-open-full')

modalOpenFull.on('click', function (){
    const id = $(this).attr('href');

    openModalCategory(id);
})

function openModalCategory(id) {
    modalProducts.show();
    $('.modal-body-item').addClass('d-none');
    $(id).removeClass('d-none');
}

// slider


$('.slider').slick({
    dots: true,
    lazyLoad: 'progressive',
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                dots: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
//
// $('.gallery-photo').on('click', function (e) {
//
//     e.preventDefault();
//
//     const items = [],
//       options = {
//           index: $(this).index()
//       };
//
//     $('.gallery-photo').each(function () {
//         let src = $(this).attr('href');
//         items.push({
//             src: src
//         });
//     });
//
//     new PhotoViewer(items, options);
//
// });


// Modal-info img

const AllImages = [
  {
    class: 'col-md-4',
    image: [
      'assets/image/slider1.png',
      'assets/image/slider2.jpg'
    ]
  },
  {
    class: 'col-md-4',
    image: [
      'assets/image/slider3.jpg'
    ]
  },
  {
    class: 'col-md-4',
    image: [
      'assets/image/slider4.png',
      'assets/image/slider5.png'
    ]
  },
  // row
  {
    class: 'col-md-8',
    image: [
      'assets/image/slider6.png'
    ]
  },
  {
    class: 'col-md-4',
    image: [
      'assets/image/slider7.jpg'
    ]
  },
  // row
  {
    class: 'col-md-4',
    image: [
      'assets/image/slider8.png'
    ]
  },
  {
    class: 'col-md-8',
    image: [
      'assets/image/slider10.png'
    ]
  },
  // row
  {
    class: 'col-md-4',
    image: [
      'assets/image/slider11.png',
      'assets/image/slider12.png'
    ]
  },
  {
    class: 'col-md-4',
    image: [
      'assets/image/slider13.jpg'
    ]
  },
  {
    class: 'col-md-4',
    image: [
      'assets/image/slider14.jpg',
      'assets/image/slider16.png',
    ]
  },
  // row
  {
    class: 'col-md-8',
    image: [
      'assets/image/slider17.png'
    ]
  },
  {
    class: 'col-md-4',
    image: [
      'assets/image/slider18.png'
    ]
  },
  // row
  {
    class: 'col-md-4',
    image: [
      'assets/image/slider19.png'
    ]
  },
  {
    class: 'col-md-8',
    image: [
      'assets/image/slider20.png'
    ]
  },
  {
    class: 'col-md-4',
    image: [
      'assets/image/slider21.png'
    ]
  },
  {
    class: 'col-md-8',
    image: [
      'assets/image/slider22.png'
    ]
  },
  {
    class: 'col-md-4',
    image: [
      'assets/image/slider23.png',
      'assets/image/slider24.png'
    ]
  },
  {
    class: 'col-md-4',
    image: [
      'assets/image/slider25.png'
    ]
  },
  {
    class: 'col-md-4',
    image: [
      'assets/image/slider26.png',
      'assets/image/slider27.png',
    ]
  },
  {
    class: 'col-md-8',
    image: [
      'assets/image/slider30.png'
    ]
  },
  {
    class: 'col-md-4',
    image: [
      'assets/image/slider29.jpg'
    ]
  },
  // row
];

const myModal = new bootstrap.Modal('#info-block', {
  keyboard: false
})


// #info-block

document.getElementById('btn-open-ll-works').addEventListener('click', function (){
  myModal.show()
    AllImages.forEach((img) => {
        document.getElementById('row-modal-info').insertAdjacentHTML('beforeend', `
          <div class="${img.class} modal-images-col">
              <div class="modal-images-item">
                ${printImages(img.image).join('')}
              </div>
          </div>
        `)
    })
})

function printImages(imgArray){
  return imgArray.map((imgUrl) => `<img src="${imgUrl}" alt="mod" style="object-fit: cover; height: ${imgArray.length > 1 ? ` calc((100% / ${imgArray.length}) - 10px)` : '100%'}" >`)
}

const formModalModal = new bootstrap.Modal('#form-modal', {
    keyboard: false
})

setTimeout(() => {
    formModalModal.show()
}, 60000)



// $('.form-sites').on('submit', function (e){
//     e.preventDefault();
//     const data = $(e.target).serialize();
//
//     $.ajax({
//         url: `./send-email.php`,
//         method: 'post',
//         dataType: 'json',
//         data: data,
//         success: function(_data){
//             console.log(_data)
//         }
//     });
//
// })
//
$('.header-calc').on('submit', function (e){
    e.preventDefault();
    const count = e.target.count.value;
    const height = e.target.height.value;

    const calcPrice = count * (280 * height);
    alert(`Плата будет зависеть от вашего вклада около ${calcPrice} рублей, мы передадим ваш номер телефона нашему специалисту, он свяжется с вами, а также вам будут предоставлены скидки за обратную связь.`)
    const data = $(e.target).serialize();

    $.ajax({
        url: `https://formspree.io/f/mwpeojln`,
        method: 'post',
        dataType: 'json',
        data: data,
        success: function(_data){
            console.log(_data)
        }
    });

})


const element = document.querySelectorAll('.def-mask-input');
const maskOptions = {
    mask: '+{7}(000)000-00-00'
};

element.forEach((item) => {
    const mask = IMask(item, maskOptions);
})


const inpNumbers = document.querySelectorAll('.def-input-number');

inpNumbers.forEach((item) => {
    IMask(
        item,
        {
            mask: Number,
            min: +$(item).attr('min'),
            max: +$(item).attr('max'),
            thousandsSeparator: ' '
        }
    )
})

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(error => {
      console.log('ServiceWorker registration failed: ', error);
    });
  });
}

