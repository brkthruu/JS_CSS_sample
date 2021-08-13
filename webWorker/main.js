if (window.Worker) {
	var i, myWorker, running;
	var myWorkers = [];
	running = 0;

	const workerDone = (event) => {
		--running;
		console.log('Main received: ', event.data);

		const imageData = event.data;
		
		imageData.forEach((blobURL) => {
			const objectURL = URL.createObjectURL(blobURL);
			var img = document.createElement('img');
			img.src = objectURL;
			document.getElementById('body').appendChild(img);
		})
		//done
		if (running === 0)
			myWorkers.forEach(worker => worker.terminate());
	}

	for (i = 0 ; i < 20 ; i++) {
		myWorkers[i] = new Worker('worker.js');
		++running;
		myWorkers[i].onmessage = workerDone;
		myWorkers[i].postMessage({idx: `${i * 50 + 1}`});
	}
}
