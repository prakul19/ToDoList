import { menu } from "./modules/menu.js";
import createdTask from "./modules/created-task.js";
import {
	addTaskToLocalStorage,
	loadTasksFromLocalStorage,
} from "./modules/local-storage.js";

const $menu = document.querySelector(".menu");
const $btnBarsMenu = document.querySelector(".btn__bars-menu");
const $form = document.getElementById("form__task");
const $containerTasks = document.querySelector(".container__tasks");
let $titleTaskInput = document.getElementById("title__input");
let $descriptionTaskInput = document.getElementById("description__input");

export { $containerTasks, $titleTaskInput, $descriptionTaskInput };

menu($btnBarsMenu, $menu);

function addTask() {
	const titleTask = $titleTaskInput.value;
	const descriptionTask = $descriptionTaskInput.value;

	let task = {
		titleTask,
		descriptionTask,
	};

	if (titleTask === "" || descriptionTask === "") {
		return;
	}

	createdTask(titleTask, descriptionTask);
	addTaskToLocalStorage(task);

	$titleTaskInput.value = "";
	$descriptionTaskInput.value = "";
}

$form.addEventListener("submit", (e) => {
	e.preventDefault();
	addTask();
});

loadTasksFromLocalStorage();
