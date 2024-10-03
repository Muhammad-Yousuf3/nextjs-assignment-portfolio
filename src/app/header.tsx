import Link from "next/link"

function Header(){
  return(
    <header className="flex justify-between bg-slate-200 fixed top-0 z-10 w-full">
        {/* Logo */}
      <section>
        <h2 className="py-2 px-10 font-bold text-3xl text-[#1B263B] ">Portfolio</h2>
      </section>

      {/* Navbar */}

      <nav>
        <ul className="flex gap-x-4 mx-10 text-[#1B263B]  py-3">
          <li className="hover:bg-slate-400"><Link href="/">Home</Link></li>
          <li className="hover:bg-slate-400"><Link href="#skill">Skills</Link></li>
          <li className="hover:bg-slate-400"><Link href="#project">Projects</Link></li>
          <li className="hover:bg-slate-400"><Link href="#contact">ContactMe</Link></li>
        </ul>
      </nav>
    
    </header>
   
  )
}
export default Header