import { SET_PROJECTS } from '../actions/projectAction'

const initialState = {
    projects: []
}

const projectsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            };
        default:
            return state;
    }
}

export default projectsReducer