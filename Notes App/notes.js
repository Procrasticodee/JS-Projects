const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");//Only fetch the first element
let notes = document.querySelectorAll(".input-box");// it'll select all the elements

function showNotes() {
    // if we have the data in our browser then it'll be displayed in our webpage.
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
// this will call the above function and display the notes in the web browser.

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
    // It'll upadate the data in our browser.
}

createBtn.addEventListener("click", () => {
    let inputBox = document.createElement("p"); 
    //It'll will create one p element and it will stored in input box.
    let img = document.createElement("img");
    // it will create one img tag and will store it as img.
    inputBox.className = "input-box";
    // now in the p element which is input box it will add one class name called input-box.
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
    // this will display the input box and the img 
})

notesContainer.addEventListener("click", function(e){
    if(e.target.tagName === "IMG") { 
        e.target.parentElement.remove();
        //if we click on the img which is delete icon it will remove the parent element which is input box.
        updateStorage();
    }
    else if (e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => { 
            nt.onkeyup = function(){
                updateStorage();
                //it will update the storage when we'll add or delete anything in p tag.
            }
        })
    }

})

//if we add a event key then event key insert a line break
document.addEventListener("keydown", event =>{
    if(event.key === "Enter"){
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})