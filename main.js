const addButtonInput = document.querySelector(".addButtonInput")
const addButtonBtn = document.querySelector(".addButtonBtn")
const deleteBtn = document.querySelector(".deleteBtn")

let todo = JSON.parse(localStorage.getItem("todo")) || [];

document.addEventListener("DOMContentLoaded", function () {
    displayElement()

});

addButtonBtn.addEventListener("click", () => {

    if (addButtonInput.value.trim() != "") {
        const newTask = addButtonInput.value.trim();
        console.log(newTask)

        todo.push({ text: newTask, disabled: false, date: formatDateTime() });

        save()

        addButtonInput.value = ''
        displayElement()
    }

})


function displayElement() {
    todoLists.innerHTML = ""; // Clear previous elements

    for (let index = 0; index < todo.length; index++) {
        const element = todo[index].text;
        const date = todo[index].date;
        const isDisabled = todo[index].disabled; // Get saved state

        let p = document.createElement("div");
        p.classList.add("todoListItems");
        p.dataset.index = index; // Store index

        // Set button color and text based on localStorage data
        let buttonColor = isDisabled ? "rgb(54, 199, 90)" : "rgb(255, 149, 0)";
        let buttonText = isDisabled ? "Completed" : "Pending";

        p.innerHTML = ` 
        <div class="mainContent">
            <div class="title">${element}</div>
            <div class="dateTime">${date}</div>
        </div>
        <div class="doneOrCompleted">
            <button class="doneOrCompletedBtn" style="background-color: ${buttonColor};">
                ${buttonText}
            </button>
        </div>`;

        todoLists.appendChild(p);
    }
}

function save() {
    localStorage.setItem("todo", JSON.stringify(todo));
}

document.addEventListener("click", function (event) {
    if (event.target.classList.contains("doneOrCompletedBtn")) {
        const button = event.target;
        const parent = button.closest(".todoListItems"); // Get parent item
        if (!parent) return;

        const index = parseInt(parent.dataset.index, 10); // Get stored index
        if (isNaN(index)) return;

        // Toggle the disabled state
        todo[index].disabled = !todo[index].disabled;
        save(); // Save updated state

        // Update button color and text
        if (todo[index].disabled) {
            button.style.backgroundColor = "rgb(54, 199, 90)";
            button.textContent = "Completed";
        } else {
            button.style.backgroundColor = "rgb(255, 149, 0)";
            button.textContent = "Pending";
        }
    }
});


pendingTodo.addEventListener("click", ()=>{
    for (let index = 0; index < todo.length; index++) {
        const element = todo[index];
        console.log(element.disabled)
        console.log(5)
    }
})

function deleteAllTasks() {
    todo = [];
    save()
    displayElement()
  }

deleteBtn.addEventListener("click",deleteAllTasks)