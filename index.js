var inputElement = document.getElementById("input");

inputElement.addEventListener("keydown" , function(e){
    if(e.key == "Enter") {
        console.log(e.target.value)
    }

})

