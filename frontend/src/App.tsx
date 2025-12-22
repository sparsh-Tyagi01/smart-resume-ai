import { Route, Routes } from "react-router-dom"
import Mainlayout from "./components/mainlayout"
import Homepage from "./components/homepage"

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Mainlayout/>}>
          <Route path="/" element={<Homepage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App