const no = document.querySelector(".no");
const yes = document.querySelector(".yes");
const cat =document.querySelector(".cat");
const cat2 = document.querySelector('.cat2')
const text = document.querySelector(".text");
const text2 = document.querySelector(".text2");

no.addEventListener("mouseover", function (){
    function getRandomNumber(){
        return Math.floor(Math.random() * 300);
    }

    no.style.left = getRandomNumber() + "px";
    no.style.top = getRandomNumber() + "px";
}
);
yes.onclick = function(){
cat.style.display = "none";
cat2.style.display = "block";
text.style.display = "none";
text2.style.display ="block";
}