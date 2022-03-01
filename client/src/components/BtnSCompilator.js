//Add Ping Button
import { setAllModalsOff } from "../services/modalsServices.js";
function BtnAddPing({setModalsState}) {
    const handleClick = (_) => {
        setModalsState(p => ({...setAllModalsOff(p), pingFormModalState:true}))
  };
  const IconAddPing = (_) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="currentColor"
      className="bi bi-plus"
      viewBox="0 0 16 16"
    >
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
    </svg>
  );
  return (

    <button className=" rounded-3xl w-fit h-fit bg-white fixed bottom-5 right-5  hover:scale-110 ease-out duration-200 hover:bg-slate-200 shadow-md"onClick={handleClick}>
    
      <IconAddPing />

    </button>
  );
}

//SignIn Button
function BtnSignIn({ w, h }) {
  const handleClick = (_) => {
    alert("signin in...");
  };

  const iconSignIn = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fillRule="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
    </svg>
  );

  return (
    <button
      className="gap-1 flex items-center w-fit h-full flex-row"
      onClick={handleClick}
    >
      <iconSignIn />
      <small> Sign in</small>
    </button>
  );
}

//LogIn Button
function BtnLogIn({ w, h, setModalsState}) {
  const iconLogIn = (_) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fillRule="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fillule="evenodd"
        d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
      />
      <path
        fillRule="evenodd"
        d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
      />
    </svg>
  );
  return (
    <button
      onClick={(_) => setModalsState(p =>({...setAllModalsOff(p), logInModalState:true}))}
      className="justify-center hover:bg-slate-200 h-11 px-2 rounded-3xl gap-1 flex items-center w-fit h-full flex-row"
    >
      <p> Log In </p>
      {iconLogIn()}
    </button>
  );
}

//Search Button
function BtnSearch({ w, h }) {
  const handleClick = (_) => {
    alert("searching...");
  };

  const iconSearch = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M10 16c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6m13.12 2.88-4.26-4.26A9.842 9.842 0 0 0 20 10c0-5.52-4.48-10-10-10S0 4.48 0 10s4.48 10 10 10c1.67 0 3.24-.41 4.62-1.14l4.26 4.26a3 3 0 0 0 4.24 0 3 3 0 0 0 0-4.24" />
    </svg>
  );

  return <button onClick={handleClick}>


        {iconSearch()}</button>;
}

//Go To Home Button
function BtnHome({ h, w }) {
  const handleClick = (_) => {
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const IconHome = (_) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
      />
      <path
        fillRule="evenodd"
        d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
      />
    </svg>
  );

  return (
      <button
      onClick={handleClick}
      className="hover:bg-slate-200 ease-in duration-100 bg-transparent h-11 rounded-3xl px-3 gap-1 flex items-center w-fit h-full flex-row"
    >
      <IconHome />
    </button>
  );
}
//To User Page Button
function BtnUser() {
  const handleClick = (_) => {
    alert("user page!");
  };

  return <button onClick={handleClick}>User</button>;
}

export { BtnSearch, BtnHome, BtnSignIn, BtnLogIn, BtnUser, BtnAddPing };
