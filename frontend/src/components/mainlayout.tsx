import { Outlet } from "react-router-dom"
import Navbar from "./navbar"

const Mainlayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 left-0 z-50 ">
        <Navbar />
      </header>

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <footer className="w-full mt-10">
        {/* <Footer /> */}
      </footer>
    </div>
  )
}

export default Mainlayout