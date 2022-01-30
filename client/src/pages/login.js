//import NavBar from "../components/NavBar"

import Link from "next/link"

export default function LogIn() {

    const IconLeftRigth = _ => (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="18" 
            height="18" 
            fill="currentColor" 
            viewBox="0 0 18 18">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
        </svg>
    )

    const IconUser = _ =>(

        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            fill="currentColor" 
            viewBox="0 0 16 16">
            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg>

    )

    const IconPassword = _ =>(

        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            fill="currentColor" 
            viewBox="0 0 16 16">
            <path d="M8 0a1 1 0 0 1 1 1v5.268l4.562-2.634a1 1 0 1 1 1 1.732L10 8l4.562 2.634a1 1 0 1 1-1 1.732L9 9.732V15a1 1 0 1 1-2 0V9.732l-4.562 2.634a1 1 0 1 1-1-1.732L6 8 1.438 5.366a1 1 0 0 1 1-1.732L7 6.268V1a1 1 0 0 1 1-1z"/>
        </svg>


    )



    return(
        <main className="flex items-center h-screen w-screen justify-center">
            <form className="w-96 h-72 justify-center gap-5 flex items-center flex-col  bg-slate-100 rounded-2xl" >
                <section className="text-slate-700 gap-1 flex flex-row items-center justify-center ">
                    <IconUser/>
                    <input className="bg-transparent placeholder-slate-500 focus-visible:outline-none" placeholder="Username" type="text" />
                </section>
                
                <section className="text-slate-700 gap-1 flex flex-row items-center justify-center">
                    <IconPassword/>
                    <input className="bg-transparent placeholder-slate-500 focus-visible:outline-none" placeholder="Password" type="text" />
                </section>
                <button className="hover:text-slate-800 hover:bg-slate-200 ease-in duration-100 px-5 py-1 w-fit h-fit rounded-3xl text-slate-600">
                    LogIn
                </button>
            </form>
            <Link href="/">
                <a className="flex items-center justify-center text-sm gap-1 absolute top-1.5 left-5 hover:bg-slate-200 p-2 rounded-2xl ease duration-100">
                    <p>Go Back</p>
                </a>
            </Link>

        </main>

    )
    
}
