// let index = 0;
// let pastIndex;
// let startFlag = 0;
// const bgStyle = [
//   "bg-one",
//   "bg-two",
//   "bg-three",
//   "bg-four",
//   "bg-five",
//   "bg-six",
//   "bg-seven",
//   "bg-eight"
// ];

// const targetStyle = document.getElementById("target-style");

// setInterval(_=>{
//   if(startFlag !== 0)
//     targetStyle.classList.remove(bgStyle[pastIndex]);  

//   index = Math.floor(Math.random() * bgStyle.length);

//   pastIndex = index;
//   console.log(index);

//   targetStyle.classList.add(bgStyle[index]);

//   startFlag = 1;

// }, 2000);