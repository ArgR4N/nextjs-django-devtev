import * as Icon from "react-bootstrap-icons";
import { useState } from "react";
const ModalWrapper = ({ children, modalState, setModalsState }) => {
  const handleModalClick = (e) => {
    if (e.target.classList[0] === "modal") {
      const createObj = (p) => {
        let newObj = new Object();
        for (let k in p) {
          newObj[k] = false;
        }
        return newObj;
      };
      setModalsState((p) => ({ ...createObj(p) }));
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
      <form className="bg-slate-50 min-w-fit h-3/5 rounded-3xl overflow-hidden relative mt-16 flex">
        <section className="p-10 justify-evenly flex flex-col">
          <div className="border-2 text-3xl border-slate-400 focus-within:border-slate-500  w-full focus-within:bg-slate-200 ease-out duration-200 text-slate-500 flex items-center gap-2 p-1 pl-2 rounded-sm">
            <Icon.Award />
            <input
              className="outline-none bg-transparent pb-0.5"
              placeholder="Agrega un tituló"
              type="text"
            />
          </div>
          <div className="flex text-xl border-2 border-slate-400 focus-within:border-slate-500  w-full focus-within:bg-slate-200 ease-out duration-200 text-slate-500 gap-2 rounded-sm items-baseline p-2">
            <Icon.Book />
            <textarea
              rows="5"
              className="outline-none bg-transparent w-full"
              placeholder="Una descripcion..."
            />
          </div>

          <div className="flex items-center text-xl border-2 border-slate-400 focus-within:border-slate-500  w-full focus-within:bg-slate-200 ease-out duration-200 text-slate-500 gap-2 rounded-sm pl-2 p-1">
            <Icon.Hash />
            <input list="categorys" className="bg-transparent w-full outline-none" name="browser" id="browser" placeholder="Chose a category"/>
            <datalist id="categorys" className="bg-transparent w-full" >
              <option value="Snippet" />
              <option value="Website" />
              <option value="3d Model" />
              <option value="Envieronment (.dot files?)" />
              <option value="Image" />
            </datalist>
          </div>
        </section>
        <section className="absolute flex items-center justify-center top-0">
          <btn>cerrar</btn>

          <btn>pasar</btn>
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
