 let btnElems = document.querySelectorAll(".btn");



 btnElems.forEach(function(item){

   
    item.addEventListener("click",function(){
        let myColor = item.dataset.color
        document.documentElement.style.setProperty("--theme-color",myColor)
    })
 })