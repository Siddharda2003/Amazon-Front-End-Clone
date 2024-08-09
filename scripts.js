const images=document.querySelectorAll(".header img");
const prev=document.querySelector(".prev");
const next=document.querySelector(".next");
let n=0;
const changeImage=()=>{
images.forEach((img,index)=>{
img.style.display='none';
});
images[n].style.display='block';
}
changeImage();
prev.addEventListener("click",(ev)=>{
if(n>0){
n--;
changeImage();
}else{
n=images.length-1;
}
});
next.addEventListener("click",(ev)=>{
if(n<images.length-1){
n++;
changeImage();
}else{
n=0;
}
});