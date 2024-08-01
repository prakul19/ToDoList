import createdTask from "./created-task.js";

function getTasksFromLocalStorage() {
	try {
		return JSON.parse(localStorage.getItem("tasks")) || [];
	} catch (error) {
		console.error("Error parsing tasks from localStorage:", error);
		return [];
	}
}
function setTasksToLocalStorage(tasks) {
	localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function addTaskToLocalStorage(task) {
	const tasks = getTasksFromLocalStorage();
	tasks.push(task);
	setTasksToLocalStorage(tasks);
}

export function deleteTaskFromLocalStorage(titleTask) {
	if (typeof titleTask !== "string") {
		console.error("Invalid titleTask:", titleTask);
		return;
	}

	let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
	tasks = tasks.filter((task) => {
		if (task && task.titleTask === undefined) {
			// console.log("Removing task with undefined titleTask");
			return false;
		}
		if (task && task.titleTask) {
			return task.titleTask.trim() !== titleTask.trim();
		}
		return true;
	});
	console.log("Tasks after deletion:", tasks);
	localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function loadTasksFromLocalStorage() {
	const tasks = getTasksFromLocalStorage();
	tasks.forEach((task) => {
		console.log(task);
		createdTask(task.titleTask, task.descriptionTask);
	});
}
