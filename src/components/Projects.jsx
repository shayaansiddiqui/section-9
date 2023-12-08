import {useState} from "react";

const Projects = ({onNewProject, projectList, onSelectedItem}) => {

	console.log('inside project')
	const [projects, setProjects] = useState(projectList);
	console.log(projects);
	console.log(projectList);
	return (
		<div className={"bg-blue-500 w-2/5 h-full p-5 text-white"}>
			<h1 className={"text-xl font-bold"}>Your Projects</h1>
			<button className="bg-gray-500 text-white rounded py-2 px-4 mt-4 hover:bg-gray-600" onClick={onNewProject}>+ Add Project</button>
			<ul>
			{projectList.map((item, index) => (
				<li key={index} className={'cursor-pointer'} onClick={() => onSelectedItem(item, index)}>{item.projectTitle}</li>
			))}
			</ul>
		</div>
	);
}

export default Projects;