import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import "./index.scss"
/**
 * Layout component is in charge of displaying the layout of the website : header, sidebar and main Outlet
 * @component Layout component
 * @returns {JSX.Element} Layout component
 * @exports Layout component
 */
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
