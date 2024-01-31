let index = 0;

const bgImage = [
  "url(/public/img/prototype-tg1.png)",
  "url(/public/img/prototype-tg2.png)",
  "url(/public/img/prototype-tg3.png)",
  "url(/public/img/prototype-tg4.png)",
  "url(/public/img/prototype-tg5.png)",
  "url(/public/img/prototype-tg6.png)",
  "url(/public/img/prototype-tg7.png)",
  "url(/public/img/prototype-tg8.png)",
  "url(/public/img/prototype-tg9.png)",
  "url(/public/img/prototype-tg10.png)"
];

const preloadImages = array => {
  if(!preloadImages.list)
    preloadImages.list = [];
  let list = preloadImages.list;
  for(let i = 0;i < array.length;i++){
    let img = new Image();
    img.onload = _ => {
      let index = list.indexOf(this);
      // remove image from the array once its loaded for memory consumption reason
      if(index !== -1)
        list.splice(index, 1);
    }
    list.push(img);
    img.src = array[i];
  }
};
/*
  reference: https://www.web-dev-qa-db-ja.com/ja/javascript/javascript%E3%81%A7%E7%94%BB%E5%83%8F%E3%82%92%E3%82%AD%E3%83%A3%E3%83%83%E3%82%B7%E3%83%A5%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95/1067516542/
*/

preloadImages([
  "/public/img/prototype-tg1.png",
  "/public/img/prototype-tg2.png",
  "/public/img/prototype-tg3.png",
  "/public/img/prototype-tg4.png",
  "/public/img/prototype-tg5.png",
  "/public/img/prototype-tg6.png",
  "/public/img/prototype-tg7.png",
  "/public/img/prototype-tg8.png",
  "/public/img/prototype-tg9.png",
  "/public/img/prototype-tg10.png"
]);

setInterval(_=>{
  index = Math.floor(Math.random() * bgImage.length);
  document.getElementById("test").textContent = index;
  document.body.style.backgroundImage = bgImage[index];
}, 5000);