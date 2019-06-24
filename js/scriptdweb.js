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
$(document).ready(function() {
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

  /**
   *
   * Search input system
   *
   **/

  $("#filter").keyup(function() {
    // Retrieve the input field text and reset the count to zero
    var filter = $(this).val(),
      count = 0;

    // Loop through the comment list
    $(".grid-la-list article").each(function() {
      // If the list item does not contain the text phrase fade it out
      if (
        $(this)
          .text()
          .search(new RegExp(filter, "i")) < 0
      ) {
        $(this).fadeOut();

        // Show the list item if the phrase matches and increase the count by 1
      } else {
        $(this).show();
        count++;
      }
    });

    // Update the count
    var numberItems = count;
    $("#filter-count").text(count + " résultats trouvés");
  });

  if ($("#back-to-top").length) {
    var scrollTrigger = 100, // px
      backToTop = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $("#back-to-top").addClass("show");
        } else {
          $("#back-to-top").removeClass("show");
        }
      };
    backToTop();
    $(window).on("scroll", function() {
      backToTop();
    });
    $("#back-to-top").on("click", function(e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0
        },
        700
      );
    });
  }

  var numTagsProto = $("span.topic_prototype").length;
  var numTagsDev = $("span.topic_developpement").length;
  var numTagsInno = $("span.topic_innovation").length;

  $("#Prototype-list-filter").html(numTagsProto.toString());
  $("#developpement-list-filter").html(numTagsDev.toString());
  $("#Innovation-list-filter").html(numTagsInno.toString());

  $("#fullscreenid").click(function(e) {
    $("#id_container_iframe").toggleClass("fullscreen-maxpower");
    $("body").toggleClass("fullscreen-body");
  });

  $("#live-search").each(function() {
    var $inp = $("#filter"),
      $cle = $(".clearable__clear");

    $inp.on("input", function() {
      if ($inp.val() !== "") {
        $cle.addClass("doflex");
      }
    });

    $cle.on("touchstart click", function(e) {
      e.preventDefault();
      $(this).removeClass("doflex");
      document
        .getElementsByClassName("clearable__clear")[0]
        .classList.remove("doflex");
      $inp.val("").trigger("input");
      $("article").show();
      return false;
    });

  });
  
});
