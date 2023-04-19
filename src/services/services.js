import { getData } from "."

export function Login() {
  return getData("login").then((data) => {
    const token = data.body.token
    console.log(token)
    return token
  })
}
