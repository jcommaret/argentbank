const API_URL = "http://localhost:3001/api/v1/user"



export function getData(url) {
  const email = "tony@stark.com"
  const password = "password123"

  const myHeaders = new Headers()
  myHeaders.append("Content-Type", "application/json")
  myHeaders.append("Authorization", "Bearer TEST")

  const raw = JSON.stringify({
    email: email,
    password: password,
  })

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  }

  if (url) {
    return fetch(`${API_URL}/${url}`, requestOptions).then(
      async (res) => await res.json()
    )
  }
}
