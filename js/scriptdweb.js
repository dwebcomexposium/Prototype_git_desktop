// JavaScript Document
// $(document).ready(function(){
	

//if ($('#back-to-top').length) {
//    var scrollTrigger = 100, // px
//        backToTop = function () {
//            var scrollTop = $(window).scrollTop();
//            if (scrollTop > scrollTrigger) {
//                $('#back-to-top').addClass('show');
//            } else {
//                $('#back-to-top').removeClass('show');
//            }
//        };
//    backToTop();
//    $(window).on('scroll', function () {
//        backToTop();
//    });
//    $('#back-to-top').on('click', function (e) {
//        e.preventDefault();
//        $('html,body').animate({
//            scrollTop: 0
//        }, 700);
//    });
//}
//}


/**
*
* Search bar + Side bar search feature
*
*/
$(".list-filter").click(function(e) {
  let link = $(this)
    .text()
    .replace(/\d+/g, "")
    .replace(/\s/g, "");
  $("#filter").val(link);
  $(".grid-la-list")
    .show()
    .filter(function() {
      //Select all li and show
      return $("article").each(function() {
        if (
          $(this)
            .text()
            .replace(/\d+/g, "")
            .replace(/\s/g, "")
            .toLowerCase()
            .indexOf(link.toLowerCase()) >= 0
        ) {
          $(this).show();
        } else if ($("#filter").val() === "Toutvoir" || !$("#filter").val()) {
          $("#filter").val("");
          $("article").show();
        } else {
          $(this).hide();
        }
      });
    });
});
