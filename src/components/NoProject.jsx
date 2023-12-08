const NoProject = ({onCreateNewProject}) => {
	return (
		<div className="flex flex-col items-center justify-center h-screen bg-gray-100">
		<img srcSet={'logo.png'} alt="Logo" className="mb-4 w-20 h-20" />
			<h2 className="text-lg font-bold mb-2">No Project Selected.</h2>
			<p className="text-gray-700 mb-4">Select a project or get started with a new one</p>
			<button className="bg-yellow-900 text-white rounded py-2 px-4 hover:bg-brown-600" onClick={onCreateNewProject}>
				Create New Project
			</button>
		</div>
	);
}

export default NoProject;