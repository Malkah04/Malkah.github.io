    let btn=document.querySelectorAll(".cont .c1 button")
    let select=document.querySelector(".cont2 .selection")
    let submit=document.querySelector(".cont .submit")
    let sel=document.querySelector(".cont2")
    let sel1=document.querySelector(".cont")

    let rate=null
    btn.forEach(button=>{
        button.addEventListener("click",function(e){
            rate=button.textContent
            button.style.backgroundColor="white"
            btn.forEach(button=>{
                button.classList.remove("active")
                button.style.backgroundColor = "";
            })
            e.target.classList.add("active")
            button.style.backgroundColor = "white";

        })
    
    })
    submit.addEventListener("click",function(){
        if(rate){
            select.textContent=`you selected ${rate} out of 5`
            submit.style.backgroundColor="rgb(255, 81, 0)"
            submit.style.color="black"
            sel.style.display="block"
            sel1.style.display="none"


        }
    })
    