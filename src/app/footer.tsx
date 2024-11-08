import Link from "next/link"
function Myfooter () {
    return(
    <footer className="md:fixed md:bottom-0 bg-zinc-900 border-t-2  border-gray-500 flex flex-col sm:flex-row justify-between items-center gap-10 h-auto sm:h-24 w-full ">
         
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
        
        <h2 className="text-white text-3xl font-bold px-10">Portfolio</h2>
        <h3 className="text-gray-500 text-xl font-semibold ">Let&apos;s Build Together.</h3>
        
       
        
    <section className="mr-5">
    <Link href={"https://www.linkedin.com/in/muhammad-yousuf-786yousuf/"}><i className="fab fa-linkedin  text-gray-500 text-5xl hover:transition-transform hover:scale-110 hover:text-purple-500"></i></Link>
    <Link href={"https://github.com/Muhammad-Yousuf3"}><i className="fab fa-github  text-gray-500 text-5xl mx-5 rounded-full hover:transition-transform hover:scale-110 hover:text-purple-500"></i></Link>
    <Link href={"mailto:coolmaster808@gmail.com"}><i className="fa fa-envelope text-gray-500 text-5xl hover:transition-transform hover:scale-110 hover:text-purple-500"></i></Link>
    </section>
        
    </footer>
)}
export default Myfooter