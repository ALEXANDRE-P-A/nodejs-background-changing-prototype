let index = 0;

const bgImage = [
  "url(/public/img/prototype1.png)",
  "url(/public/img/prototype2.png)",
  "url(/public/img/prototype3.png)"
];

setInterval(_=>{
  index = Math.floor(Math.random() * bgImage.length);
  document.body.style.backgroundImage = bgImage[index];
}, 5000);