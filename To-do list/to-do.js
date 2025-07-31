const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    //if input box is empty then it should show the alert msg
    if (inputBox.value === '') {
        alert("You must write something!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; //whatever value we're gonna add in this input field it will add in li 
        listContainer.appendChild(li); // this li displayed under the list container
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

//If the clicked target element is li then it should add the 
// checked classname and if the checked classname is already there it will remove that//  
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
         saveData();
    }

    //If we have clicked on span then it will remove the parent element, parent elemnt= li
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
         saveData();
    }
},   false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");   
}
showTask();

// why we use this ===
// add and dlt