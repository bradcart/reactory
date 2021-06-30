import { keyframes } from "../stitches.config";

export const bounceInTop = keyframes({
  "0%": {
    transform: "translateY(-500px)",
    animationTimingFunction: "ease-in",
    opacity: 0,
  },
  "38%": {
    transform: "translateY(0)",
    animationTimingFunction: "ease-out",
    opacity: 1,
  },
  "55%": {
    transform: "translateY(-65px)",
    animationTimingFunction: "ease-in",
  },
  "72%": {
    transform: "translateY(0)",
    animationTimingFunction: "ease-out",
  },
  "81%": {
    transform: "translateY(-28px)",
    animationTimingFunction: "ease-in",
  },
  "90%": {
    transform: "translateY(0)",
    animationTimingFunction: "ease-out",
  },
  "95%": {
    transform: "translateY(-8px)",
    animationTimingFunction: "ease-in",
  },
  "100%": {
    transform: "translateY(0)",
    animationTimingFunction: "ease-out",
  },
});

export const bounceInBottom = keyframes({
  "0%": {
    transform: "translateY(500px)",
    animationTimingFunction: "ease-in",
    opacity: 0,
  },
  "38%": {
    transform: "translateY(0)",
    animationTimingFunction: "ease-out",
    opacity: 1,
  },
  "55%": {
    transform: "translateY(65px)",
    animationTimingFunction: "ease-in",
  },
  "72%": {
    transform: "translateY(0)",
    animationTimingFunction: "ease-out",
  },
  "81%": {
    transform: "translateY(28px)",
    animationTimingFunction: "ease-in",
  },
  "90%": {
    transform: "translateY(0)",
    animationTimingFunction: "ease-out",
  },
  "95%": {
    transform: "translateY(8px)",
    animationTimingFunction: "ease-in",
  },
  "100%": {
    transform: "translateY(0)",
    animationTimingFunction: "ease-out",
  },
});

// export const flipInBottom = keyframes({
//   "0%": {
//     transform: "rotateX(80deg)",
//     opacity: 0,
//   },
//   "100%": {
//     transform: "rotateX(0)",
//     opacity: 1,
//   },
// });

export const slideInLeft = keyframes({
  "0%": {
    transform: "translateX(-1000px) scaleX(2.5) scaleY(0.2)",
    transformOrigin: "100% 50%",
    opacity: 0,
  },
  "100%": {
    transform: "translateX(0) scaleX(1) scaleY(1)",
    transformOrigin: "50% 50%",
    opacity: 1,
  },
});

// export const puffIn = keyframes({
//   "0%": {
//     opacity: 0,
//     transformOrigin: "50% 50%",
//     transform: "scale(2, 2)",
//     filter: "blur(2px)",
//   },
//   "100%": {
//     opacity: 1,
//     transformOrigin: "50% 50%",
//     transform: "scale(1, 1)",
//     filter: "blur(0px)",
//   },
// });

export const vanishIn = keyframes({
  "0%": {
    opacity: 0,
    transformOrigin: "50% 50%",
    transform: "scale(2, 2)",
    filter: "blur(90px)",
  },
  "100%": {
    opacity: 1,
    transformOrigin: "50% 50%",
    transform: "scale(1, 1)",
    filter: "blur(0px)",
  },
});
