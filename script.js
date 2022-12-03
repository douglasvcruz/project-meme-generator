const memeText = document.getElementById('meme-text');
const textInput = document.getElementById('text-input');
const memeImage = document.getElementById('meme-image');
const memeInsert = document.getElementById('meme-insert');
const memeImageContainer = document.getElementById('meme-image-container');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');

const insertTextPrev = () => {
  textInput.addEventListener('input', (e) => {
    memeText.innerHTML = e.target.value;
  });
};

const insertImagePrev = () => {
  memeInsert.addEventListener('change', (e) => {
    memeImage.src = URL.createObjectURL(e.target.files[0]);
  })
}

const changeBorder = (e) => {
  memeImageContainer.className = e.target.className;
}

fire.addEventListener('click', changeBorder);
water.addEventListener('click', changeBorder);
earth.addEventListener('click', changeBorder);



insertImagePrev();
insertTextPrev();
