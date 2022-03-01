import PingForm from "./PingForm.js";
import UserForm from "./UserForm.js";
import SearchSection from "./SearchSection.js";
import { setAllModalsOff } from "../services/modalsServices.js";

const ModalWrapper = ({ children, modalState, setModalsState }) => {
  const handleModalClick = (e) =>
    e.target.classList[0] === "modal" &&
    setModalsState((p) => ({ ...setAllModalsOff(p) }));
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
    return(
        <ModalWrapper modalState={modalState} setModalsState={setModalsState}>
            <section>
                Post!
            </section>
        </ModalWrapper>

    )
}

function ProfileModal({ modalState, setModalsState }){
    return(
            <section>
                Profile!
            </section>
    )

}

function SearchModal({ modalState, setModalsState }) {
  return (
    <ModalWrapper modalState={modalState} setModalsState={setModalsState}>
      <SearchSection />
    </ModalWrapper>
  );
}

function PingFormModal({ modalState, setModalsState }) {
  return (
    <ModalWrapper modalState={modalState} setModalsState={setModalsState}>
      <PingForm />
    </ModalWrapper>
  );
}

function LogInModal({ modalState, setModalsState }) {
  return (
    <ModalWrapper modalState={modalState} setModalsState={setModalsState}>
      <UserForm />
    </ModalWrapper>
  );
}

export { LogInModal, PingModal, SearchModal, PingFormModal, ProfileModal };
