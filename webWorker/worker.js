self.addEventListener('message', async event => {
	console.log('Worker received:', event.data);

	const baseURL = 'https://picsum.photos/seed/';

	const numArr = Array.from({length: 50}, (_, i) => i + event.data.idx);
	
	const resArr = await Promise.all(
		numArr.map(async (imgNum) => {
			const response = await fetch(baseURL + imgNum + '/200/300');
			const blob = await response.blob();
			return (blob);;
		}),
	);

	self.postMessage(resArr);
})