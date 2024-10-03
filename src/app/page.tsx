import Image from "next/image"
import Link from "next/link"

function Homepage(){
  return(
   <main>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
    {/* Image */}
    <Image src={"/pic.jpeg"} alt={"Muhammad Yousuf"} width={300} height={1} className="float-right mr-48 rounded-3xl border-4 border-white my-10 animate-pulse"></Image>
    
    {/* Text */}
    <section id="Home" className="my-32 w-[50%] mx-24 text-justify">
      <h1 className="py-5 text-white font-extrabold text-7xl mx-2">Hello,I&apos;M</h1>
      <h2 className="text-white font-semibold text-5xl  mx-2">Muhammad Yousuf</h2>
      <h3 className="text-white font-semibold mx-2 text-3xl ">Front-End Developer</h3>
      <p className="my-5 text-justify text-white text-xl font-semibold px-3" id="skill">Hi, I&apos;M Muhammad Yousuf, a front-end developer focused on creating efficient and visually appealing web experiences. Hands-on experience in frameworks like Next.js and Tailwind CSS. 
        I&apos;M passionate about solving real-world problems with modern technologies.
       My goal is to keep learning, grow as a full-stack developer, and contribute to innovative projects.</p>
    </section>

    <section className="border-y-8 border-y-white"></section>

       {/* Skills Header*/}
    <section className="mx-10 my-10 "><h1 className="text-white font-bold text-4xl">Skills</h1></section>


         {/* Skills Sections */}
      <section className="flex gap-x-10 justify-evenly">
      <section className="bg-slate-200 h-32 w-48 rounded-xl hover:transition-transform hover:scale-110 hover:bg-slate-100 ">
          <h3 className="text-[#1B263B] text-center my-[58px] font-semibold ">HTML 5</h3></section>
        <section className="bg-slate-200 h-32 w-48 rounded-xl hover:transition-transform hover:scale-110 hover:bg-slate-100">
          <h3 className="text-[#1B263B] text-center my-[58px] font-semibold">CSS</h3></section>
        <section className="bg-slate-200 h-32 w-48 rounded-xl hover:transition-transform hover:scale-110 hover:bg-slate-100">
          <h3 className="text-[#1B263B] text-center my-[58px] font-semibold">TypeScript</h3></section>
        <section className="bg-slate-200 h-32 w-48 rounded-xl hover:transition-transform hover:scale-110 hover:bg-slate-100">
          <h3 className="text-[#1B263B] text-center my-[58px] font-semibold">JavaScript</h3></section>
      </section>

   

   <section className="border-y-8 border-y-white my-16" id="project"></section>


   {/* Project Header */}
      <h1 className="text-white font-bold text-4xl mx-10">TypeScript Projects</h1>
      
      <section className="flex justify-evenly gap-x-5 my-10">

        {/* ATM */}
        <section className="bg-slate-200 w-72 h-80 rounded-lg">

        
         <Link href={"https://github.com/Muhammad-Yousuf3/ATM_Machine_with_basic-features.git"}>
         <Image src={"/atm.jpg"} alt={"atm"} width={220} height={0} className="border-[#1B263B] border-4 rounded-full my-5 mx-[40px] hover:transition-transform hover:scale-110"></Image>
         <h1 className="font-semibold text-2xl py-3 hover:text-gray-400">ATM</h1></Link>
         <p className="font-medium">My CLI ATM Game With Features Like FastCash, CheckBalance, WithDraw.</p>

         </section>


        {/* Number Guessing Game.*/}
        

        <section className="bg-slate-200 w-72 h-80 rounded-lg">
         <Link href={"https://github.com/Muhammad-Yousuf3/cli-number-guessing-game.git"}>
         <Image src={"/num guessing.webp"} alt={"Num Guessing Game"} width={200} height={20} className="border-[#1B263B] border-4 rounded-full my-5 mx-[44px] hover:transition-transform hover:scale-110"></Image>
         <h1 className="font-semibold text-2xl py-3 hover:text-gray-400">Num Guessing Game.</h1></Link>
         <p className="font-medium">My CLI Num Guessing Game.</p>
         </section>
         
      


        {/* Currency Convertor */}
      

         <section className="bg-slate-200 w-72 h-80 rounded-lg">

         <Link href={"https://github.com/Muhammad-Yousuf3/currency_convertor.git"}>
         <Image src={"/currency convertor.png"} alt={"Currency Convertor"} width={200} height={200} className="border-[#1B263B] border-4 rounded-full mx-[44px] hover:transition-transform hover:scale-110"></Image>
         <h2 className="font-semibold text-2xl hover:text-gray-400">Currency Convertor</h2>
         </Link>

         <p className="font-medium">My CLI Currnecy Convertor With Few Currencies and Given Values Not Consist Real Time Data.</p>
         </section>

         

        {/* Calculator */}
      
        <section className="bg-slate-200 w-72 h-80 rounded-lg">
         
         <Link href={"https://github.com/Muhammad-Yousuf3/calculator_with-6operations_bmi.git"}>
         <Image src={"/calculator.jpg"} alt={"calculator"} width={200} height={200}  className="border-[#1B263B] border-4 rounded-full my-5 mx-[40px] hover:transition-transform hover:scale-110"></Image>
         <h1 className="font-semibold text-2xl py-3 hover:text-gray-400">Calculator</h1></Link>
         <p className="font-medium">My CLI Calculator With 6 Basic Operations and BMI.</p>
         </section>
         
      </section>

      <section className="border-y-8 border-y-white my-16"></section>

    <section className="mx-24 my-10" id="contact">
    <h2 className="text-white font-bold text-4xl">Connect With Me</h2>
    <p className=" text-white py-5">Want Amazing and Eye Catching Websites<br/>Contact With Me I&apos;ll Try My Best to Get Back To You.</p>
    <Link href={"https://www.linkedin.com/in/muhammad-yousuf-786yousuf/"}><i className="fab fa-linkedin bg-gray-950 text-[#0A66C2] text-[48px] "></i></Link>
    <Link href={"https://github.com/Muhammad-Yousuf3"}><i className="fab fa-github bg-gray-950 text-white text-[48px] mx-5 rounded-full"></i></Link>
    </section>
    
    
   </main>
   
  )
}
export default Homepage