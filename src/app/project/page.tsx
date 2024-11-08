"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"


function Project(){

    const [tsopen,tsclose]=useState(true);
    const tsBtn=()=>tsclose(!tsopen);

    const [frontendOpen,frontendClose]=useState(true);
    const frontendBtn=()=>frontendClose(!frontendOpen);

    return(
        <main className="h-full bg-black mt-40 mb-36">
             {/* Project Header */}
      <h1 className="text-white font-bold text-4xl ml-5 md:mx-10  md:text-left">My Projects</h1>

     <section className="mt-5 ml-2 md:ml-10 flex gap-5">
     <button onClick={tsBtn} className={`w-44 h-14 rounded-lg text-center text-white bg-zinc-800 hover:transition-transform hover:scale-110  ${tsopen ? 'bg-purple-800' : 'bg-zinc-800 '}`}>TypeScript</button>
     <button onClick={frontendBtn} className={`w-44 h-14 rounded-lg text-center text-white bg-zinc-800 hover:transition-transform hover:scale-110 ${frontendOpen ? 'bg-zinc-800' : 'bg-purple-800 '} `}>Front-End</button>
     </section> 
      
      <section className=" bg-black">

        {/* TypeScript Projects */}
        <section className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 ml-10 mt-12 mb-10 ${tsopen ? 'block' : 'hidden'}`}>

        {/* ATM */}
        <section className="bg-[#111] w-72 h-96 rounded-lg text-white text-justify mb-5">

        
<Link href={"https://github.com/Muhammad-Yousuf3/ATM_Machine_with_basic-features.git"}>
<Image src={"/atm.jpg"} alt={"atm"} width={220} height={0} className="w-full h-[50%] rounded hover:transition-transform hover:scale-110"></Image>
<h1 className="font-semibold text-2xl pl-2 pb-3 pt-2 hover:text-gray-400">ATM</h1></Link>
<p className="font-medium pl-2 pr-2">My CLI App Made With TypeScript Which Consist ATM Functionality Have Features Like FastCash, CheckBalance, WithDraw.</p>
<Link href={"https://github.com/Muhammad-Yousuf3/ATM_Machine_with_basic-features.git"}>
<p className="text-gray-500 hover:text-purple-500 font-bold pl-2 py-3">Github</p>
</Link>

</section>


{/* Number Guessing Game.*/}


<section className="bg-[#111] w-72 h-96 mb-5 rounded-lg text-white text-justify">
<Link href={"https://github.com/Muhammad-Yousuf3/cli-number-guessing-game.git"}>
<Image src={"/num guessing.webp"} alt={"number"} width={220} height={0} className="w-full  h-[50%] rounded hover:transition-transform hover:scale-110"></Image>
<h1 className="font-semibold text-2xl pl-2 pb-3 hover:text-gray-400 pt-2">Num Guessing Game</h1></Link>
<p className="font-medium pl-2 pr-2">My CLI App Made With TypeScript. It is a CLI Game in Which User Needs To Guess a Number Similar to Computer&apos;s Guessed Number.</p>
<Link href={"https://github.com/Muhammad-Yousuf3/cli-number-guessing-game.git"}>
<p className="text-gray-500 hover:text-purple-500 font-bold pl-2 py-3">Github</p>
</Link>
</section>




{/* Currency Convertor */}


<section className="bg-zinc-900 w-72 h-96 rounded-lg mb-5 text-white text-justify">

<Link href={"https://github.com/Muhammad-Yousuf3/currency_convertor.git"}>
<Image src={"/currency convertor.png"} alt={"number"} width={220} height={0} className="w-full h-[50%] rounded hover:transition-transform hover:scale-110"></Image>
<h1 className="font-semibold text-2xl pl-2 pb-3 hover:text-gray-400 pt-2">Currency Convertor</h1></Link>
<p className="font-medium pl-2 pr-2">My CLI App Made With TypeScript. It is a Currency Convertor in Which You Can Convert Given Currecies With Each Other.</p>
<Link href={"https://github.com/Muhammad-Yousuf3/currency_convertor.git"}>
<p className="text-gray-500 hover:text-purple-500 font-bold pl-2 py-3">Github</p>
</Link>
</section>



{/* Calculator */}

<section className="bg-zinc-900 w-72 h-96 rounded-lg mb-5 text-white text-justify">

<Link href={"https://github.com/Muhammad-Yousuf3/calculator_with-6operations_bmi.git"}>
<Image src={"/calculator.jpg"} alt={"calculator"} width={220} height={0} className="w-full h-[50%] rounded hover:transition-transform hover:scale-110"></Image>
<h1 className="font-semibold text-2xl pl-2 pb-3 hover:text-gray-400 pt-2">Calculator And BMI</h1></Link>
<p className="font-medium pl-2 pr-2">My CLI Calculator Made With TypeScript. It is a Calculator With 6 Basic Features Like Addition, Exponentiation And BMI Also.</p>
<Link href={"https://github.com/Muhammad-Yousuf3/calculator_with-6operations_bmi.git"}>
<p className="text-gray-500 hover:text-purple-500 font-bold pl-2 py-3">Github</p>
</Link>
</section>
        </section>
      
      {/* FrontEnd */}
      <section className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ml-10 mt-10 gap-y-10 ${frontendOpen ? 'hidden' : 'block'}`}>

      <section className="bg-zinc-900 w-72 h-96 rounded-lg mb-5 text-white text-justify">
         
         <Link href={"https://responsive-next-web-phi.vercel.app"}>
         <Image src={"/transportweb.png"} alt={"transport web"} width={220} height={0} className="w-full h-[50%] rounded hover:transition-transform hover:scale-110"></Image>
         <h1 className="font-semibold text-2xl pl-2 pb-3 hover:text-gray-400 pt-2">Freight Transportation </h1></Link>
         <p className="font-medium pl-2 pr-2">My Front-End Project. Made With TailWindCSS And NextJS. This Is My Freight Transportation Website.</p>
         <Link href={"https://responsive-next-web-phi.vercel.app"}>
         <p className="text-gray-500 hover:text-purple-500 font-bold pl-2 py-3">Website</p>
         </Link>
      </section>

      <section className="bg-zinc-900 w-72 h-96 rounded-lg mb-5 text-white text-justify">
         
         <Link href={"https://resume-sepia-omega.vercel.app"}>
         <Image src={"/resume.png"} alt={"resume"} width={220} height={0} className="w-full h-[50%] rounded hover:transition-transform hover:scale-110"></Image>
         <h1 className="font-semibold text-2xl pl-2 pb-3 hover:text-gray-400 pt-2">Resume</h1></Link>
         <p className="font-medium pl-2 pr-2">My Front-End Project. Made With HTML, CSS And JavaScript. This Is My Simple and Clean Resume.</p>
         <Link href={"https://resume-sepia-omega.vercel.app"}>
         <p className="text-gray-500 hover:text-purple-500 font-bold pl-2 py-3">Website</p>
         </Link>
      </section>

      </section>

      </section>
        </main>
    )
}
export default Project