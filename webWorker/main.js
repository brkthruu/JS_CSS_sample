if (window.Worker) {
	var myWorker = new Worker('worker.js');
	myWorker.onmessage = (event) => {
		console.log('Main received: ', event.data);
		const imageData = event.data;
		imageData.forEach((blobURL) => {
			const objectURL = URL.createObjectURL(blobURL);
			var img = document.createElement('img');
			img.src = objectURL;
			document.getElementById('body').appendChild(img);
		})
		//done
		myWorker.terminate();
	}

	myWorker.postMessage(`https://picsum.photos/`);
}
