export const rangeLoop = function*(quantity) {
	while (true) {
		for (let i = 0; i < quantity; i++) yield i;
		for (let i = quantity -2; i > 0; i--) yield i;
	}
};

function getMousePos(evt, app) {
	var rect = app.view.getBoundingClientRect();

	return {
		x : evt.clientX - rect.left,
		y : evt.clientY - rect.top,
	};
}

export const showMousePosition = (evnt, app) => {
	const pos = getMousePos(evnt, app);

	console.log({ pos });
};
