import Image from "next/image"


function Homepage(){
  return(
   <main>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
    <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
    <section className="flex sm:flex-row justify-evenly w-350:items-center w-350:flex-col ">
  
    {/* Text */}
    <section id="Home" className="sm:w-[50%] sm:max-h-min mt-32 sm:mb-20 w-350:w-[100%] w-350:pl-5 md:pl-0 w-350:pr-5">
      <h1 className="pb-5 text-white  font-extrabold text-7xl">Hello,I&apos;M</h1>
      <h2 className="text-purple-600 font-semibold text-5xl ">Muhammad Yousuf</h2>
      <h3 className="text-white font-semibold text-3xl ">Front-End Developer</h3>
      <p className="pt-5 text-justify  text-white text-xl font-semibold " id="skill">Hi, I&apos;M Muhammad Yousuf, a front-end developer focused on creating efficient and visually appealing web experiences. Hands-on experience in frameworks like Next.js and Tailwind CSS. 
        I&apos;M passionate about solving real-world problems with modern technologies.
       My goal is to keep learning, grow as a full-stack developer, and contribute to innovative projects.</p>
    </section>

    <Image src={"/pic.jpeg"} alt={"Muhammad Yousuf"} width={"300"} height={"100"} className="sm:w-72 sm:h-96 sm:mt-28 sm:mb-20 sm:rounded-3xl border-4 border-white sm:animate-pulse w-350:w-60 w-350:h-60 w-350:rounded-full w-350:mt-10 w-350:mb-10"></Image>
    </section>
                                                                                
   </main>
   
  )
}
export default Homepage