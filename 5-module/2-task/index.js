function toggleText() {
  // ваш код...
  let button= document.querySelector(".toggle-text-button")
let text=document.getElementById("text")
button.onclick=function(){
if(text.hidden ==false){
text.hidden=true
console.log("test")
}else{
text.hidden=false
console.log("test1")
}
}
}
