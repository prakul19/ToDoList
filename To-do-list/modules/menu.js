export function menu(btnMenu, menu) {
	btnMenu.addEventListener("click", () => {
		menu.classList.toggle("menu__active");
	});
}
