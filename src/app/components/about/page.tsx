"use client"
import { useState } from "react"
import Image from "next/image"
function About(){
    
  const [eduon,eduoff]=useState(true)  
  const [skillon,skilloff]=useState(true)
  
  const Edu_Btn=()=>eduoff(!eduon)
  const Skill_Btn=()=>skilloff(!skillon)
    return(
        <main className="mt-40 mb-36">
            
    <section className="flex md:flex-row justify-around w-350:flex-col gap-5 items-center pl-5 pr-5">
    <Image src={"/boy.webp"} alt={"Karachi"} width={500} height={200} className="w-96 h-96 rounded "></Image>
    
    <section className="sm:w-[60%] w-350:w-[100%]">
    <h2 className="text-purple-600 pb-2 font-bold text-4xl">About Me</h2>
        <p className="text-lg text-white text-justify">
Hello, I&apos;m <span className="text-purple-600">Muhammad Yousuf</span>, a Front-End Developer from Karachi, Pakistan.
I specialize in HTML5, CSS3, Tailwind CSS, JavaScript, and TypeScript and have hands-on experience with Next.js and React. Alongside web development,
I am actively learning Generative AI to stay at the forefront of emerging technologies.
Currently, I am enhancing my skills through institutes like PIAIC, GIAIC, and AIT. My goal is to become a successful Full-Stack Developer and contribute to impactful projects across diverse domains.
            </p>

           {/* SKILLS AND EDUCATION */}
            <section className="flex gap-x-5 mt-10 ">
        <section>
        {/* btn1 */}
        <button onClick={Edu_Btn} className={`text-gray-500 text-2xl font-semibold cursor-pointer focus:border-b-4 border-purple-600 ${eduon ? 'border-opacity-0' : 'border-opacity-100'}`}>Education</button>
        <section className={`text-white pt-5 block ${eduon ? 'hidden':'block'}`}>
            <li>Governor Sindh Initiaive For AI,Metaverse and Web3.0</li>
            <li>Aligarh Institute of Technology.</li>
            <li>PIAIC</li>
        </section>
        </section>
        
       {/* btn 2 */}
        <section> 
        <button onClick={Skill_Btn} className={`text-gray-500 text-2xl font-semibold cursor-pointer focus:border-b-4 border-purple-600 ${skillon ? 'border-opacity-0' : 'border-opacity-100'}`}>Skills</button>
        
        <section className={`text-white pt-5 block ${skillon ? 'hidden' : 'block'}`}>
        <li>HTML 5</li> 
        <li>CSS 3</li> 
        <li>TailwindCSS</li>
        <li>TypeScript</li> 
        <li>JavaScript</li> 
        </section>
        
        
        </section>

    </section>


    </section>
    </section>

  

        </main>
    )
}

export default About