import { useState } from "react";
import * as Icon from "react-bootstrap-icons";

export default function LogInModal({ logInModalOn, setLogInModalOn }) {
  const [logInOn, setLogInOn] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleModalClick = (e) => {
    console.log(e.target.id);
    if (e.target.id === "logInModal") setLogInModalOn(false);
  };

  const SignInForm = (_) => (
    <>
      <section className="border-2 border-slate-400 focus-within:border-slate-500  w-full focus-within:bg-slate-200 ease-out duration-200 text-slate-500 flex items-center gap-2 p-0.5 pl-2 rounded-sm">
        <Icon.PersonFill />
        <input
          className="bg-transparent outline-none w-full placeholder-slate-500 "
          placeholder="Username"
          type="text"
        />
      </section>

      <section className="border-2 border-slate-400 focus-within:border-slate-500  w-full focus-within:bg-slate-200 ease-out duration-200 text-slate-500 flex items-center gap-2 p-0.5 pl-2 rounded-sm">
        <Icon.Asterisk />
        <input
          className="bg-transparent outline-none w-full placeholder-slate-500 "
          placeholder="Password"
          type="password"
        />
      </section>

      <section className="border-2 border-slate-400 focus-within:border-slate-500  w-full focus-within:bg-slate-200 ease-out duration-200 text-slate-500 flex items-center gap-2 p-0.5 pl-2 rounded-sm">
        <Icon.UnlockFill />
        <input
          className="bg-transparent outline-none w-full placeholder-slate-500 "
          placeholder="Confirm Password"
          type="password"
        />
      </section>

      <section className="border-2 border-slate-400 focus-within:border-slate-500  w-full focus-within:bg-slate-200 ease-out duration-200 text-slate-500 flex items-center gap-2 p-0.5 pl-2 rounded-sm">
        <Icon.EnvelopeFill />

        <input
          className="bg-transparent outline-none w-full placeholder-slate-500 "
          placeholder="Email"
          type="text"
        />
      </section>

      <section className="border-2 border-slate-400 focus-within:border-slate-500  w-full focus-within:bg-slate-200 ease-out duration-200 text-slate-500 flex items-center gap-2 p-0.5 pl-2 rounded-sm">
        <Icon.EnvelopeCheckFill />

        <input
          className="bg-transparent outline-none w-full placeholder-slate-500 "
          placeholder="Confirm Email"
          type="text"
        />
      </section>
      <button className="hover:text-slate-800 hover:bg-slate-200 ease-in duration-100 px-5 py-1 w-fit h-fit rounded-3xl text-slate-600 ">
        Sing In
      </button>
    </>
  );

  const LogInForm = (_) => (
    <>
      <section className="border-2 border-slate-400 focus-within:border-slate-500  w-full focus-within:bg-slate-200 ease-out duration-200 text-slate-500 flex items-center gap-2 p-0.5 pl-2 rounded-sm">
        <Icon.PersonFill />
        <input
          className="bg-transparent outline-none w-full placeholder-slate-500 "
          placeholder="Username"
          type="text"
        />
      </section>

      <section className="border-2 border-slate-400 focus-within:border-slate-500  w-full focus-within:bg-slate-200 ease-out duration-200 text-slate-500 flex items-center gap-2 p-0.5 pl-2 rounded-sm">
        <Icon.Asterisk />
        <input
          className="bg-transparent outline-none w-full placeholder-slate-500 "
          placeholder="Password"
          type="password"
        />
      </section>
      <button className="hover:text-slate-800 hover:bg-slate-200 ease-in duration-100 px-5 py-1 w-fit h-fit rounded-3xl text-slate-600 ">
        Log In
      </button>
    </>
  );

  return (
    <section
      id="logInModal"
      onClick={handleModalClick}
      className={`fixed inset-0 ${
        logInModalOn ? "flex" : "hidden"
      } bg-modal items-center justify-center`}
    >
      <form
        onSubmit={handleSubmit}
        className="relative ease duration-300 shadow-2xl w-96  p-10 justify-center gap-5 flex items-center flex-col  bg-slate-100 rounded-md"
      >
        <strong>{logInOn ? "Log in" : "Sign in"} to Tevdev </strong>
        <section className="w-full">
          <div className="flex flex-row gap-2">
            <button
              onClick={(_) => {
                setLogInOn(true);
              }}
              className={`${
                logInOn ? "border-b-2 font-medium" : ""
              } border-slate-400`}
            >
              Log In
            </button>

            <button
              onClick={(_) => {
                setLogInOn(false);
              }}
              className={`${
                !logInOn ? "border-b-2 font-medium" : ""
              }  border-slate-400`}
            >
              Sign In
            </button>
          </div>
          <hr className="border-slate-300 w-full rounded-3xl" />
        </section>
        {logInOn ? <LogInForm /> : <SignInForm />}

        <button
          onClick={(_) => setLogInModalOn(false)}
          className="absolute top-2 right-2 cursor-pointer hover:text-red-400 text-red-500"
        >
          <Icon.XLg />
        </button>
      </form>
    </section>
  );
}
