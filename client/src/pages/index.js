//Components
import NavBar from "../components/NavBar.js";
import PostsSection from "../components/PostsSection.js";
import { BtnAddPing } from "../components/BtnSCompilator.js";
import {
  LogInModal,
  PingFormModal,
  SearchModal,
  PingModal,
  ProfileModal,
} from "../components/ModalSCompilator.js";

//React Exports
import { useState, useEffect } from "react";

export default function Home({ posts }) {
  const [pings, setPings] = useState(posts);
  useEffect((_) => {
    console.log("render");
  });

  const [modalsState, setModalsState] = useState({
    logInModalState: false,
    pingFormModalState: false,
    shearchModalState: false,
    pingModalState: false,
    profileModalState: false,
  });

  return (
    <main className="overflow-hidden">
      <NavBar setModalsState={setModalsState} />
      <PostsSection posts={pings} />
      <BtnAddPing setModalsState={setModalsState} />
      <LogInModal
        modalState={modalsState.logInModalState}
        setModalsState={setModalsState}
      />
      <PingFormModal
        modalState={modalsState.pingFormModalState}
        setModalsState={setModalsState}
      />
      <SearchModal
        modalState={modalsState.shearchModalState}
        setModalsState={setModalsState}
      />
      <PingModal
        modalState={modalsState.pingModalState}
        setModalsState={setModalsState}
      />
      <ProfileModal
        modalState={modalsState.profileModalState}
        setModalsState={setModalsState}
      />
    </main>
  );
}

export async function getStaticProps() {
  const getRandomHeight = (_) => (Math.floor(Math.random() * (750 - 250 + 1)) + 250)
  let posts = [...Array(300).keys()].map(
    (_) => `https://picsum.photos/352/${getRandomHeight()}`
  );
  return {
    props: {
      posts,
    },
  };
}
