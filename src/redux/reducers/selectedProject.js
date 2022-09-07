import { SET_TITLE_PROJECT, SET_DESCRIPITON, SET_PROJECT_ID, SET_TASKS } from "../actions/selectedProject"
  
const initialState = {
    title: "",
    discription: "",
    id: "",
    tasks: [],
}
const selectedProjectReducer = (state = initialState, action) => {
  switch (action.type) {
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
            return {
                ...state,
                id: action.payload
            };
        case SET_TASKS:
            return {
                ...state,
                tasks: action.payload
            }
        default:
            return state;
        }
    }

export default selectedProjectReducer