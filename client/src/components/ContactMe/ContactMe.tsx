import { FC } from "react";
import style from "./ContactMe.module.css";
import { useSelector } from "react-redux";
import { selectLanguageJson } from "../../features/optionsSlice";
import emailjs from "@emailjs/browser"
import { useState } from "react";
import { useRef } from "react";


const ContactMe: FC = () => {

    const EMAIL_JS_API = process.env.REACT_APP_EMAIL_JS_API || "";
    const EMAIL_JS_TEMPLATE = process.env.REACT_APP_EMAIL_JS_TEMPLATE || "";
    const EMAIL_JS_KEY = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY || "";

    const formEmail = useRef<HTMLFormElement>(null);

    const language = useSelector(selectLanguageJson);
    const { title, subtitle, description, form } = language.contactMe;

    
    const [ nameInput, setNameInput ] = useState("");
    const [ emailInput, setEmailInput ] = useState("");
    const [ messageInput, setMessageInput ] = useState("");
    const [ successfullyResponse, setSuccessfullyResponse ] = useState("");
    const [ rejectedResponse, setRejectedResponse ] = useState("");

    const sendEmail = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        
        if (!EMAIL_JS_API || !EMAIL_JS_TEMPLATE || !EMAIL_JS_KEY) {
            console.log('An unexpected error just occurred');
            return;
        }
    
        if (!formEmail.current) {
            console.log('Form reference is not available');
            return;
        }
    
        emailjs.sendForm(EMAIL_JS_API, EMAIL_JS_TEMPLATE, formEmail.current, EMAIL_JS_KEY)
        .then((response) => setSuccessfullyResponse(language.messages.successfullyResponse))
        .catch((error) => setRejectedResponse(language.messages.rejectedResponse));

        
    } 

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const name = event.target.name;
        const value = event.target.value;

        switch (name) {
            case "nameInput":
                setNameInput(value);
                break;

            case "emailInput":
                setEmailInput(value);
                break;

            case "messageInput":
                setMessageInput(value)
                break;
                
            default: 
                return;
        }
    }
    const clearInput = () => {
        setNameInput("");
        setEmailInput("");
        setMessageInput("");
    };

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
                <form className={style.FormContainer} ref={formEmail}>

                    <div className={style.InputContainer}>
                        <label htmlFor="nameInput">{form.name}</label>
                        <input type="text" name="nameInput" placeholder={form.namePlaceHolder} value={nameInput} onChange={handleOnChange}/>
                    </div>

                    <div className={style.InputContainer}>
                        <label htmlFor="nameInput">{form.email}</label>
                        <input type="text" name="emailInput" placeholder={form.emailPlaceHolder} value={emailInput} onChange={handleOnChange}/>
                    </div>

                    <div className={style.InputContainer}>
                        <label htmlFor= "messageInput">{form.message}</label>
                        <textarea name= "messageInput" placeholder={form.messagePlaceHolder} value={messageInput} onChange={handleOnChange}></textarea>
                    </div>

                    <button onClick={sendEmail}>{form.button}</button>


                </form>
                        {       
                        rejectedResponse &&
                            <div className={style.ModalContainer}>
                                <div className={style.Modal}>
                                    <p>{language.messages.rejectedResponse}</p>
                                </div>
                                <button onClick={() => {
                                    setRejectedResponse("");
                                }}>{language.messages.button}</button>
                            </div>
                        }
                        {
                        successfullyResponse &&
                            <div className={style.ModalContainer}>
                                <div className={style.Modal}>
                                    <p>{language.messages.successfullyResponse}</p>
                                </div>
                                <button onClick={()=> {
                                    setSuccessfullyResponse("");
                                    clearInput();
                                }}>{language.messages.button}</button>
                            </div>
                        }

            </div>
        </div>
    )
}

export default ContactMe;