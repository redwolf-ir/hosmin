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
    { duration: 2, opacity: 1, x: 0, ease: Power2.easeInOut },
    0
  )
  .fromTo(
    ".intro-links",
    { opacity: 0, x: 300 },
    { duration: 2.5, opacity: 1, x: 0, ease: Power2.easeInOut },
    0
  )
  .fromTo(
    ".intro-socials",
    { opacity: 0, x: 300 },
    { duration: 3, opacity: 1, x: 0, ease: Power2.easeInOut },
    0
  )
  .fromTo(
    ".curly-line",
    { opacity: 0, x: 200 },
    { duration: 3, opacity: 1, x: 0, ease: Power2.easeInOut },
    0
  );

gsap.fromTo(
  ".top-navigation",
  { opacity: 0, y: -100 },
  { duration: 1, opacity: 1, y: 0, ease: Power2.easeInOut },
  0
);

/* FULLPAGE SETUP
=========================== */
$("#wrapper").fullpage({
  scrollHorizontally: true,
  fadingEffect: true,
  responsiveHeight: 435,
  scrollingSpeed: 1200,
  anchors: ["intro", "latest-release", "beats", "contact"],

  onLeave: function (index, nextIndex, direction) {
    if (index == 1 && nextIndex == 2) {
      gsap.fromTo(
        ".top-navigation",
        { opacity: 0, y: -100 },
        { duration: 1, opacity: 1, y: 0, ease: Power2.easeInOut },
        0
      );
      var t8 = gsap.timeline();

      t8.fromTo(
        ".latest-release .content h2",
        { opacity: 0, x: -50 },
        { duration: 1.5, opacity: 1, x: 0, ease: Power2.easeInOut },
        0
      )
        .fromTo(
          ".latest-release .content span",
          { opacity: 0, x: 50 },
          { duration: 1.5, opacity: 1, x: 0, ease: Power2.easeInOut },
          0
        )
        .fromTo(
          ".latest-release .content ul",
          { opacity: 0, x: 150 },
          { duration: 2.5, opacity: 1, x: 0, ease: Power2.easeInOut },
          0
        )
        .fromTo(
          ".spotify-content",
          { opacity: 0, x: -150 },
          { duration: 2.5, opacity: 1, x: 0, ease: Power2.easeInOut },
          0
        )
        .fromTo(
          ".spotify-content",
          { opacity: 0, x: -150 },
          { duration: 2.5, opacity: 1, x: 0, ease: Power2.easeInOut },
          0
        )
        .fromTo(
          ".curly-line-5",
          { opacity: 0, y: 250 },
          { duration: 2.5, opacity: 1, y: 0, ease: Power2.easeInOut },
          0
        );
    } else if (index == 2 && nextIndex == 3) {
      gsap.fromTo(
        ".top-navigation",
        { opacity: 0, y: -100 },
        { duration: 1, opacity: 1, y: 0, ease: Power2.easeInOut },
        0
      );
      var t5 = gsap.timeline();

      t5.fromTo(
        ".beats .content",
        { opacity: 0, x: -50 },
        { duration: 2, opacity: 1, x: 0, ease: Power2.easeInOut },
        0
      )
        .fromTo(
          ".curly-line-2",
          { opacity: 0, y: 50 },
          { duration: 2.5, opacity: 1, y: 0, ease: Power2.easeInOut },
          0
        )
        .fromTo(
          ".last_beats",
          { opacity: 0, y: 100 },
          { duration: 2, opacity: 1, y: 0, ease: Power2.easeInOut },
          0
        );
    } else if (index == 3 && direction == "down") {
      gsap.fromTo(
        ".top-navigation",
        { opacity: 0, y: -100 },
        { duration: 1, opacity: 1, y: 0, ease: Power2.easeInOut },
        0
      );

      var t4 = gsap.timeline();

      t4.fromTo(
        ".aboutme-content",
        { opacity: 0, x: -50 },
        { duration: 1.5, opacity: 1, x: 0, ease: Power2.easeInOut },
        0
      )
        .fromTo(
          ".contact-me",
          { opacity: 0, x: 50 },
          { duration: 1.5, opacity: 1, x: 0, ease: Power2.easeInOut },
          0
        )
        .fromTo(
          ".about-me picture",
          { opacity: 0, y: -150 },
          { duration: 2.5, opacity: 1, y: 0, ease: Power2.easeInOut },
          0
        )
        .fromTo(
          ".about-me ul li",
          { opacity: 0, y: 30 },
          {
            duration: 2.5,
            delay: 1.5,
            opacity: 1,
            y: 0,
            ease: Power2.easeInOut,
          },
          0
        );
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
  imagesLoaded: true,
  // prevNextButtons: false,
});

$(".main-carousel-beats").flickity({
  // options
  cellAlign: "left",
  contain: true,
  pageDots: true,
  prevNextButtons: true,
  imagesLoaded: true,
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
                      var buzzer = $("#buzzer")[0];
                      buzzer.play();
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
                      gsap.fromTo(
                        ".st0",
                        { opacity: 0.5 },
                        {
                          duration: 1,
                          opacity: 1,
                          fill: "#ff0000",
                          yoyo: true,
                          repeat: -1,
                          ease: Power2.easeInOut,
                        },
                        0
                      );
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
                      $("#intro-img").attr("src", "assets/img/glitch.gif");
                    });
                });
            });
        });
    });
});

/* FULLPAGE SETUP
=========================== */
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let birthday = "Apr 30, 2021 00:00:00",
    countDown = new Date(birthday).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").innerText = Math.floor(distance / day)),
        (document.getElementById("hours").innerText = Math.floor(
          (distance % day) / hour
        )),
        (document.getElementById("minutes").innerText = Math.floor(
          (distance % hour) / minute
        )),
        (document.getElementById("seconds").innerText = Math.floor(
          (distance % minute) / second
        ));

      //seconds
    }, 0);
})();

/* OFF CANVAS
=========================== */
/* Open when someone clicks on the span element */
function openNav() {
  // document.getElementById("myNav").style.width = "100%";
  $("#myNav").toggleClass("addWidth");
  $(".logo").toggleClass("hide");
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  $("#myNav").toggleClass("addWidth");
  $(".logo").toggleClass("hide");
  if ($("#about").hasClass("opened")) {
  }
}

/* GO TO TOP
=========================== */
