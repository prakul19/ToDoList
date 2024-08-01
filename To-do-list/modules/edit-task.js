import { $titleTaskInput, $descriptionTaskInput } from "../main.js";
// import { updateTaskInLocalStorage } from "./local-storage.js";
// import { taskContainer } from "./created-task.js";
export function editTask(
	titleTask,
	descriptionTask,
	btnEdit,
	btnSave,
	btnUpdate,
	btnCompleted
) {
	btnEdit.addEventListener("click", () => {
		btnSave.style.display = "none";
		btnUpdate.style.display = "block";

		$titleTaskInput.value = titleTask;
		$descriptionTaskInput.value = descriptionTask;

		btnUpdate.addEventListener("click", () => {
			btnUpdate.style.display = "none";
			btnSave.style.display = "block";

			titleTask = $titleTaskInput.value;
			descriptionTask = $descriptionTaskInput.value;

			$titleTaskInput.value = "";
			$descriptionTaskInput.value = "";
		});
	});
}
