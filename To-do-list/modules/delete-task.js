import { deleteTaskFromLocalStorage } from "./local-storage.js";

function deleteTask(button, taskContainer, titleTask) {
	button.addEventListener("click", () => {
		taskContainer.remove();
		deleteTaskFromLocalStorage(titleTask);
		// deleteTaskFromLocalStorage(id);
	});
}
export default deleteTask;
