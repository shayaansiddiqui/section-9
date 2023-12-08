import {useState} from "react";

const NewTask = ({onAdd}) => {
	const [enteredTask, setEnteredTask] = useState('');
	const handleChange = (event) => {
		debugger;
		if(event.target.value.length > 0) {
			setEnteredTask(event.target.value);
		}
	}

	const handleClick = () => {
		if(enteredTask.length > 0) {
			onAdd(enteredTask);
			setEnteredTask('');
		}
	}

	return (
		<div className={'flex items-center gap-4'}>
			<input value={enteredTask} onChange={handleChange} type={'text'} className={'w-64 px-2 py-1 rounded-sm bg-stone-200'}/>
			<button onClick={handleClick} className={'text-stone-700 hover:text-stone-950'}>Add Task</button>
		</div>
	)
}

export default NewTask;