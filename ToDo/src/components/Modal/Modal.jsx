import { useState } from "react";
import { Button } from "../Button/Button";
import style from "./Modal.module.scss";

export const Modal = ({isOpen, dispatch}) => {

    const [taskName, setTaskName] = useState("");

    const handleModal = () => {
        isOpen(prev => !prev);
    }

    const handleCreateTask = () => {
        dispatch({type: "CREATE", taskName: taskName});
        handleModal();
    }

    return (
        <>
            <div onClick={handleModal} className={style.overlayStyling}></div>
            <div className={style.modalStyling}>
                <h2>Create new task</h2>
                <Button action={handleModal} text="X" type="close-btn"/>
                <label htmlFor="taskName">Task Name:</label>
                <input onChange={(e) => setTaskName(e.target.value)} type="text" placeholder="Get new Tattoo" name="taskName"/>
                <Button action={handleCreateTask} text="Create Task" type="big-btn"/>
            </div>
        </>
    )
}