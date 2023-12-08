import Input from './Input.jsx'
import {useRef} from "react";
import Modal from "./Modal.jsx";

const NewProject = ({onAdd, onCancel}) => {
	const titleRef = useRef();
	const descriptionRef = useRef();
	const dueDateRef = useRef();
	const modalRef = useRef();

	const handleSave = () => {
		const enteredTitle = titleRef.current.value;
		const description = descriptionRef.current.value;
		const dueDate = dueDateRef.current.value;

		// validation
		if ((enteredTitle.trim() === '') || (description.trim() === '') || (dueDate.trim() === '')) {
			modalRef.current.open();
			return;
		}

		onAdd({
			title: enteredTitle,
			description: description,
			dueDate: dueDate
		});

	}


	return (
		<>
			<Modal ref={modalRef} buttonCaption={'Close'}>
				<h2 className={'text-xl font-bold text-stone-500 my-4'}>Invalid Input</h2>
				<p className={'text-stone-600 mb-4'}>Oops... you forgot to enter a value</p>
				<p className={'text-stone-600 mb-4'}>Please make sure you provided a valid value for every input field</p>
			</Modal>
			<div className={'w-[35rem] mt-16'}>
				<menu className={'flex items-center justify-end gap-4 my-4'}>
					<li>
						<button
							onClick={onCancel}
							className={'text-stone-800 hover:text-stone-950'}>
							Cancel
						</button>
					</li>
					<li>
						<button
							className={'px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'}
							onClick={handleSave}>
							Save
						</button>
					</li>
				</menu>
				<div>
					<Input type={'text'} title={'Title'} ref={titleRef}/>
					<Input title={'Description'} textarea ref={descriptionRef}/>
					<Input type={'date'} title={'Due Date'} ref={dueDateRef}/>
				</div>
			</div>
		</>
	);
}

export default NewProject;