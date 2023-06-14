import { FC } from "react";
import style from "./ContactMe.module.css";
import { useSelector } from "react-redux";
import { selectLanguageJson } from "../../features/optionsSlice";

const ContactMe: FC = () => {

    const language = useSelector(selectLanguageJson);
    const { title, subtitle, description, form } = language.contactMe;
    return (
        <section className={style.MainContainer}>

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

                    <div className={style.InputContainer}>
                        <label htmlFor="nameInput">{form.name}</label>
                        <input type="text" name="nameInput" placeholder={form.namePlaceHolder}/>
                    </div>

                    <div className={style.InputContainer}>
                        <label htmlFor="nameInput">{form.email}</label>
                        <input type="text" name="emailInput" placeholder={form.emailPlaceHolder}/>
                    </div>

                    <div className={style.InputContainer}>
                        <label htmlFor= "messageInput">{form.message}</label>
                        <textarea name= "messageInput" placeholder={form.messagePlaceHolder}></textarea>
                    </div>

                    <button>{form.button}</button>
                </form>

            </div>
        </section>
    )
}

export default ContactMe;