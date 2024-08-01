import { $containerTasks } from "../main.js";
import deleteTask from "./delete-task.js";
import completedTask from "./complete-task.js";
// import { editTask } from "./edit-task.js";

let taskContainer;

function createdTask(titleTask, descriptionTask) {
	taskContainer = document.createElement("article");
	taskContainer.classList.add("class", "task");

	/* <button id="btn__edit">Edit</button> */ //Boton de editar tarea
	taskContainer.innerHTML = `
		<h2 class="title__task">${titleTask}</h2>
			<textarea class="description__task " disabled >${descriptionTask}</textarea>
			<div class="container__option_buttons">			
				<button id="btn__delete">Delete</button>
				<button id="btn__completed">Completed</button>
			</div>
		`;

	let $titleElement = taskContainer.querySelector(".title__task");
	let $descriptionElement = taskContainer.querySelector(".description__task");
	const $btnDelte = taskContainer.querySelector("#btn__delete");
	const $btnCompleted = taskContainer.querySelector("#btn__completed");
	// const $btnEdit = taskContainer.querySelector("#btn__edit");

	deleteTask($btnDelte, taskContainer, $titleElement.textContent);
	completedTask($btnCompleted, $titleElement, $descriptionElement);

	/* 	editTask(
			$titleElement,
			$descriptionElement,
			$btnEdit,
			$btnSave,
			$btnUpdate,
			$btnCompleted
		);
	*/

	$containerTasks.appendChild(taskContainer);
	return $containerTasks;
}

export { taskContainer };
export default createdTask;
