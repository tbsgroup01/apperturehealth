gsap.registerPlugin(ScrollTrigger);

const blades = document.querySelectorAll(".shutter-blade");

blades.forEach((blade) => {
  const r = getComputedStyle(blade).getPropertyValue("--r");
  gsap.set(blade, { rotation: r });
});

const heroTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero-section",
    start: "top top",
    end: "+=150% top",
    scrub: 1,
    pin: true,
  },
});

heroTL
  .to(blades, {
    rotation: "+=110",
    x: (i) => Math.cos(((i * 60 - 30) * Math.PI) / 180) * 900,
    y: (i) => Math.sin(((i * 60 - 30) * Math.PI) / 180) * 900,
    opacity: 0,
    stagger: 0.1,
    duration: 2,
    ease: "power2.inOut",
  })
  .to(
    ".logo-container",
    {
      opacity: 1,
      scale: 1,
      duration: 1.2,
      ease: "back.out(1.5)",
    },
    "-=1.3",
  );

gsap.from(".expertise-header", {
  scrollTrigger: {
    trigger: ".expertise-section",
    start: "top 70%",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".expertise-card", {
  scrollTrigger: {
    trigger: ".expertise-section",
    start: "top 70%",
  },
  y: 60,
  opacity: 0,
  duration: 0.8,
  stagger: 0.15,
  ease: "power2.out",
});

window.addEventListener("load", () => {
  const tl = gsap.timeline();

  tl.to(".loader-line", { scaleX: 1, duration: 0.6, ease: "power2.inOut" })
    .to(".transition-column", {
      y: "-100%",
      duration: 1,
      stagger: 0.1,
      ease: "expo.inOut",
    })
    .to(".transition-logo", { opacity: 0, duration: 0.3 }, "-=.8")
    .from(".hero-section", { opacity: 0, y: 20, duration: 1 }, "-=.5");
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: ".expertise-transition",
      start: "top center",
      end: "+=300",
      scrub: 1,
    },
  })
  .to(".slice", { y: "-100%", stagger: 0.15, ease: "power4.inOut" });
