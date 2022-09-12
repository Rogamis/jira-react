import axiosInstance from "../../axios";
export const SET_TITLE_PROJECT = "SELECTED_PROJECT::SET_TITLE_PROJECT";
export const SET_DESCRIPITON = "SELECTED_PROJECT::SET_DESCRIPTION";
export const SET_PROJECT_ID = "SELECTED_PROJECT::SET_PROJECT_ID";
export const SET_TASKS ="SELECTED::SET_TASKS"

export const setTitleProject = (title) => ({
  type: SET_TITLE_PROJECT,
  payload: title,
});

export const setDescription = (description) => ({
  type: SET_DESCRIPITON,
  payload: description,
});

export const setProjectId = (projectId) => ({
  type: SET_PROJECT_ID,
  payload: projectId,
});

export const setTasks = (tasks) => ({
    type: SET_TASKS,
    payload: tasks
})

export const fetchTasks = () => async (dispatch, getState) => {
  try {
    const projectId = getState().selectedProject.id;
    const answer = await axiosInstance.get(`projects/${projectId}/tasks`);
    dispatch(setTasks(answer.data.tasks))
    console.log(answer.data)
  } catch (e) {
    console.log("fetch Tasks", e.response.data);
  }
};

export const createTask = (title, description, onSuccess, onError) => async (dispatch, getState) => {
    try {
        const projectId = getState().selectedProject.id;
        const answer = await axiosInstance.post(`/projects/${projectId}/tasks`,{
            title: title,
            description: description,
            status_id:1,
            type_id:1
        });
        console.log("create task")
        onSuccess()
        dispatch(fetchTasks())
    } catch (e) {
        console.log("Created task", e)
        onError(`Some error occurred`);
    }
}

export const deleteTask = (id) => async (dispatch, getState) => {
  try {
    const projectId = getState().selectedProject.id;
    const answer = await axiosInstance.delete(`projects/${projectId}/tasks/${id}`);
    dispatch(fetchTasks());
  } catch (e) {
    console.log("delete task", e);
  }
};

export const editTask = (id, title, description, onSuccess, onError) => async (dispatch, getState) => {
    try {
        const projectId = getState().selectedProject.id;
        console.log("props.id", projectId);
        const data = await axiosInstance.put(`projects/${projectId}/tasks/${id}`, {
            title: title,
            description: description,
        })
        console.log('edit Task', data.data)
        onSuccess()
        dispatch(fetchTasks())
    } catch (e) {
        console.log('edit Task Error', e)
        onError()
    }
}