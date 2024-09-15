import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import { useImages } from "./hooks/useImages";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { StickyNote } from "./components/Sticky Note/StickyNote";
import { NoteHeader } from "./components/Sticky Note/Note Header/NoteHeader";
import { NoteBody } from "./components/Sticky Note/Note Body/NoteBody";
import "./App.scss";
import { Button } from "./components/Button/Button";
import { Modal } from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = () => {
    setModalOpen(prev => !prev);
  }

  return (
    <>
      <Wrapper>
      {modalOpen ? <Modal isOpen={setModalOpen} /> : null}
        <StickyNote>
          <NoteHeader text="TODO"/>
          <NoteBody>
            <Button action={handleModal} text="+" type="small-btn"/>
          </NoteBody>
        </StickyNote>
        <StickyNote>
          <NoteHeader text="In Progress"/>
        </StickyNote>
        <StickyNote>
          <NoteHeader text="Done"/>
        </StickyNote>
      </Wrapper>
    </>
  );
}

export default App;
