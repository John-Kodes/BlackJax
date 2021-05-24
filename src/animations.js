export const btnHover = {
  y: -3,
  scale: 1.1,
  transition: {
    duration: 0.2,
    type: "tween",
    ease: "easeInOut",
  },
  filter: "brightness(5) hue-rotate(-10deg)",
};

export const btnTap = {
  y: 0,
  scale: 1,
  transition: {
    duration: 0.05,
    type: "tween",
    ease: "easeInOut",
  },
  filter: "brightness(0.5) hue-rotate(10deg)",
};

export const backBtnAnim = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
  hover: {
    y: -4,
  },
  tap: {
    y: 2,
  },
};

export const pageAnimation = {
  initial: {
    x: 1300,
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    x: -1300,
    transition: {
      duration: 0.5,
    },
  },
};
