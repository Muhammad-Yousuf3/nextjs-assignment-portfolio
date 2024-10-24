"use client"
import { useState } from "react"
import Link from "next/link"

function Header(){
  const [Open,Close]=useState(false)

  const Click=()=>Close(!Open)
  
  return(
    <header className="flex justify-between border-b-2 items-center bg-zinc-900 border-gray-500 w-full md:fixed md:top-0 md:z-10">
      <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css"
    rel="stylesheet"
/>
        {/* Logo */}
      <section>
        <h2 className="px-10 font-bold text-3xl text-white ">Portfolio</h2>
      </section>

      <button onClick={Click} className="text-white w-350:block md:hidden text-3xl pt-3 pr-5"><i className="ri-menu-line"></i></button>      
      {/* Navbar */}

      <nav className={`text-gray-500 bg-zinc-900 w-64 h-auto fixed top-0 right-0 ${Open ? 'translate-x-0':'translate-x-full'} md:static md:mr-96 `}>
      <button onClick={Click} className="text-white w-350:block md:hidden text-3xl float-right pt-2 pr-3">x</button>      

        <ul className="flex flex-col md:gap-x-4 gap-y-5 float-left mx-5 items-center md:float-none md:gap-y-0 md:flex-row md:py-5 py-10">
          <li className="hover:text-purple-600"><Link href="/">Home</Link></li>
          <li className="hover:text-purple-600"><Link href="/about">About</Link></li>
          <li className="hover:text-purple-600"><Link href="/project">Projects</Link></li>
          <li className="hover:text-purple-600"><Link href="/contact">ContactMe</Link></li>
        </ul>
        
      </nav>
    
    </header>
   
  )
}
export default Header