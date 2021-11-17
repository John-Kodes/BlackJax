import Cookies from "js-cookie";
// config
import { API_URL, ADMIN_PASS } from "./config";

export const updateUserScore = async (bank) => {
  const token = Cookies.get("jwt");
  const res = await fetch(`${API_URL}/users/updateScore`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      adminPass: ADMIN_PASS,
      currentScore: bank,
    }),
  });

  return await res.json();
};
