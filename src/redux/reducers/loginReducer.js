import { SET_EMAIL_LOGIN, SET_PASSWORD_LOGIN, SET_TOKEN } from "../actions/loginAction"

const initialState = {
    email: "",
    password: "",
    token: null,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_EMAIL_LOGIN:
            return {
                ...state,
                email: action.payload
            };

        case SET_PASSWORD_LOGIN: 
            return {
                ...state,
                password: action.payload
            };

        case SET_TOKEN: 
            return {
                ...state,
                token: action.payload
            };
        
        default: 
            return state;
    }
}

export default loginReducer;