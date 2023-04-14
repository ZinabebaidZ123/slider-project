


let imgs=document.querySelectorAll(".col-md-4 img")
let boxfixed=document.getElementById("fixedbox")
let closeBtn=document.getElementById("closeBtn")
let leftBtn=document.getElementById("leftBtn")
let rightBtn=document.getElementById("rightBtn")
let smallBox=document.getElementById("smallBox")

console.log(smallBox)

let currentIndex=0
 
let arr=Array.from(imgs)

for(let i=0;i<imgs.length; i++){
    imgs[i].addEventListener("click",function(e){
       let clickedImg=e.target
       let imgsrc= clickedImg.getAttribute("src")
       
       currentIndex=arr.indexOf(clickedImg)
        console.log(currentIndex)
   
      boxfixed.classList.replace("d-none","d-flex") 
       
        smallBox.style.backgroundImage=`url(${imgsrc})`;
    })
}



rightBtn.addEventListener("click",nextSlide)
  leftBtn.addEventListener("click",prevSlide)

document.addEventListener("keyup",function(e){


    if(boxfixed.getAttribute("class").includes("d-flex")){
    if(e.key=="Escape"){
        closeSlide() 
    }else if(e.key=="ArrowLeft"){
        prevSlide() 
    }else if(e.key=="ArrowRight"){
        nextSlide()
    }}
console.log(e)
})

///closing
function closeSlide(){    
    boxfixed.classList.replace("d-flex","d-none") 
}
closeBtn.addEventListener("click",closeSlide)
boxfixed.addEventListener("click",closeSlide)
smallBox.addEventListener("click",function(e){
    e.stopPropagation()
})




function prevSlide(){
    currentIndex--;
    if(currentIndex==-1){
        currentIndex=arr.length-1}
      
        let imgsrc=arr[currentIndex].getAttribute("src")
        smallBox.style.backgroundImage=`url(${imgsrc})`;
}



function nextSlide(){
    currentIndex++
if(currentIndex==arr.length){
    currentIndex=0}
  
    let imgsrc=arr[currentIndex].getAttribute("src")
    smallBox.style.backgroundImage=`url(${imgsrc})`;


}