import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
const ModalWrapper = ({ children, modalState, setModalsState }) => {
  const handleModalClick = (e) => {
    if (e.target.classList[0] === "modal") {
      const createObj = (p) => {
        let newObj = new Object();
        for(let k in p) {
          newObj[k] = false;
        }
        return newObj;
      };
      setModalsState((p) => ({...createObj(p)}));
    }
  };
  return (
    <section
      onClick={handleModalClick}
      className={`modal fixed inset-0 ${
        modalState ? "flex" : "hidden"
      } bg-modal items-center justify-center`}
    >
      {children}
    </section>
  );
};

function PingModal({ modalState, setModalsState }) {
  return (
    <ModalWrapper modalState={modalState} setModalsState={setModalsState}>
      <form className="bg-white min-w-fit h-3/5 rounded-3xl overflow-hidden mt-16 flex">
        <section className="flex w-fit items-center justify-center p-4">
          <input type="file" />
        </section>

        <section className="p-10 justify-evenly flex flex-col">
          <input
            className="text-slate-600 text-3xl border-b bg-slate-100 border-slate-200 pb-2 pt-1 px-1 focus-active:border-slate-400 outline-none"
            placeholder="Agrega un tituló"
            type="text"
          />
          <textarea
            rows="5"
            className="outline-none text-slate-600 w-full rounded-md  text-xl p-1 bg-slate-100"
            placeholder="Una descripcion..."
          />
          <input
            className="text-slate-800 px-3 min-w-fit hover:text-slate-500 bg-green-200 cursor-pointer hover:bg-green-100 text-md w-1/5 h-10 rounded-lg"
            value="Crear ping!"
            type="submit"
          />
        </section>
      </form>
    </ModalWrapper>
  );
}
function LogInModal({ modalState, setModalsState }) {
  const [logInOn, setLogInOn] = useState(true);
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
    <ModalWrapper modalState={modalState} setModalsState={setModalsState}>
      <form
        onSubmit={(e) => e.preventDefault()}
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
          onClick={(_) => setModalsState(false)}
          className="absolute top-2 right-2 cursor-pointer hover:text-red-400 text-red-500"
        >
          <Icon.XLg />
        </button>
      </form>
    </ModalWrapper>
  );
}

export { LogInModal, PingModal };
