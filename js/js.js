// let increment = document.querySelector(".increment");
// let decrement = document.querySelector(".decrement");
// let count = document.querySelector(".count");
// let counter = 0;

// increment.addEventListener("click",()=>{
//     counter++;
//     count.innerHTML = counter;
// });
// decrement.addEventListener("click", ()=>{
//  if(counter > 0){
//     counter--
//     count.innerHTML = counter;
//  }

// });

let topone = document.querySelector(".top");
topone.addEventListener("click",()=>{
window.scrollTo({top: 0, behavior: 'smooth'});
});

window.addEventListener("scroll",()=>{
  let scrollwidth = this.window.scrollY;
  if(scrollwidth > 50){
    topone.style.display = "block";
  }else{
    topone.style.display = "none";
  }
});