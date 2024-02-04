// major elements
const buttonYes = document.getElementById("buttonYes");
const buttonNo = document.getElementById("buttonNo");
const h1 = document.querySelector("h1");
const ansText = document.querySelector("div");
const zmey = document.getElementById("zmey");
const talking = document.getElementById("talking");
const hiddenText = document.getElementById("hidden");

//creating images (after yes button)
const imageUmir = document.createElement("img");
const imageVlub = document.createElement("img");
const imageSitting = document.createElement("img");
const imageReading = document.createElement("img");
const imageYchki = document.createElement("img");
const imageFlying = document.createElement("img");
const imageHeart = document.createElement("img");
const imageRain = document.createElement("img");

// getting access to images
{
  imageUmir.src = "photos/mymir.jpg";
  imageUmir.style =
    "position: absolute; top: 51%; left: 80%; transform: translate(-50%, -50%); margin: 5px; max-width: 200px; max-height: 200px;";
  imageVlub.src = "photos/vlubilsa.jpg";
  imageVlub.style =
    "position: absolute; top: 51%; left: 20%; transform: translate(-50%, -50%); margin: 5px; max-width: 200px; max-height: 200px;";
  imageSitting.src = "photos/sitting.jpg";
  imageSitting.style =
    "position: absolute; top: 20%; left: 50%; transform: translate(-50%, -50%); margin: 5px; max-width: 200px; max-height: 200px;";
  imageReading.src = "photos/reading.jpg";
  imageReading.style =
    "position: absolute; top: 70%; left: 50%; transform: translate(-50%, -50%); margin: 5px; max-width: 200px; max-height: 200px;";
  imageYchki.src = "photos/ychki.jpg";
  imageYchki.style =
    "position: absolute; top: 78%; left: 20%; transform: translate(-50%, -50%); margin: 5px; max-width: 200px; max-height: 200px;";
  imageFlying.src = "photos/flying.jpg";
  imageFlying.style =
    "position: absolute; top: 25%; left: 90%; transform: translate(-50%, -50%); margin: 5px; max-width: 200px; max-height: 200px;";
  imageHeart.src = "photos/heart.jpg";
  imageHeart.style =
    "position: absolute; top: 25%; left: 17%; transform: translate(-50%, -50%); margin: 5px; max-width: 200px; max-height: 200px;";
  imageRain.src = "photos/rain.jpg";
  imageRain.style =
    "position: absolute; top: 80%; left: 90%; transform: translate(-50%, -50%); margin: 5px; max-width: 200px; max-height: 200px;";
}

// functions for buttons
let checker = false;
//yes function
buttonYes.addEventListener("click", () => {
  if (!checker) {
    h1.classList.toggle("invisible");
    buttonNo.classList.toggle("invisible");
    zmey.classList.toggle("invisible");
    talking.classList.toggle("invisible");
  }
  buttonYes.classList.toggle("invisible");
  ansText.textContent = "I LOVE YOU SO MUCH MY DARLING ♥";
  //adding images
  hiddenText.appendChild(imageUmir);
  hiddenText.appendChild(imageVlub);
  hiddenText.appendChild(imageSitting);
  hiddenText.appendChild(imageReading);
  hiddenText.appendChild(imageYchki);
  hiddenText.appendChild(imageFlying);
  hiddenText.appendChild(imageHeart);
  hiddenText.appendChild(imageRain);
});
//no function
buttonNo.addEventListener("click", () => {
  checker = true;
  h1.classList.toggle("invisible");
  buttonNo.classList.toggle("invisible");
  zmey.classList.toggle("invisible");
  talking.classList.toggle("invisible");
  ansText.textContent = "Hey, there is only one option YEAS!";
  buttonYes.style =
    "position: absolute; top: 60%; left: 50%; transform: translate(-50%, -50%); padding: 30px 46px; font-size: 30px;";
  buttonYes.textContent = "YEASSS!";
});
