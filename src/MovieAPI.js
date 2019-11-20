import { key } from "./ApiKey"

const api = 'https://api.themoviedb.org/3'

// Generate a unique token for storing your bookshelf data on the backend server.
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)

export const discover = (query) =>
  fetch(`${api}/discover/movie?${query}&api_key=${key}`, { headers })
    .then(res => res.json())
    .then(data => data.results)

