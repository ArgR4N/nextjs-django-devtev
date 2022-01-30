//Components
import NavBar from "../components/NavBar.js"
import PostSection from "../components/PostSection.js"
import LogInModal from "../components/LogInModal.js"

//React Exports
import { useState } from "react"

export default function Home() {
    
    const [ logInModalOn, setLogInModalOn ] = useState()

    return ( 
        <main className="overflow-hidden">
            <NavBar setLogInModalOn={setLogInModalOn}/>
            
            <PostSection/>
            
            <LogInModal setLogInModalOn={setLogInModalOn} logInModalOn={logInModalOn} />
        </main>

    )
}
