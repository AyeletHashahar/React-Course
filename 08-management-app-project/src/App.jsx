import NewProject from "./components/NewProject";
import SideBar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  // undefined = do nothing, null = adding new project
  const [projectsState, setProjectsState] = useState({
    selectedProject: undefined,
    projects: [],
    tasks: []
  });

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ... prevState,
        selectedProject: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState(prevState => {
      return {
        ... prevState,
        selectedProject: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      };

      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject]
      };
    });
  }

  function handleSelectProject(id) {
    setProjectsState(prevState => {
      return {
        ... prevState,
        selectedProject: id,
      };
    });
  }

  function handleAddTask(text) {
    setProjectsState(prevState => {
      const newTask = {
        text: text,
        projectId: prevState.selectedProject,
        id: Math.random()
      };

      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectsState(prevState => {
      return {
        ... prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  function handleDeleteProject(id) {
    setProjectsState(prevState => {
      return {
        ... prevState,
        selectedProject: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProject),
      };
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProject);

  let content = <SelectedProject 
                  project={selectedProject} 
                  onDelete={handleDeleteProject} 
                  onAddTask={handleAddTask} 
                  onDeleteTask={handleDeleteTask}
                  tasks={projectsState.tasks}
                />;

  if (projectsState.selectedProject === null) {
    content = <NewProject addProject={handleAddProject} cancelProject={handleCancelAddProject}/>;
  } else if (projectsState.selectedProject === undefined) {
    content = <NoProjectSelected addProject={handleStartAddProject}/>;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar 
        projects={projectsState.projects} 
        addProject={handleStartAddProject} 
        selectProject={handleSelectProject} 
        selectedProjectID={projectsState.selectedProject}
      />
      {content}
    </ main>
  );
}

export default App;
