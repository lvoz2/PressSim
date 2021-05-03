window.worker = new Worker("./worker.js");
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
		.register("https://lvoz2.github.io/PressSim/worker.js")
		.then(serviceWorker => {
			console.log("Service Worker registered: ", serviceWorker);
		})
		.catch(error => {
			console.error("Error registering the Service Worker: ", error);
		});
	}
