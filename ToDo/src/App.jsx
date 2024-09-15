import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useFetch } from "./hooks/useFetch";
import { useImages } from "./hooks/useImages";
import { useReducer, useState } from "react";
import { ToDoInitValue, ToDoReducer } from "./hooks/ToDoReducer";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Modal } from "./components/Modal/Modal";
import { StickyNote } from "./components/Sticky Note/StickyNote";
import { NoteHeader } from "./components/Sticky Note/Note Header/NoteHeader";
import { NoteBody } from "./components/Sticky Note/Note Body/NoteBody";
import { Button } from "./components/Button/Button";
import "./App.scss";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const [taskData, dispatch] = useReducer(ToDoReducer, ToDoInitValue);

  const handleModal = () => {
    setModalOpen(prev => !prev);
  }

  return (
    <>
      <Wrapper>
        {modalOpen ? <Modal isOpen={setModalOpen} dispatch={dispatch}/> : null}
        <StickyNote>
          <NoteHeader text="TODO"/>
          <NoteBody>
            <Button action={handleModal} text="+" type="small-btn"/>
            {taskData ? console.log(taskData)
            : null}
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
