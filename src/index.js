import { getAllBooks, getBook, getBookChapters } from "./book.js";
import { getAllMovies, getMovie, getMovieQuotes } from "./movie.js";
import {
  getAllCharacters,
  getCharacter,
  getCharacterQuotes,
} from "./character.js";
import { getAllQuotes, getSingleMovieQuotes } from "./quote.js";
import { getAllChapters, getChapter } from "./chapter.js";

const apiUrl = "https://the-one-api.dev/v2/"; // URL for API endpoints

export default class OneAPI {
  _apiToken = ""; // Enter API Token

  constructor(apiToken) {
    this._apiToken = apiToken || "";
  }

  getAllBooks() {
    return getAllBooks(apiUrl);
  }
  getBook(bookId) {
    return getBook(apiUrl, bookId);
  }
  getBookChapters(bookId) {
    return getBookChapters(apiUrl, bookId);
  }
  getAllMovies(movieId) {
    return getAllMovies(apiUrl, this._apiToken, movieId);
  }
  getMovie(movieId) {
    return getMovie(apiUrl, this._apiToken, movieId);
  }
  getMovieQuotes(movieId) {
    return getMovieQuotes(apiUrl, this._apiToken, movieId);
  }
  getAllCharacters(charId) {
    return getAllCharacters(apiUrl, this._apiToken, charId);
  }
  getCharacter(charId) {
    return getCharacter(apiUrl, this._apiToken, charId);
  }
  getCharacterQuotes(charId) {
    return getCharacterQuotes(apiUrl, this._apiToken, charId);
  }
  getAllQuotes(quoteId) {
    return getAllQuotes(apiUrl, this._apiToken, quoteId);
  }
  getSingleMovieQuotes(quoteId) {
    return getSingleMovieQuotes(apiUrl, this._apiToken, quoteId);
  }
  getAllChapters(chapterId) {
    return getAllChapters(apiUrl, this._apiToken, chapterId);
  }
  getChapter(chapterId) {
    return getChapter(apiUrl, this._apiToken, chapterId);
  }
}
