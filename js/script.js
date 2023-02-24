const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

async function getImage() {
	const res = await fetch("https://picsum.photos/v2/list?limit=100");
	const images = await res.json();
  	selctRandomImage(images);
}

function selctRandomImage(images) {
	const randomIndex = Math.floor(Math.random() * images.length);
	const randomImage = images[randomIndex];
	displayImage(randomImage);
}

function displayImage(randomImage) {
	const author = randomImage.author;
	const imageAddress = randomImage.download_url;
	authorSpan.innerText = author;
  	img.src = imageAddress;
  	imgDiv.classList.remove("hide");
};

button.addEventListener("click", function () {
  	getImage();
});