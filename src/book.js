import fetch from "cross-fetch";

// Returns all Lord of the Rings books
export function getAllBooks(apiUrl) {
  return fetch(`${apiUrl}/book`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error(error));
}

// Returns one specific book
export function getBook(apiUrl, id) {
  return fetch(`${apiUrl}/book/${id}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error(error));
}

// Returns all chapters from a specific book
export function getBookChapters(apiUrl, id) {
  return fetch(`${apiUrl}/${id}/chapter`, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.error(error));
}
