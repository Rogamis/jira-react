import { Box, CardContent, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap';
import { connect } from 'react-redux'
import { fetchTasks, deleteTask } from "../../redux/actions/selectedProject"
import CreateNewTaskModal from "./createNewTask";
import EditTask from './ModalEditTask';
import AppBarTasks from './navBar';

const ProjectPage = (props) => {

  useEffect(() => {
    props.fetchTasks()
  }, [])

  return (
    <div>
      <AppBarTasks />
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="10vh" flexDirection='column'>
        <Typography gutterBottom variant="h4">Project: {props.title}</Typography>
        <Typography gutterBottom variant="body1" >Description: {props.description}</Typography>
      <CreateNewTaskModal />
      </Box>
      {props.tasks.map(task => {
        return (
          <Box display="flex" justifyContent="center" alignItems="start" minHeight="20vh" flexDirection='column'>
            <Card key={task.id} variant="outlined" sx={{ minWidth: 275 }}>
              <CardContent>
                    <Typography gutterBottom variant="h4">{task.title}</Typography>
                    <Typography gutterBottom variant="body1">{task.description}</Typography>
                    <Typography gutterBottom variant="body1">Status: {task.status.title}</Typography>
                    <Typography gutterBottom variant="body1">Type: {task.type.title}</Typography>
                    <Button variant="outlined"
                      onClick={() => {
                        props.deleteTask(task.id);
                      }}> delete task
                    </Button>
                    <EditTask id={task.id}/>
              </CardContent>
            </Card>
          </Box>
        );
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