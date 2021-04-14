const init = [];

const cardReducer = (state = init, action) => {
  switch (action.type) {
    case "DRAW_CARD":
      return [...state, action.payload.card];
    default:
      return [...state];
  }
};

export default cardReducer;
