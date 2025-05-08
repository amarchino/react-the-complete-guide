import { useState } from 'react';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectsSidebar from './components/ProjectsSidebar';

function App() {
  const [ projectsState, setProjectsState ] = useState({
    selectedProjectId: undefined,
    projects: []
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

  let content;
  if(projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={addProject} onCancel={handleCancelAddProject} />
  } else if(projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={ projectsState.projects } />
      { content }
    </main>
  );
}

export default App;
