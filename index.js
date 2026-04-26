let img=document.getElementById("img");
let prevBtn=document.getElementById("prev");
let nextBtn=document.getElementById("next");
let dot=document.querySelectorAll(".dot");
 const images = [ "image (4).jpg","family.jpg", "image.png"];
 let index=0;
 function showImage(){
   img.src=images[index];
 }
 showImage();
 function updateDots(){
  dot.forEach((d,i)=>{
    if(i===index){
      d.classList.add("active");
    }else{
      d.classList.remove("active");
    }
  });
};
prevBtn.addEventListener("click",()=>{
  index--;
  if(index<0){
    index=images.length-1;
   
  }
  showImage();
  updateDots();
});
nextBtn.addEventListener("click",()=>{
  index++;
  if(index>=images.length){
    index=0;
  }
  showImage();
  updateDots();
})
setInterval(() => {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  showImage();
  updateDots();
}, 2000);
