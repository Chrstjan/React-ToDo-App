import style from "./Button.module.scss"

export const Button = ({action, text, type}) => {
    return (
        <button className={`${style.buttonStyling} ${style[type]}`} onClick={() => action()}>{text}</button>
    )
}