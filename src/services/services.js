import { getData } from "."

export function getToken() {
  return getData("login").then((data) => {
    const token = data.body.token
    console.log(token)
    return token
  })
}
