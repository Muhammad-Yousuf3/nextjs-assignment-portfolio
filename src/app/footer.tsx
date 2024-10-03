import Link from "next/link"
function Myfooter () {
    return(
    <footer className="bg-slate-200 flex justify-between h-[80px]">
         <h2 className="text-[#1B263B] text-3xl font-bold my-5 px-10">Portfolio</h2>

        <section className="my-5">
        <h3 className="text-[#1B263B] text-xl font-semibold py-2">Let&apos;s Build Together.</h3>
        </section>

        <section className="my-5 px-10">
        <Link href={"https://www.linkedin.com/in/muhammad-yousuf-786yousuf/"}><i className="fab fa-linkedin bg-slate-200 text-[#0A66C2] text-[48px] "></i></Link>
    <Link href={"https://github.com/Muhammad-Yousuf3"}><i className="fab fa-github bg-slate-200 text-black text-[48px] mx-5 rounded-full"></i></Link>
        </section>
    </footer>
)}
export default Myfooter