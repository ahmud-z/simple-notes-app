const createBtn = document.getElementById('createBtn');
const notesContainer = document.getElementById('notesContainer');
let notesClass = document.querySelectorAll('.note-box');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

createBtn.addEventListener("click", function () {
    let note = document.createElement('p');
    let img = document.createElement("img");
    note.setAttribute("contenteditable", "true");
    note.setAttribute.Placeholder = "Hello"
    note.className = "note-box"
    img.src = "images/delete.png"
    note.appendChild(img);
    notesContainer.prepend(note);
})

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

notesContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if (e.target.tagName === "P") {
        notesClass = document.querySelectorAll(".note-box");
        notesClass.forEach(item => {
            item.onkeyup = function () {
                updateStorage();
            }
        });
    }
});


