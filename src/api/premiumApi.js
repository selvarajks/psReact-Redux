import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/premiums/";

export function getPremium() {
  console.log("url"+baseUrl)
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function savPremium(premium) {
  return fetch(baseUrl + (premium.id || ""), {
    method: premium.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(premium),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteCourse(premiumId) {
  return fetch(baseUrl + premiumId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
