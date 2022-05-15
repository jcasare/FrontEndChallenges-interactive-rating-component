let btns = document.querySelectorAll(".rating-section button")
let spanContent = document.querySelector("span");
let firstCard = document.querySelector(".first-wrapper");
let secondCard = document.querySelector(".thanks-card");
let submitButton = document.querySelector(".submit-btn-container button");

for(let i=0; i<btns.length; i++){
  btns[i].addEventListener("click", function(){
  let ratingValue =   btns[i].textContent;

    submitButton.addEventListener("click", ()=>{
    firstCard.classList.add("hide");
    secondCard.classList.remove("hide");
    spanContent.textContent=ratingValue;
  } )

  }

 )
}
