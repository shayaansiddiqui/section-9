import {useRef, useState} from "react";

const ProjectForm = ({newProject, onCancelProject, createNewProject, prefillItem}) => {
	const projectTitle = useRef();
	const projectDescription = useRef();
	const projectDate = useRef();
	const [item, setItem] = useState(prefillItem);

	console.log('project form');
	console.log(item);
	console.log('prefilled');
	console.log(prefillItem);
	debugger;
	if(prefillItem != null)
	{
		projectTitle.current.value = prefillItem.projectTitle;
		projectDescription.current.value = prefillItem.projectDescription;
		projectDate.current.value = prefillItem.projectDate;
	}
	const onNewProject = (e) => {
		e.preventDefault();
		// console.log('Project Title: ' + projectTitle.current.value);
		// console.log('Project Description: ' + projectDescription.current.value);
		// console.log('Project Date: ' + projectDate.current.value);
		if(projectTitle.current.value.length === 0) {
			return;
		}
		if(projectDescription.current.value.length === 0) {
			return;
		}
		if(projectDate.current.value.length === 0) {
			return;
		}
		let object = {
			projectTitle: projectTitle.current.value,
			projectDescription: projectDescription.current.value,
			projectDate: projectDate.current.value
		};
		createNewProject(object);
		projectTitle.current.value = '';
		projectDescription.current.value = '';
		projectDate.current.value = undefined;
	}
	return (
		<div className={"flex-1 p-10"}>
			<form action="#" method="POST">
				<div className={"mb-6"}>
					<label htmlFor={"title"} className={"block text-gray-700 text-sm font-bold mb-2"}>Title:</label>
					<input ref={projectTitle} type="text" id="title" name="title" className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"} required />
				</div>
				<div className={"mb-6"}>
					<label htmlFor={'description'} className={"block text-gray-700 text-sm font-bold mb-2"}>Description:</label>
					<textarea ref={projectDescription} id="description" name="description" className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"} required></textarea>
				</div>
				<div className={"mb-6"}>
					<label htmlFor={"due-date"} className={"block text-gray-700 text-sm font-bold mb-2"}>Due Date:</label>
					<input ref={projectDate} type="date" id="due-date" name="due-date" className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"} required />
				</div>
				<div className={"flex justify-end"}>
					<button type="button" className={"text-blue-500 hover:text-blue-700 mr-4"} onClick={onCancelProject}>Cancel</button>
					<button type="submit" className={"bg-black text-white rounded py-2 px-4 hover:bg-gray-700"} onClick={onNewProject}>Save</button>
				</div>
			</form>
		</div>
	);
}

export default ProjectForm;