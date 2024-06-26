// Target the form
const noteForm = document.querySelector('#note-form');
// Target the note header h3
const noteHeader = document.querySelector('.note-header');

function switchMode() {
  let lighting = document.body;
  lighting.classList.toggle("dark");
}

function getNotes() {
  // Pull the old data from the database(localStorage) or an empty array if no previous data has been stored
  const rawNotes = localStorage.getItem('notes');
  const notes = JSON.parse(rawNotes) || [];

  return notes;
}

// A function that is is called when the form is submitted
function createNote(eventObj) {
  eventObj.preventDefault();
  // Grab the note input element
  const noteInput = document.querySelector('#note-input');
  // Get the value(what they typed into the box)
  const noteText = noteInput.value;
  // Create a date value object
  const dateObj = new Date(); // {}
  
  const month = dateObj.getMonth() + 1;
  
  const date = dateObj.getDate();
  
  const year = dateObj.getFullYear();
  
  const objHours = dateObj.getHours();
  
  const hour = objHours > 12 ? objHours - 12 : objHours;
  // If the dateObj minutes is < 10, then add a 0
  const objMin = dateObj.getMinutes();
  const minutes = objMin < 10 ? '0' + objMin : objMin;
  //without this line, it would just be 2:7. for example
  // const dateStr = month + '/' + date + '/' + year Time;
  
  const dateStr = `${month}/${date}/${year} ${hour}:${minutes}`;
  // Create an object value with the note text and the current date MM/DD/YYYY
  // The object should have two properties - text(noteText) and date(dateStr)
  const noteObj = {
    text: noteText,
    date: dateStr
  };

  // Use my getNotes function to retreive the notes
  const notes = getNotes();

  // Push the noteObj to the notes array
  notes.push(noteObj);
  const jsonArray = JSON.stringify(notes);
  // Save the notes array to localStorage
  localStorage.setItem('notes', jsonArray);
  noteInput.value = '';
  outputNotes();
}

function outputNotes() {
  const notes = getNotes();
  const container = document.querySelector('.container');
  const notesHeader = document.querySelector('.notes-header');
  if (notes.length) {
    noteHeader.innerText = 'Your Notes:';
  }

  container.innerHTML = '';
  // Loop over each object in the array and output an article element into our main container for each object
  for (const noteObj of notes) {
    //Target the main container element
    container.insertAdjacentHTML('beforeend', `
        <article class ="note">
            <p class="note-text">${noteObj.text}</p>
            <p class="note-date"></p>Added: ${noteObj.date}</p>
        </article>
        `);//articles for every entry stored.
  }
}

outputNotes();

// Set up any necessary event listeners that should be listening when the page loads
noteForm.addEventListener('submit', createNote);
<<<<<<<< HEAD:js/blog.js

========
>>>>>>>> 7a2cc977cb63a61eea50c68be228a03a7e8eeecb:js/script.js
