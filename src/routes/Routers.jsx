import { Routes, Route } from "react-router-dom"

import Layout from "../pages/Layout/index.jsx"
import Homepage from "../pages/Homepage"
import UserPage from "../pages/User"

export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route index path="user/:id" element={<UserPage />} />
      </Route>
    </Routes>
  )
}
