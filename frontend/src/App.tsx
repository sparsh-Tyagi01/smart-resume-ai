import { Route, Routes } from "react-router-dom"
import Mainlayout from "./components/mainlayout"
import Homepage from "./components/homepage"
import Register from "./components/register"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route element={<Mainlayout/>}>
          <Route path="/" element={<Homepage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App