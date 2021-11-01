export const btnAnimation = {
  initial: {
    opacity: 0,
    border: "2px solid transparent",
    background: "rgba(0,0,0,0)",
  },
  animate: {
    opacity: 1,
  },
  hover: {
    y: -5,
    border: "2px solid white",
    background: "#04002452",
  },
  active: {
    y: 2,
  },
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
    x: -8,
  },
  tap: {
    x: 0,
  },
};

export const pageAnimation = {
  initial: {
    x: 600,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    x: -600,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  },
};
