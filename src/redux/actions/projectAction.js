import axiosInstance from "../../axios";
export const SET_PROJECTS = "PROJECT:SET_PROJECTS"

export const setProjects = (projects) => ({
    type: SET_PROJECTS,
    payload: projects
})


export const fetchProject = () => async (dispatch, getState) => {
    try {
        const answer = await axiosInstance.get("/projects");
        dispatch(setProjects(answer.data))
        console.log("Project thunk", answer.data)
    }   catch (e) {
        console.log("fetchProject", e);
    }
}

export const createNewProject = (title, description, onSuccess, onError) => async (dispatch, getState) => {
    try {
        const answer = await axiosInstance.post("/projects", {
            title: title,
            description: description,
        });
        console.log(answer.data)
        onSuccess()
        dispatch(fetchProject())
    } catch (e) {
        console.log("createNewProject", e);
        onError(`Project with title ${title} already exists `)
    }
}

export const deleteProject = (id) => async (dispatch, getState) => {
    try {
        const answer = await axiosInstance.delete(`/projects/${id}`)
        dispatch(fetchProject())
    } catch (e) {
        console.log("deleteProject", e);
    }
}