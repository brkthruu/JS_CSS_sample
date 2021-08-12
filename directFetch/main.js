var numArr = Array.from({length: 300}, (_, i) => i + 200);
const urlArr = numArr.map(
	(i) => {
		return `https://picsum.photos/${i}`;
	}
)
console.log(urlArr);
urlArr.forEach((url) => {
	var img = document.createElement('img');
	img.src = url;
	document.getElementById('body').appendChild(img);
})