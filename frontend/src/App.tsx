import { Route, Routes } from "react-router-dom"
import Mainlayout from "./components/mainlayout"
import Homepage from "./components/homepage"
import Register from "./components/register"
import Login from "./components/login"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Login/>}/>
        <Route element={<Mainlayout/>}>
          <Route path="/" element={<Homepage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App