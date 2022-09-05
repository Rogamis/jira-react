import {SET_DESCRIPITON, SET_TITLE_PROJECT, SET_PROJECTS, SET_PROJECT_ID} from '../actions/projectAction'

const initialState = {
    title: "",
    discription: "",
    id: "",
    projects: []
}

const projectsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            };
        case SET_TITLE_PROJECT:
            return {
                ...state,
                title: action.payload 
            };
        case SET_DESCRIPITON:
            return {
                ...state,
                description: action.payload
            };
        case SET_PROJECT_ID:
            return{
                ...state,
                id: action.payload
            }
        default:
            return state;
    }
}

export default projectsReducer