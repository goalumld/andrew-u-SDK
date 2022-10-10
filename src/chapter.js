import fetch from "cross-fetch";

// Returns a list of all book chapters
export function getAllChapters(apiUrl, apiToken) {
  return fetch(`${apiUrl}/chapter`, {
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

// Returns one specific chapter from a book
export function getChapter(apiUrl, apiToken, id) {
  return fetch(`${apiUrl}/chapter/${id}`, {
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
