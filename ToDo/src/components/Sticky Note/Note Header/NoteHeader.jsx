import style from "./NoteHeader.module.scss";

export const NoteHeader = ({text}) => {
    return (
        <header className={style.headerStyling}>
            <h2>{text}</h2>
        </header>
    )
}