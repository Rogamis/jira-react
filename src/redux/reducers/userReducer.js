import { SET_USERNAME, SET_USER_ID, SET_USER_ROLE, SET_AVATAR, SET_EMAIL } from "../actions/userAction"

const initialState = {
    username: "",
    userid: "",
    userrole: "",
    email: "",
    avatar: null
}

const userReducer = (state= initialState, action) => {
    switch (action.type){

        case SET_USERNAME:
            return {
                ...state,
                username: action.payload,
            };
        case SET_USER_ID: 
            return {
                ...state,
                userid: action.payload
            };
        case SET_USER_ROLE: 
            return {
                ...state,
                userrole: action.payload
            };
        case SET_AVATAR: 
            return {
                ...state,
                avatar: action.payload
            }
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload
            }
        default:
            return state;
    }
}

export default userReducer