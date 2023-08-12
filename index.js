var inputElement = document.getElementById("input");
var todoList = document.getElementById("to-do-list");
inputElement.addEventListener("keydown" , function(e){
    if(e.key == "Enter") {
        if(e.target.value == ""){
            alert("Please enter the item name");
        }else {
        var listItem = document.createElement("li");
        listItem.innerText = e.target.value;
        todoList.appendChild(listItem);
        e.target.value = ""

        }
    }

})

