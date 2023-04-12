import { getData } from "."

export function getUser() {
  return getData("login", {
    body: JSON.stringify({
      email: "tony@stark.com",
      password: "password123",
    }),
  }).then(function (data) {
    const token = data.token
    return token
  })
}
