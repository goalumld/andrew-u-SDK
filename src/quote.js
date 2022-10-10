import fetch from "cross-fetch";

// Returns all movie quotes
export function getAllQuotes(apiUrl, apiToken) {
  return fetch(`${apiUrl}/quote`, {
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

// Returns one specific quote from a movie
export function getSingleMovieQuotes(apiUrl, apiToken, id) {
  return fetch(`${apiUrl}/quote/${id}`, {
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
