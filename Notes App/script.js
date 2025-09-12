//  Select and store a button element with id="btn", used to trigger the creation of a new note
btnEl = document.getElementById("btn");
// Select and store a container element (<div>) with id="app", where notes are displayed.
appEl = document.getElementById("app");

// When the page loads, this code retrieves all saved notes from localStorage and renders them as <textarea> elements in the appEl container.
// getNotes() is a function that retrieves notes from localStorage.
// .forEach((note) => { ... }): Iterates over each note object (with id and content properties).
getNotes().forEach((note) => {
    const noteEl = createNoteEl(note.id, note.content); // Create a <textarea> element for the note.
    appEl.insertBefore(noteEl, btnEl); // Insert the note element into appEl before the button (btnEl), ensuring notes appear above the button.
});

// Create a <textarea> element for a note with the given id and content.
function createNoteEl(id, content) {
    const element = document.createElement("textarea"); // Create a new <textarea> element.
    element.classList.add("note"); // Add the class note for styling.
    element.placeholder = "Empty Note"; // Set a placeholder text for empty notes.
    element.value = content; //  Set the textarea’s content to the note’s text.


    // Triggers when the user double-clicks the textarea.
    element.addEventListener("dblclick", () => {
        const warning = confirm("Do you want to DELETE this NOTE?"); // Show a browser confirmation dialog.
        if (warning) {
            deleteNote(id, element);
        }
    });

    // Trigger whenever the user types in the textarea.
    element.addEventListener("input", () => {
        updateNote(id, element.value); // Call updateNote(id, element.value) to save the updated content to localStorage.
    });

    // Return the created <textarea> element for insertion into the DOM.
    return element;

}

//  Delete a note from both localStorage and the DOM.
function deleteNote(id, element) {
    const notes = getNotes().filter((note) => note.id !=id) // Retrieve all notes and filters out the note with the matching id, creating a new array without it.
    saveNotes(notes) //  Save the updated notes array to localStorage
    appEl.removeChild(element) // Remove the <textarea> element from the appEl container.
}

// Update the content of a note in localStorage.
function updateNote(id, content) {
    const notes = getNotes(); // Retrieve the array of notes from localStorage
    const target = notes.filter((note) => note.id == id) [0]; // Find the note with the matching id. The [0] assumes the note exists (first match).
    target.content = content; // Update the note’s content.
    saveNotes(notes); // Save the updated notes array to localStorage
}

// Create a new empty note, add it to the DOM and localStorage.
function addNote() {
    const notes = getNotes(); // Retrieve the current notes array.

    // Create a new note object with:
    // id: A random integer (0–99999) using Math.floor(Math.random() * 100000).
    // content: An empty string for a new note.
    const noteObj = {
        id: Math.floor(Math.random() * 100000),
        content: "",
    };

    const noteEl = createNoteEl(noteObj.id, noteObj.content); // Create a <textarea> for the new note.
    appEl.insertBefore(noteEl, btnEl); // Insert the new <textarea> before the button.

    notes.push(noteObj); // Add the new note to the notes array.

    saveNotes(notes); // Save the updated array to localStorage.
}

//  Save the notes array to localStorage.
function saveNotes(notes) {
    // Convert the notes array to a JSON string.
    // Store the JSON string in localStorage under the key "note-app".
    localStorage.setItem("note-app", JSON.stringify(notes)); 
}

// Retrieve the notes array from localStorage.
function getNotes() {
    //  Get the JSON string stored under "note-app".
    // || "[]": Returns an empty array [] if no data exists (e.g., first use).
    // JSON.parse(...): Convert the JSON string back to an array of note objects.
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}

// Attache a click event listener to the button, so clicking it triggers the addNote function.
btnEl.addEventListener("click", addNote);
