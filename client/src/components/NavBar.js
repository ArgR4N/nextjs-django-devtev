import {
    BtnSearch,
    BtnHome,
    BtnLogIn,
    BtnUser
} from "./BtnSCompilator"
import { setAllModalsOff } from "../services/modalsServices.js"

export default function NavBar({setModalsState, home}){
    
    const handleClick = e => e.target.classList[0] === "navBar" && setModalsState(p => ({...p, shearchModalState:false}))

    return(

        <nav onClick={handleClick} className="navBar fixed top-0 bg-white shadow-lg flex z-10 flex-row items-center  text-md w-screen px-1 h-14 justify-around text-slate-900">
            <BtnHome home={home} w="20" h="20" />            
            <section onClick={_ => setModalsState(p => ({...setAllModalsOff(p), shearchModalState:true}))} className="searchBar bg-slate-100 hover:bg-slate-200 focus-within:text-lg h-11 px-5 rounded-3xl w-1/5 focus-within:w-2/5 ease-in-out duration-500 flex flex-row gap-3 text-slate-500 items-center justify-between">  
                <BtnSearch w="19" h="19" />
                <input type="text" placeholder="Search" className="w-full h-full  outline-none bg-transparent placeholder:text-slate-500" />

            </section>
            <BtnLogIn setModalsState={setModalsState} w="20" h="20" /> 
        </nav>

    )

}
