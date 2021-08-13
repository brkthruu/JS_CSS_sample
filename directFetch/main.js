var numArr = Array.from({length: 1000}, (_, i) => i + 1);
const urlArr = numArr.map(
	(i) => {
		return `https://picsum.photos/seed/${i}/200/300`;
	}
)
console.log(urlArr);
urlArr.forEach((url) => {
	var img = document.createElement('img');
	img.src = url;
	document.getElementById('body').appendChild(img);
})