import {
    BtnSearch,
    BtnHome,
    BtnLogIn,
    BtnUser
} from "./BtnSCompilator"


export default function NavBar({setModalsState, home}){
    
    return(

        <nav className="fixed top-0 bg-white shadow-lg flex flex-row items-center w-screen px-1 h-14 justify-around text-slate-900">
            <BtnHome home={home} w="20" h="20" />            
            <section className="bg-slate-100 h-11 px-5 rounded-3xl w-4/5 flex flex-row gap-3 text-slate-500 items-center justify-between">  
                <BtnSearch w="19" h="19" />
                <input type="text" placeholder="Search" className="w-full h-full  focus-visible:outline-b bg-transparent placeholder:text-slate-500" />

            </section>
            <BtnLogIn setModalsState={setModalsState} w="20" h="20" /> 
        </nav>

    )

}
