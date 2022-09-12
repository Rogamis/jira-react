import React, { useEffect } from 'react'
import {fetchUserInfo} from "../redux/actions/userAction"
import { logOut } from '../redux/actions/loginAction';
import { connect } from "react-redux";
import { fetchProject, setProjects, deleteProject } from '../redux/actions/projectAction';
import CreateNewProjectModal from './components/createNewProjectModal';
import { useNavigate } from 'react-router';
import { setTitleProject, setDescription, setProjectId } from "../redux/actions/selectedProject"
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function UserPage(props) {
   console.log("props 123123", props);

  useEffect(() => {
    props.fetchUserInfo()
    props.fetchProject();
  }, [])

    const navigate = useNavigate();
    const navigateToProject = (project) => {
      console.log(project)
      props.setTitleProject(project.title);
      props.setDescription(project.description);
      props.setProjectId(project.id)
      navigate(`/project`)
    }
  
  return (
    <body>
      <div className="wrapper">
        <div className="left">
          <img className="img" alt="user" width="100" src={"https://picsum.photos/500/500"}></img>
          <h4>Welcome {props.username}</h4>
          <p>Role: {props.userrole}</p>
          <button className="btn" onClick={props.logOut}>logOut </button>
      </div>
        <div class="right">
          <div class="info">
            <h3>Information</h3>
            <div class="info_data">
              <div class="data">
                <h4>Email</h4>
                <p>{props.email}</p>
                <h4>ID: {props.userid}</h4>
              </div>
            </div>
          </div>
          <div class="projects">
            <h3>Projects you have created</h3>
            <div class="projects_data">
              <div class="data">
                <CreateNewProjectModal />
                <div>
              </div>
              {props.projects.map(project => {
                return (
                  <div key={project.id}>
                    <button className="btn" onClick={() => {
                      navigateToProject(project)
                    }}>
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                    </button>
                    <button
                      className="btn"
                      onClick={() => {
                        props.deleteProject(project.id);
                      }}
                    >
                      Deleted project
                    </button>
                  </div>
                );
              })}
              </div>
            </div>
          </div>
          <div class="projects">
            <h3>Invited projects </h3>
            <div class="projects_data">
              <div class="data">
                <h4>My project</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <h4>Recent</h4>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
              <div class="data">
                <h4>My project</h4>
                <p>dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div class="social_media"></div>
        </div>
      </div>
    </body>
  );
}

const mapStateToProps = (state) => {
  return {
    username: state.user.username,
    userid: state.user.userid,
    userrole: state.user.userrole,
    email: state.user.email,
    avatar: state.user.avatar,

    projects: state.projects.projects,
  }
}

const mapDispatchToProps = {
  fetchUserInfo,
  fetchProject,
  setProjects,
  deleteProject,
  setDescription,
  setProjectId,
  setTitleProject,
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)