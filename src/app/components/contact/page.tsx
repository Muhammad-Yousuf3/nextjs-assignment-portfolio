import Link from "next/link"


function Contact(){

    return(
        <main className="flex">
            
        <section className="min-h-screen w-[40%] md:w-[30%] bg-purple-600 rounded-tr-xl rounded-br-xl"></section>

        <section className="md:w-[50%] w-[80%] h-2/4 rounded-xl bg-zinc-800 md:mt-24 mt-44 md:-ml-48 -ml-36">
            <h2 className="font-bold text-4xl text-white pt-5 pl-5">Connect With Me</h2>

            <section className="flex flex-col gap-y-8 ml-10 mt-5">


                <section className="flex gap-x-7">
                <i className="fa fa-map-marker text-white text-3xl hover:text-purple-600"></i>
                <p className="text-white border-b-2 text-lg">Karachi Pakistan, Gulshan-e-Iqbal Block 10-A</p>
                </section>

                <section className="text-white flex gap-x-7">
                <i className="fa fa-phone text-3xl hover:text-purple-600"></i>
                <p className="border-b-2 text-lg">0311-2619419</p>
                </section>

                <section>
                <Link className="flex gap-x-7 font-bold" href={"mailto:coolmaster808@gmail.com"}>
                <i className="fa fa-envelope text-white text-3xl hover:text-purple-600"></i>
                <p className="text-white border-b-2 text-lg">coolmaster808@gmail.com</p></Link>
                </section>


            </section>

            <h2 className="text-purple-600 text-4xl font-bold pl-5 pt-7">Follow Me</h2>
            <section className="ml-12 mt-3 mb-3">
            <Link href={"https://www.linkedin.com/in/muhammad-yousuf-786yousuf/"}><i className="fab fa-linkedin  text-gray-500 text-5xl hover:transition-transform hover:scale-110 hover:text-purple-500 "></i></Link>
            <Link href={"https://github.com/Muhammad-Yousuf3"}><i className="fab fa-github  text-gray-500 text-5xl mx-5 rounded-full hover:transition-transform hover:scale-110 hover:text-purple-500"></i></Link>
            </section>
        
        
        </section>
            
        </main>
    )
}
export default Contact