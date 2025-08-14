import { useState } from 'react';

import Sidebar from "./components/Sidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectView from './components/ProjectView.jsx';

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddProject() {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectID: -1,
      }
    })
  };

  function handleSaveProject(projectData) {
    setProjectsState((previousState) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      }

      return {
        ...previousState,
        selectedProjectID: undefined,
        projects: [...previousState.projects, newProject]
      }
    })
  };

  function handleCancelProject() {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectID: undefined,
      }
    })
  };

  function handleSelectProject(projectID) {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectID: projectID,
      }
    })
  };

  function handleDeleteProject() {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        selectedProjectID: undefined,
        projects: previousState.projects.filter((project) => project.id !== previousState.selectedProjectID),
      }
    })
  };

  function handleAddTask(taskText) {
    setProjectsState((previousState) => {
      const newTask = {
        text: taskText,
        projectID: previousState.selectedProjectID,
        id: Math.random(),
      }

      return {
        ...previousState,
        tasks: [newTask, ...previousState.tasks]
      }
    })
  };

  function handleDeleteTask(taskID) {
    setProjectsState((previousState) => {
      return {
        ...previousState,
        tasks: previousState.tasks.filter((task) => task.id !== taskID),
      }
    })
  };

  console.log('ProjectsState:', projectsState)

  let content = <NoProjectSelected onAddProject={handleAddProject}></NoProjectSelected>
  if (projectsState.selectedProjectID === -1) {
    content = <NewProject handleSaveProject={handleSaveProject} handleCancelProject={handleCancelProject}></NewProject>
  } else if (projectsState.selectedProjectID >= 0) {
    const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectID);
    content = (
      // Warning: in here Tasks are an example of Prop drilling and in the future we will manage it better.
      // Instead of passing the state through all the layers, we will manage it in other way.
      <ProjectView 
        project={selectedProject} 
        onDeleteProject={handleDeleteProject} 
        tasks={projectsState.tasks.filter((task) => task.projectID === projectsState.selectedProjectID)}
        onAddTask={handleAddTask} 
        onDeleteTask={handleDeleteTask}
      />)
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={handleAddProject} projects={projectsState.projects} onSelectProject={handleSelectProject} selectedProjectID={projectsState.selectedProjectID}/>
      {content}
    </main>
  );
}

export default App;
