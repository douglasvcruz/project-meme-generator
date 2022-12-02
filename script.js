const memeText = document.getElementById('meme-text');
const inputText = document.getElementById('text-input');

const insertPrev = () => {
  inputText.addEventListener('input', (e) => {
    memeText.innerHTML = e.target.value;
  });
};

insertPrev();
