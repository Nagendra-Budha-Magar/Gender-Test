let yesBtn = document.getElementById("btn1");
yesBtn.addEventListener("click", function(){
    alert("You are officially gay.");
});

let noBtn = document.getElementById("btn2");
noBtn.addEventListener("mouseover", moveBtn);


function moveBtn(){
    const x = Math.floor(Math.random()*200)+1;
    const y = Math.floor(Math.random()*200)+1;

    noBtn.style.top = x+"px";
    noBtn.style.left = y+"px";
}

    // Re-enable pointer events after the transition finishes for button 2.
    setTimeout(() => {
        noBtn.style.pointerEvents = "auto";
    }, 300); // 300ms should match your transition time