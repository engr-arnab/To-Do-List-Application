const doneOrCompletedBtns = document.querySelectorAll(".doneOrCompletedBtn")

// doneOrCompletedBtns.forEach((button, index) => {
//     button.addEventListener("click", () => {
//         console.log(index)
//         if (button.style.backgroundColor == "rgb(255, 149, 0)") {
//             button.style.backgroundColor = "rgb(54, 199, 90)";
//             button.textContent = 'Completed'

//         } else {
//             button.style.backgroundColor = "rgb(255, 149, 0)";
//             button.textContent = 'Pending'
//         }
//     });
// });
const all = document.querySelector(".all")
const pending = document.querySelector(".pending")
const completed = document.querySelector(".completed")

const todoLists = document.querySelector(".todoLists")
const pendingTodo = document.querySelector(".pendingTodo")
const completedTodo = document.querySelector(".completedTodo")

all.addEventListener("click", () => {
    all.style.backgroundColor = '#adb5bd'
    pending.style.backgroundColor = 'white'
    completed.style.backgroundColor = 'white'

    todoLists.style.display = 'block'
    pendingTodo.style.display = 'none'
    completedTodo.style.display = 'none'


})


pending.addEventListener("click", () => {
    all.style.backgroundColor = 'white'
    pending.style.backgroundColor = '#adb5bd'
    completed.style.backgroundColor = 'white'

    todoLists.style.display = 'none'
    pendingTodo.style.display = 'block'
    completedTodo.style.display = 'none'

    pendingTodo.innerHTML = ''

    for (let index = 0; index < todo.length; index++) {
        const element = todo[index];
        const date = todo[index].date;

        if (element.disabled == false) {

            console.log(index)


            let p = document.createElement("div"); // Create a new div element
            p.innerHTML = ` 
        <div class="todoListItems">
            <div class="mainContent">
                <div class="title">${element.text}</div>
                <div class="dateTime">${date}</div>
            </div>
            <div class="doneOrCompleted ${index} ">
            </div>
        </div>`;

        pendingTodo.appendChild(p);

        }

    }
})


completed.addEventListener("click", () => {
    all.style.backgroundColor = 'white'
    pending.style.backgroundColor = 'white'
    completed.style.backgroundColor = '#adb5bd'

    todoLists.style.display = 'none'
    pendingTodo.style.display = 'none'
    completedTodo.style.display = 'block'


    completedTodo.innerHTML = ''

    for (let index = 0; index < todo.length; index++) {
        const element = todo[index];
        const date = todo[index].date;

        if (element.disabled == true) {

            console.log(index)


            let p = document.createElement("div"); // Create a new div element
            p.innerHTML = ` 
        <div class="todoListItems">
                <div class="mainContent">
                    <div class="title">${element.text}</div>
                    <div class="dateTime">${date}</div>
                </div>
                <div class="doneOrCompleted ${index} ">
                    
                </div>
            </div>`;

        completedTodo.appendChild(p);

        }

    }
})

function formatDateTime() {
    const now = new Date();

    const options = { month: 'long', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
    const formattedDate = now.toLocaleString('en-US', options)

    return (formattedDate);
}