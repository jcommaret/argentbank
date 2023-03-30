import { Routes, Route } from "react-router-dom"

import Layout from "../pages/Layout/index.jsx"
import Homepage from "../pages/Homepage"
import SignIn from "../pages/SignIn"
import User from "../pages/User"
import Edit from "../pages/Edit"
import Transactions from "../pages/Transactions"
export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="user/:id" element={<User />} />
        <Route path="user/:id/edit" element={<Edit />} />
        <Route path="user/:id/transactions" element={<Transactions />} />
      </Route>
    </Routes>
  )
}
