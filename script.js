const memeText = document.getElementById('meme-text');
const textInput = document.getElementById('text-input');
const memeImage = document.getElementById('meme-image');
const memeInsert = document.getElementById('meme-insert');
const memeImageContainer = document.getElementById('meme-image-container');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const meme1 = document.getElementById('meme-1');
const meme2 = document.getElementById('meme-2');
const meme3 = document.getElementById('meme-3');
const meme4 = document.getElementById('meme-4');

const insertTextPrev = () => {
  textInput.addEventListener('input', (e) => {
    memeText.innerHTML = e.target.value;
  });
};

const insertImagePrev = () => {
  memeInsert.addEventListener('change', (e) => {
    memeImage.src = URL.createObjectURL(e.target.files[0]);
  });
};

const changeBorder = (e) => { memeImageContainer.className = e.target.className; };

const changeMeme = (e) => { memeImage.src = e.target.src; };

fire.addEventListener('click', changeBorder);
water.addEventListener('click', changeBorder);
earth.addEventListener('click', changeBorder);
meme1.addEventListener('click', changeMeme);
meme2.addEventListener('click', changeMeme);
meme3.addEventListener('click', changeMeme);
meme4.addEventListener('click', changeMeme);

insertImagePrev();
insertTextPrev();
