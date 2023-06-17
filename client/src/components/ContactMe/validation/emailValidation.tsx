import { errorsType } from "./index";
import { LanguageType } from "../../../features/optionsSlice";

const emailValidation = ( value:string, errors: errorsType, language: LanguageType<string>): errorsType => {

    const { required, email } = language.messages.errors.email;

    if(!value) return {...errors, email: required};
    if(!value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) return {...errors, email: email};

    return {...errors, email: ""};
}

export default emailValidation;