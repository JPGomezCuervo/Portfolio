import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface optionState {
    language: string;
    darkMode: boolean;
}

const initialState: optionState = {
    language: "english",
    darkMode: false,
}

const optionsReducer = createSlice ({
    name: 'options',
    initialState,
    reducers: {

        setLanguage: ({language}) => {
            language = language === "english" ? "spanish" : "english";
        },

        setDarkMode: ({darkMode}) => {
            darkMode = darkMode === true ? false : true;
        }
    }
});

export default optionsReducer.reducer;
export const { setLanguage, setDarkMode } = optionsReducer.actions;
export const selectLanguage = (state: RootState) => state.options.language;
export const selectDarkMode = (state: RootState) => state.options.darkMode;