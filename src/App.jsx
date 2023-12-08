import Projects from "./components/Projects.jsx";
import ProjectForm from "./components/ProjectForm.jsx";
import NoProject from "./components/NoProject.jsx";
import {useState} from "react";
import ProjectSidebar from "./components/ProjectSidebar.jsx";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
	const [projectState, setProjectState] = useState({
		selectedProjectId: undefined,
		projects: [],
		tasks: []
	});

	const handleStartAddProject = () => {
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: null,
			}
		})
	}

	const handleAddProject = (projectData) => {
		const newProject = {
			...projectData,
			id: Math.random()
		}
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: [...prevState.projects, newProject]
			}
		})
	}

	const handleCancelAddProject = () => {
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: undefined,
			}
		});
	}

	const handleSelectProject = (id) => {
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: id,
			}
		});
	}

	const handleDeleteProject = () => {
		setProjectState(prevState => {
			return {
				...prevState,
				selectedProjectId: undefined,
				projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
			}
		});
	}

	const handleAddTask = (text) => {
		setProjectState((prevState) => {
			const taskId = Math.random();
			const newTask = {
				text: text,
				projectId: prevState.selectedProjectId,
				id: taskId
			}
			return {
				...prevState,
				tasks: [newTask, ...prevState.tasks]
			}
		})
	}

	const handleDeleteTask = (id) => {
		setProjectState(prevState => {
			return {
				...prevState,
				tasks: prevState.tasks.filter((task) => task.id !== id)
			}
		});
	}

	const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId);

	let content = (
		<SelectedProject
			onDeleteTask={handleDeleteTask}
			onAddTask={handleAddTask}
			onDelete={handleDeleteProject}
			tasks={projectState.tasks}
			project={selectedProject}/>);

	if(projectState.selectedProjectId === null) {
		content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject}/>
	} else if(projectState.selectedProjectId === undefined) {
		content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
	}
	// const [newProject, setNewProject] = useState(false);
	// const [projectList, setProjectList] = useState([]);
	// const [projectItem, setProjectItem] = useState(null);
	// const addNewProjectHandler = () => {
	// 	setNewProject(true);
	// }
	//
	// const onCancelProjectHandler = () => {
	// 	setNewProject(false);
	// }
	//
	// const onAddNewProjectHandler = (data) => {
	// 	//projectList.push(data);
	// 	setProjectList([...projectList, data]);
	// }
	//
	// const onItemSelect = (item, index) => {
	// 	setNewProject(true);
	// 	let i = projectList[index];
	// 	setProjectItem(i);
	// 	console.log('Project Item');
	// 	console.log(projectItem);
	// }

	return (
		// <div className={'flex h-screen bg-gray-100'}>
		// 	<Projects onNewProject={addNewProjectHandler} projectList={projectList} onSelectedItem={onItemSelect}/>
		// 	{newProject && <ProjectForm
		// 		newProject={newProject}
		// 		prefillItem={projectItem}
		// 		createNewProject={onAddNewProjectHandler}
		// 		onCancelProject={onCancelProjectHandler}
		// 	/>}
		// 	{!newProject && <NoProject onCreateNewProject={addNewProjectHandler}/>}
		// </div>
		<main className={'h-screen my-8 flex gap-8'}>
			<ProjectSidebar
				onSelectProject={handleSelectProject}
				onStartAddProject={handleStartAddProject}
				selectedProjectId={projectState.selectedProjectId}
				projects={projectState.projects}/>
			{content}
		</main>
	);
}

export default App;
