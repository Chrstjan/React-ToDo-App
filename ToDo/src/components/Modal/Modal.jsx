import { Button } from "../Button/Button";
import style from "./Modal.module.scss";

export const Modal = ({isOpen}) => {

    const handleModal = () => {
        isOpen(prev => !prev);
    }

    return (
        <>
            <div onClick={handleModal} className={style.overlayStyling}></div>
            <div className={style.modalStyling}>
                <h2>Create new task</h2>
                <Button action={handleModal} text="X" type="close-btn"/>
                <label htmlFor="taskName">Task Name:</label>
                <input type="text" placeholder="Get new Tattoo" name="taskName"/>
                <Button text="Create Task" type="big-btn"/>
            </div>
        </>
    )
}