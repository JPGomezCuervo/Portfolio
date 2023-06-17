import nameValidation from "./nameValidation";
import emailValidation from "./emailValidation";
import messageValidation from "./messageValidation";
import { LanguageType } from "../../../features/optionsSlice";

export interface errorsType {
    name: string;
    email: string;
    message: string;
}

const validation = (name: string, value: string, errors: errorsType, language: LanguageType<string>): errorsType => {

    switch(name) {

        case "nameInput":
            return nameValidation(value, errors, language);

        case "emailInput":
            return emailValidation(value, errors, language);
        
        case "messageInput":
            return messageValidation(value, errors, language);
            
        default:
            return errors;
    }
}

export default validation;