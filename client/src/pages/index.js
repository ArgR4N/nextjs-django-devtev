//Components
import NavBar from "../components/NavBar.js";
import PostsSection from "../components/PostsSection.js";
import { BtnAddPing } from "../components/BtnSCompilator.js";
import { LogInModal, PingModal } from "../components/ModalSCompilator.js";

//React Exports
import { useState } from "react";

export default function Home({ posts }) {
  const [modalsState, setModalsState] = useState({
    logInModalState: false,
    pingModalState: false,
  });
  return (
    <main className="overflow-hidden">
      <NavBar setModalsState={setModalsState} />
      <PostsSection posts={posts} />
      <BtnAddPing setModalsState={setModalsState} />
      <LogInModal modalState={modalsState.logInModalState} setModalsState={setModalsState} />
      <PingModal modalState={modalsState.pingModalState} setModalsState={setModalsState} />
    </main>
  );
}

export async function getStaticProps() {
  const getRandomHeight = (_) =>
    Math.floor(Math.random() * (750 - 250 + 1)) + 250;
  let posts = [...Array(300).keys()].map(
    (_) => `https://picsum.photos/352/${getRandomHeight()}`
  );
  return {
    props: {
      posts,
    },
  };
}
