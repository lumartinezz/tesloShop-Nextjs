import { FC, useReducer } from 'react';
import { UiContext, uiReducer } from './';


export interface UiState {
    isMenuOpen: boolean;
    children?: React.ReactNode

}


const UI_INITIAL_STATE: UiState = {
    isMenuOpen: false,
}


export const UiProvider:React.FC = ({ children }) => {

    const [state, dispatch] = useReducer( uiReducer , UI_INITIAL_STATE );

    const toggleSideMenu = () => {
        dispatch({ type: '[UI] - ToggleMenu' });
    }


    return (
        <UiContext.Provider value={{
            ...state,

            // Methods
            toggleSideMenu,
        }}>
            { children }
        </UiContext.Provider>
    )
};