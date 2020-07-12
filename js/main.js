console.log('Hello');



// $(document).ready(function(){
//     $('.single-item').slick({
//         dots: true,
//         infinite: true,
//         speed: 300,
//         slidesToShow: 1,
//         adaptiveHeight: true
//     });
// });
$('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
});

$('.single-item').slick();

$('.multiple-items').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    infinite: true,
    slidesToShow: 1,
    // slidesToScroll: 1
});


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


