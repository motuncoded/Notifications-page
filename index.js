let btn = document.querySelector("#btn");
let notice = document.querySelector(".notice")
let toggleElement = document.querySelector(".heading");
let hidden = document.querySelector(".hidden");
let message = document.querySelector(".message");
let unread = document.querySelectorAll(".unread");
let dot =  document.querySelector(".dot")




let  count = 3;

function manageCount (count){
  notice.innerText = count;
}


btn.addEventListener("click", result);


function result(){
  unread.forEach(e =>{
    e.classList.remove("unread","dot");
    
const noticeMessage = document.querySelectorAll("unread");
 notice.innerHTML = noticeMessage.length;

 
 
})

};




   unread.forEach(elem =>{
   elem.addEventListener("click", ()=>{
    elem.classList.remove("unread");




    count--;
    if(count < 1){
      count = 0
    }
    else{
      count = count
    }
    manageCount(count);
   })

   })





toggleElement.addEventListener("click", toggleMessage);

function toggleMessage(){
    toggleElement.classList.toggle("show");
        message.classList.toggle("hidden");

}