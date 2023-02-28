const form = document.getElementById("toDoForm");

const dateButton = document.getElementById("date");

// Show date function
function showDate() {
    const date = new Date();
    document.getElementById('date__value').textContent = date;
};

// Create task function
function submit(event) {
    event.preventDefault();
    // find input value
    // poop it into our html

    const value = event.target.newToDo.value;
    console.log(value);

    const listItem = document.createElement('li');
    listItem.textContent = value;
    const list = document.getElementById('list');
    
    const itemComplete = document.createElement("input");
    itemComplete.type = "checkbox";
    itemComplete.onclick = function () {
        const completedList = document.getElementById('completed-list');
        this.parentElement.remove();
        completedList.appendChild(listItem);
    };
    listItem.appendChild(itemComplete);

    const itemDelete = document.createElement('button');
    itemDelete.textContent = "Delete me";
    itemDelete.onclick = function() {
        this.parentElement.remove();
    }

    listItem.appendChild(itemDelete);
    list.appendChild(listItem);

}

dateButton.addEventListener("click", showDate)
form.addEventListener("submit", submit);