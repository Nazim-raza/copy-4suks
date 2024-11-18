// Video Scroll Effect Initialization
function initVideoScrollEffect() {
  gsap.to(".unique-video-section .unique-video", {
    width: "10%",
    height: "10%",
    scrollTrigger: {
      trigger: ".unique-video-section",
      scroller: "body",
      start: "top 0%",
      end: "top -100%",
      scrub: 2,
      pin: true,
      duration: 0.5,
      invalidateOnRefresh: true, // Recalculates on refresh
    },
  });

  var tl = gsap.timeline();
  tl.to(".text-top", {
    opacity: 1,
    y: 250,
    scrollTrigger: {
      trigger: ".unique-video-section",
      scroller: "body",
      start: "top 0%",
      end: "top -200%",
      scrub: 2,
    },
  });

  tl.to(".text-right", {
    opacity: 1,
    x: -300,
    scrollTrigger: {
      trigger: ".unique-video-section",
      scroller: "body",
      start: "top 0%",
      end: "top -200%",
      scrub: 2,
    },
  });

  tl.to(".text-bottom", {
    opacity: 1,
    y: -250,
    scrollTrigger: {
      trigger: ".unique-video-section",
      scroller: "body",
      start: "top 0%",
      end: "top -200%",
      scrub: 2,
    },
  });

  tl.to(".text-left", {
    opacity: 1,
    x: 300,
    scrollTrigger: {
      trigger: ".unique-video-section",
      scroller: "body",
      start: "top 0%",
      end: "top -200%",
      scrub: 2,
    },
  });
}

// Service Cards Scroll Effect Initialization
function initServiceScrollEffect() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".service-div",
      toggleActions: "restart complete reverse resume",
      scroller: "body",
      start: "top 0%",
      scrub: true,
      pin: true,
    },
  });

  tl.to(".p-one", {
    autoAlpha: 0,
    y: -250,
  });
  tl.to(
    ".img-one",
    {
      autoAlpha: 0,
    },
    "<"
  );

  tl.from(
    ".p-two",
    {
      autoAlpha: 0,
      y: 200,
    },
    "<"
  );
  tl.from(
    ".img-two",
    {
      autoAlpha: 0,
    },
    "<"
  );

  tl.to(".p-two", {
    autoAlpha: 0,
    y: -250,
  });
  tl.from(
    ".p-three",
    {
      autoAlpha: 0,
      y: 200,
    },
    "<"
  );
  tl.to(
    ".img-two",
    {
      autoAlpha: 0,
    },
    "<"
  );
  tl.from(
    ".img-three",
    {
      autoAlpha: 0,
    },
    "<"
  );
}

// Initialize both functionalities
document.addEventListener("DOMContentLoaded", () => {
  initVideoScrollEffect();
  initServiceScrollEffect();
});

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    ScrollTrigger.refresh();
  }, 200);
});
