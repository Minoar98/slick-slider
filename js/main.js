


// $('.single-slide').slick({
//   dots: true,
//   infinite: false,
//   speed: 1500,
//   slidesToShow: 3,
//   slidesToScroll: 6,
//   // prevArrow:'<i class="fas fa-chevron-left left-arrow"></i>',
//   // nextArrow:'<i class="fas fa-chevron-right right-arrow"></i>',
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });


$(document).on("ready", function () {
  $(".single-slide").slick({
    dots: true,
    infinite: true,
  
    slidesToShow: 5,
    slidesToScroll: 7,
    prevArrow:'<i class="fas fa-chevron-left left-arrow"></i>',
    nextArrow:'<i class="fas fa-chevron-right right-arrow"></i>'
  });
});



// $(document).on("ready", function () {

// $('.single-slide').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 7,
//   prevArrow:'<i class="fas fa-chevron-left left-arrow"></i>',
//       nextArrow:'<i class="fas fa-chevron-right right-arrow"></i>',
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });
// });











