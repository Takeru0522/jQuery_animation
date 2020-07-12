console.log('Hello');

// クリックで、画面トップへ移動
$('.to-top').on('click', function() {
    $('html, body').animate({
        scrollTop: 0
    }, 700, 'swing')
})


$('.multiple-items').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    // arrows: false,
    // fade: true,
    // slidesToShow: 1,
    // centerMode: true,
    // infinite: true,   
    // slidesToScroll: 1
});

// $(document).ready(function(){
//     $('.single-item').slick({
//         dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//         adaptiveHeight: true
//     });
// });


// ヘッダーのリンククリックで、該当箇所へスクロール
$('.to-about').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 300);    
})
$('.to-gallery').on('click', function() {
    $('html, body').animate({
        scrollTop: $("#gallery").offset().top
    }, 300);    
})
// $('.to-product').on('click', function() {
//     $('html, body').animate({
//         scrollTop: $("#product").offset().top
//     }, 300);    
// })
// $('.to-contact').on('click', function() {
//     $('html, body').animate({
//         scrollTop: $("#contact").offset().top
//     }, 300);    
// })




// aaaaaaaaaaaa
const item = $('.item');

item.on('click', function() {
    console.log('clicked')
    // $('.item').show('slide', 500);
    item.slide()
});

// $('button').click(function() {
//     console.log('button clicked')
//     // $( ".one" ).show('slow');
//     // $( ".one" ).hide('slow');
//     // $('.one').toggleClass('hide');
//     // $('.one').animate({fontSize: 100}, 2000, 'linear')
//     // $('.one').animate({opacity: 'toggle'}, 2000, 'linear')
//     $('html').animate({scrollTop: 0}, 700, 'linear')
// });

$('button').on('click', function() {
    // $('.one').animate({
    //     'fontSize': '100px'
    // })
    // $('.one').animate({
    //     'left': '100%'
    // }).animate({
    //     'left': '0'
    // })
    // $('.one').fadeIn(2000);
    $('.one').fadeToggle(2000);
})



// $('.item').scrollSlide({
//     direction   : 'left',
//     speed       : 1000,
//     scrollstart : 200,
//     slideback   : false
// });

