import deckOfCards from "../deckOfCards";

export const drawCard = () => {
  const card = deckOfCards[Math.trunc(Math.random() * deckOfCards.length) + 1];

  return {
    type: "DRAW_CARD",
    payload: {
      card: card,
    },
  };
};
