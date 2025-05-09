import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';
import SelectedProject from './components/SelectedProject';

function App() {
  const [ projectsState, setProjectsState ] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });
  function handleStartAddProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: null
    }));
  }
  function addProject(projectData) {
    const projectId = Math.random();
    const newProject = {
      ...projectData,
      id: projectId
    }
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: [ ...prevState.projects, newProject ]
    }))
  }
  function handleCancelAddProject() {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined
    }));
  }
  function handleSelectProject(id) {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: id
    }))
  }
  function handleDeleteProject(id) {
    setProjectsState(prevState => ({
      ...prevState,
      selectedProjectId: undefined,
      projects: prevState.projects.filter(p => p.id !== prevState.selectedProjectId)
    }))
  }
  function handleAddTask(taskText) {
    setProjectsState(prevState => {
      const taskId = Math.random();
      const newTask = {
        text: taskText,
        projectId: prevState.selectedProjectId,
        id: taskId
      };
      return {
        ...prevState,
        tasks: [ newTask, ...prevState.tasks ]
      };
    })
  }
  function handleDeleteTask(id) {
    setProjectsState(prevState => ({
      ...prevState,
      tasks: prevState.tasks.filter(t => t.id !== id)
    }))
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);
  let content = <SelectedProject project={selectedProject} onDelete={ handleDeleteProject } onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} selectedProject={projectsState.selectedProjectId} tasks={projectsState.tasks.filter(t => t.projectId === projectsState.selectedProjectId)} />;
  if(projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={addProject} onCancel={handleCancelAddProject} />
  } else if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={ projectsState.projects } onSelectProject={handleSelectProject} selectedProjectId={projectsState.selectedProjectId} />
      { content }
    </main>
  );
}

export default App;
