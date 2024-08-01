function completedTask(button, titleTask, descriptionTask) {
	button.addEventListener("click", () => {
		if (button.textContent === "No Completed") {
			button.textContent = "Completed";
		} else {
			button.textContent = "No Completed";
		}

		titleTask.classList.toggle("title__task-completed");
		descriptionTask.classList.toggle("description__task-completed");
	});
}

export default completedTask;
