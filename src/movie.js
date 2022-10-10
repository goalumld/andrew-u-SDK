import fetch from "cross-fetch";

// Returns all movies related to Lord of the Rings
export function getAllMovies(apiUrl, apiToken) {
  return fetch(`${apiUrl}/movie`, {
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

// Returns one specific movie
export function getMovie(apiUrl, apiToken, id) {
  return fetch(`${apiUrl}/movie/${id}`, {
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

// Returns all movie quotes from a specific movie (Only works for LotR trilogy)
export function getMovieQuotes(apiUrl, apiToken, id) {
  return fetch(`${apiUrl}/movie/${id}/quote`, {
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
