import fetch from "cross-fetch";

// Returns a list of all characters including metadata like name, gender, realm, race, etc.
export function getAllCharacters(apiUrl, apiToken) {
  return fetch(`${apiUrl}/character`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error(error));
}

// Returns one specific character and their metadata
export function getCharacter(apiUrl, apiToken, id) {
  return fetch(`${apiUrl}/character/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error(error));
}

// Returns all movie quotes from one specific character
export function getCharacterQuotes(apiUrl, apiToken, id) {
  return fetch(`${apiUrl}/character/${id}/quote`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${apiToken}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error(error));
}
