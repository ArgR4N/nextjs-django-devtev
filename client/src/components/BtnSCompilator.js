import Link from "next/link";

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
      {iconSignIn()}
      <small> Sign in</small>
    </button>
  );
}

//LogIn Button
function BtnLogIn({ w, h, setLogInModalOn}) {
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
        onClick={_ => setLogInModalOn(true)}
        className="justify-center hover:bg-slate-200 h-11 px-2 rounded-3xl gap-1 flex items-center w-fit h-full flex-row">

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
      viewBox="0 0 16 16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
    </svg>
  );

  return <button onClick={handleClick}>{iconSearch()}</button>;
}

//Go To Home Button
function BtnHome({ h, w }) {
  const handleClick = (_) => {
    alert("home sweet home");
  };

  const iconHome = (_) => (
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
      className="hover:bg-slate-200 ease-in duration-100 bg-transparent h-11 rounded-3xl px-3 gap-1 flex items-center w-fit h-full flex-row"
      onClick={handleClick}
    >
      {iconHome()}
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

export { BtnSearch, BtnHome, BtnSignIn, BtnLogIn, BtnUser };
