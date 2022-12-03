const memeText = document.getElementById('meme-text');
const textInput = document.getElementById('text-input');
const memeImage = document.getElementById('meme-image');
const memeInsert = document.getElementById('meme-insert');

const insertTextPrev = () => {
  textInput.addEventListener('input', (e) => {
    memeText.innerHTML = e.target.value;
  });
};

const insertImagePrev = () => {
  memeInsert.addEventListener('change', (e) => {
    memeImage.src = URL.createObjectURL(e.target.files[0]);
    console.log(memeImage.src);
  });
};

insertImagePrev();
insertTextPrev();
