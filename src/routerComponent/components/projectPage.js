import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchTasks, deleteTask } from "../../redux/actions/selectedProject"
import CreateNewTaskModal from "./createNewTask";

export const ProjectPage = (props) => {

  useEffect(() => {
    props.fetchTasks()
  }, [])

  return (
    <div>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <CreateNewTaskModal />
      {props.tasks.map(task => {
        return (
          <div key={task.id}>
            <p>{task.title}</p>
            <p>{task.description}</p>
            <button className="btn" onClick={() => {
              props.deleteTask(task.id)
            }}>delete task</button>
          </div>
        )
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  title:state.selectedProject.title,
  description:state.selectedProject.description,
  tasks:state.selectedProject.tasks
})

const mapDispatchToProps = {
  fetchTasks,
  deleteTask
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage)