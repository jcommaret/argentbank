import { Outlet } from "react-router-dom"

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
      <div className="header">test</div>

      <main className="main-container">
        <Outlet />
      </main>
    </>
  )
}
