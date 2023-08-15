var inputElement = document.getElementById("input");
var todoList = document.getElementById("to-do-list");
// Add event listener to the button element, and call addItem() when clicked
inputElement.addEventListener("keydown" , function(e){
    if(e.key == "Enter") {
        if(e.target.value == ""){
            alert("Please enter the item name");
        }else {
        var listItem = document.createElement("li");
        listItem.innerText = e.target.value;
        //Add delete button to each element in the list
        var deleteBtn = document.createElement("button");
        deleteBtn.innerText = "delete item";
      
        deleteBtn.addEventListener("click" , function(){
            listItem.remove();
        })

        listItem.appendChild(deleteBtn);
        todoList.appendChild(listItem);

        e.target.value = ""

        }
    }

})

