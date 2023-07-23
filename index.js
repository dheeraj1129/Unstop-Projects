

const sidebar = document.getElementById('sidebar');
const animateButton = document.getElementById('animateButton');

let isHidden = true;

animateButton.addEventListener('click', () => {
  if (isHidden) {
    sidebar.classList.remove('hidden');
  } else {
    sidebar.classList.add('hidden');
  }
  isHidden = !isHidden; 
});

// Double-click event to hide the div without animation
let lastClickTime = 0;
animateButton.addEventListener('dblclick', () => {
  const currentTime = new Date().getTime();
  if (currentTime - lastClickTime < 300) {
    sidebar.classList.add('hidden');
    isHidden = true;
  }
  lastClickTime = currentTime;
});
