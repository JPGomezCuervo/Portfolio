import { FC } from "react";
import style from "./ContactMe.module.css";
import { useSelector } from "react-redux";
import { selectLanguageJson } from "../../features/optionsSlice";

const ContactMe: FC = () => {

    const language = useSelector(selectLanguageJson);
    const { title, subtitle, description, form } = language.contactMe;
    return (
        <div className={style.MainContainer}>

            <div className={style.LeftContainer}>

                <h2>
                    {title}
                </h2>

                <h3>
                    { subtitle }
                </h3>

                <h4>
                    {description}
                </h4>
            </div>

            <div className={style.RightContainer}>
                <form className={style.FormContainer}>
                    <label htmlFor="nameInput">{form.name}</label>
                    <input type="text" name="nameInput" placeholder={form.namePlaceHolder}/>

                    <label htmlFor="nameInput">{form.email}</label>
                    <input type="text" name="emailInput" placeholder={form.emailPlaceHolder}/>

                    <label htmlFor="nameInput">{form.message}</label>
                    <input type="text" name="messageInput" placeholder={form.messagePlaceHolder}/>

                    <button>{form.button}</button>
                </form>

            </div>
        </div>
    )
}

export default ContactMe;