const API_URL = "http://localhost:3001/api/v1/user"

// fetch data from API using fetch with bearer token async/await

export function getData(url) {
  if (url) {
    return fetch(`${API_URL}/${url}`, {}).then((response) => response.json())
  }
}
