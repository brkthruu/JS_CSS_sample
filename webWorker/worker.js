self.addEventListener('message', async event => {
	const baseURL = event.data;

	const numArr = Array.from({length: 100}, (_, i) => i + 200);
	
	const resArr = await Promise.all(
		numArr.map(async (imgNum) => {
			const response = await fetch(baseURL + imgNum);
			const blob = await response.blob();
			return (blob);;
		}),
	);

	self.postMessage(resArr);
  console.log('Worker received:', event.data);
})