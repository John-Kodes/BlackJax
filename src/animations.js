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
