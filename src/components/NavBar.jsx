import { Link } from "react-router-dom"
import Ehizua from "../assets /Ehizua.png"

const NavBar = () => {
  return (
    <nav className="flex justify-between w-full h-[108px] items-center border-b">
        <header className="max-w-[283px] h-[39px]">
            <img src={Ehizua}  />
        </header>

      <div className="hidden lg:flex items-center gap-x-[100px] text-[#666]">
        <Link>Upskill</Link>
        <Link>Creative Technology Programme</Link>
        <Link>About</Link>
        <Link>Hubs</Link>
      </div>

      <div></div>
    </nav>
  )
}

export default NavBar
