import { errorsType } from "./index";
import { LanguageType } from "../../../features/optionsSlice";

const messageValidation = (value:string, errors: errorsType, language: LanguageType<string>):errorsType => {

    const {required, minLength, maxLength} = language.messages.errors.message;

    if(!value) return {...errors, message: required};
    if(value.length < 10) return {...errors, message: minLength};
    if(value.length > 100) return {...errors, message: maxLength};

    return {...errors, message: ""};
}

export default messageValidation;