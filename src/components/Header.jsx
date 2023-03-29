import logo from "../assets/img/argentBankLogo.png"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <nav class="main-nav">
      <Link to="/" class="main-nav-logo">
        <img class="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        <h1 class="sr-only">Argent Bank</h1>
      </Link>

      <div>
        <Link to="/signin" class="main-nav-item">
          <i class="fa fa-user-circle"></i>
          Sign In
        </Link>
      </div>
    </nav>
  )
}
