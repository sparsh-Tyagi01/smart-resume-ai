import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
      </Routes>
    </div>
  )
}

export default App