import { Routes, Route } from "react-router-dom"
import { Navbar } from "@/components/Navbar"
import { Home } from "@/pages/Home"
import { Services } from "@/pages/Services"
import { NotFound } from "@/pages/NotFound"
import "./app.css"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
