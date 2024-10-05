import { Routes, Route, Navigate} from "react-router-dom"

import { Repositories, Dashboard } from "../pages"

export const AppRoutes = () => {
  return(
    <Routes>
     <Route path="/dashboard" element={<Dashboard />} />
     <Route path="/repositories" element={<Repositories />} />

     <Route path="*" element={<Navigate to="/dashboard" />} />
   </Routes>
  )
}