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
