/* TIMELINE SECTION 1
=========================== */
var tl = gsap.timeline();

tl.fromTo(
  ".intro h2",
  { opacity: 0, x: 200 },
  { duration: 2.5, opacity: 1, x: 0, ease: Power2.easeInOut },
  0
)
  .fromTo(
    ".intro h3",
    { opacity: 0, y: -50 },
    { duration: 2.5, opacity: 1, y: 0, ease: Power2.easeInOut },
    0
  )
  .fromTo(
    ".svgs",
    { opacity: 0 },
    { duration: 6, opacity: 1, ease: Power2.easeInOut },
    0
  )
  .fromTo(
    ".intro picture img",
    { opacity: 0, x: -300 },
    { duration: 2.5, opacity: 1, x: 0, ease: Power2.easeInOut },
    0
  )
  .fromTo(
    ".curly-line",
    { opacity: 0, x: 200 },
    { duration: 3, opacity: 1, x: 0, ease: Power2.easeInOut },
    0
  );

/* FULLPAGE SETUP
=========================== */
$("#wrapper").fullpage({
  scrollHorizontally: true,
  fadingEffect: true,
  responsiveHeight: 300,

  onLeave: function (index, nextIndex, direction) {
    if (index == 1 && nextIndex == 2) {
      var t2 = gsap.timeline();

      t2.fromTo(
        ".works .content",
        { opacity: 0, x: -50 },
        { duration: 3.5, opacity: 1, x: 0, ease: Power2.easeInOut },
        0
      ).fromTo(
        ".last_works",
        { opacity: 0, y: 100 },
        { duration: 2.5, delay: 1, opacity: 1, y: 0, ease: Power2.easeInOut },
        0
      );
    } else if (index == 3 && direction == "down") {
      alert("hello");
    }
  },
});

/* FULLPAGE SETUP
=========================== */
$(".main-carousel").flickity({
  // options
  cellAlign: "left",
  contain: true,
  pageDots: false,
  // prevNextButtons: false,
});

$("#hos_H").click(function () {
  $(this).addClass("make-it-active");
  $("#hos_O")
    .off("click")
    .on("click", function () {
      $(this).addClass("make-it-active");
      $("#hos_S")
        .off("click")
        .on("click", function () {
          $(this).addClass("make-it-active");
          $("#hos_M")
            .off("click")
            .on("click", function () {
              $(this).addClass("make-it-active");
              $("#hos_I")
                .off("click")
                .on("click", function () {
                  $(this).addClass("make-it-active");
                  $("#hos_N")
                    .off("click")
                    .on("click", function () {
                      $(this).addClass("make-it-active");
                      $("#intro-img").addClass("image-active");
                      gsap.to(".intro h3", {
                        duration: 0.2,
                        scale: 1.1,
                        color: "yellow",
                        yoyo: true,
                        repeat: -1,
                        ease: "none",
                      });
                      gsap.to(".svgs", {
                        duration: 0.5,
                        opacity: 0,
                        yoyo: true,
                        repeat: -1,
                      });
                      gsap.to(".curly-line", {
                        duration: 0.5,
                        x: 50,
                        yoyo: true,
                        repeat: -1,
                        ease: "none",
                      });
                      gsap.to(".intro h2", {
                        duration: 0.1,
                        scale: 1.1,
                        color: "yellow",
                        background: "white",
                        padding: "3px 8px",
                        yoyo: true,
                        repeat: -1,
                        ease: "none",
                      });
                    });
                });
            });
        });
    });
});
