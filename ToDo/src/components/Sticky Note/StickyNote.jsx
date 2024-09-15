import style from "./StickyNote.module.scss";

export const StickyNote = ({children}) => {
    return (
        <>
            <div className={style.noteStyling}>{children}</div>
        </>
    )
}