import { errorsType } from "./index";
import { LanguageType } from "../../../features/optionsSlice";


const nameValidation = (value:string, errors: errorsType, language: LanguageType<string>): errorsType => {

    const { required, minLength, maxLength, letters} = language.messages.errors.name;

    if (!value) return {...errors, name: required};
    if (value.length < 3) return {...errors, name: minLength};
    if (value.length > 25) return {...errors, name: maxLength};
    if (!value.match(/^[a-zA-Z\s]+$/)) return {...errors, name: letters};

    return {...errors, name: ""};
}

export default nameValidation;