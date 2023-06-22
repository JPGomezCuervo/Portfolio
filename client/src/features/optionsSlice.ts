import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import englishLang from "../utils/en.json";
import spanishLang from "../utils/es.json";

interface optionState {
    language: string;
    languageJson: LanguageType <string>;
    darkMode: boolean;
} 

interface DetailsType <T> {  
    date: T;
    name: T;
    description: T;
    tecnologies: {
      title: T;
      frontEnd: T[];
      backEnd: T[];
    },
    deploy: T;
    sourceCode: T;
}


export interface LanguageType <T> {
    navBar: {
      projects: T;
      contactMe: T;
      whoIAm: T;
    };
    summary: {
      title: T;
      description: T;
    };
    whoIAm: {
      firstView: {
        title: T;
        description: T;
      };
      secondView: {
        title: T;
      };
      thirdView: {
        title: T;
        description: T;
      };
    };
    projects: {
      firstView: {
        title: T;
      };
      muscleLab: {
        title: T;
        description: T;
      };
    };
    contactMe: {
      title: T;
      subtitle: T;
      description: T;
      form: {
        name: T;
        namePlaceHolder: T;
        email: T;
        emailPlaceHolder: T;
        message: T;
        messagePlaceHolder: T;
        button: T
      }
    },
    footer: {
      navigation: T;
      projects: T;
      contactMe: T;
      whoIAm: T;
      socialMedia: T;
    },
    messages: {
      successfullyResponse: T;
      rejectedResponse: T;
      button: T;
      errors: {
        name: {
          required: T;
          minLength: T;
          maxLength: T;
          letters: T;
        },
        email: {
          required: T;
          email: T;
        },
        message: {
          required: T;
          minLength: T;
          maxLength: T;
        }
      }
    },
    details: {
      goBack: string;
      viewProject: string;
      viewSourceCode: string;
      portfolio: DetailsType <T>;
      musclelab: DetailsType <T>;
      doggofinder: DetailsType <T>;
    }

}

  


const initialState: optionState = {
    language: "english",
    languageJson: englishLang,
    darkMode: false,
}

const optionsReducer = createSlice ({
    name: 'options',
    initialState,
    reducers: {

        setLanguage: (state) => {

            const newLanguage = state.language === "english" ? "spanish" : "english";
            const newLanguageJson = newLanguage === "english" ? englishLang : spanishLang;
            state.language = newLanguage;
            state.languageJson= newLanguageJson;
        },

        setDarkMode: ({darkMode}) => {
            darkMode = darkMode === true ? false : true;
        }
    }
});

export default optionsReducer.reducer;
export const { setLanguage, setDarkMode } = optionsReducer.actions;
export const selectLanguage = (state: RootState) => state.options.language;
export const selectLanguageJson = (state: RootState) => state.options.languageJson;
export const selectDarkMode = (state: RootState) => state.options.darkMode;
