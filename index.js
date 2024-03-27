function addTodo() {
    var Input = document.getElementById("todoInput");
    var todoText = todoInput.value.trim();

    if (todoText !== "") {
        var todoList = document.getElementById("todoList");
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        var textNode = document.createTextNode(todoText);
        var editButton = document.createElement("button");
        editButton.innerText = "Edit";
        var deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        editButton.addEventListener("click", function() {
            var newText = prompt("Enter new text", todoText);
            if (newText !== null && newText.trim() !== "") {
                textNode.nodeValue = newText.trim();
            }
        });

        // Delete button functionality
        deleteButton.addEventListener("click", function() {
            todoList.removeChild(li);
        });

        li.appendChild(checkbox);
        li.appendChild(textNode);
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        todoList.appendChild(li);

        todoInput.value = ""; // Clear the input field
    }

    return false; // Prevent form submission
}

// Event listener for form submission
var todoForm = document.getElementById("todoForm");
todoForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    addTodo(); // Call the addTodo function
});