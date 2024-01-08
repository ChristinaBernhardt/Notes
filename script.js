let titles = [];
let texts = [];
let titlesAsText = "[]";
let textsAsText = "[]";
let trashedTitles = [];
let trashedTexts = [];
let trashedTitlesAsText = "[]";
let trashedTextsAsText = "[]";

load();
loadTrash();

function init() {
  renderNotes();
  renderTrash();
}

function renderNotes() {
  const notesGallery = document.getElementById('new_notes');
  notesGallery.innerHTML = '';
  for (let i = 0; i < titles.length; i++) {
    let title = titles[i];
    let text = texts[i];
    notesGallery.innerHTML += generateNotesHTML(i, title, text);
  }
}

function renderTrash() {
  const notesGallery = document.getElementById('trashed_notes');
  notesGallery.innerHTML = '';
  for (let i = 0; i < trashedTitles.length; i++) {
    let trashedTitle = trashedTitles[i];
    let trashedText = trashedTexts[i];
    notesGallery.innerHTML += generateTrashNotesHTML(i, trashedTitle, trashedText);
  }
}

function generateNotesHTML(i, title, text) {
   return /* html */ `
        <div class="note-card">
           <div class="note-card-title">${title}</div> 
           <div class="note-card-text">${text}</div>
           <button onclick="deleteNote(${i})">Löschen</button>
        </div>
        `;
}


function generateTrashNotesHTML(i, title, text) {
  return /* html */ `
       <div class="note-card">
          <div class="note-card-title">${title}</div> 
          <div class="note-card-text">${text}</div>
          <button onclick="deleteTrashNote(${i})">Endgültig löschen</button>
       </div>
       `;
}

// Burgermenü ein und aus

function showOverlay(){
  document.getElementById('overlay').classList.add('showOverlay');
}

function deleteOverlay(){
  document.getElementById('overlay').classList.remove('showOverlay');
}

// Menü: Ansicht ändern von Notes auf Trash und zurück

function showTrashedNotes(){
  document.getElementById('trashed_notes').classList.add('show-trashed-notes');
  document.getElementById('new_notes').classList.add('d-none-new-notes');
}

function hideTrashedNotes(){
  document.getElementById('trashed_notes').classList.remove('show-trashed-notes');
  document.getElementById('new_notes').classList.remove('d-none-new-notes');
}

// Hinzufügen neuer Notizen
function addNote() {
  let noteTitle = document.getElementById('titleInput').value;
  let noteText = document.getElementById('textInput').value;
  titles.push(noteTitle);
  texts.push(noteText);
  renderNotes();
  saveNotes();
  document.getElementById('titleInput').value = '';
  document.getElementById('textInput').value = '';
}

// Speichern neuer Notizen im Local Storage

function saveNotes(){
  let titlesAsText = JSON.stringify(titles);
  let textsAsText = JSON.stringify(texts);
  localStorage.setItem('titles', titlesAsText);
  localStorage.setItem('texts', textsAsText);
  }
  
// Laden neuer Notizen aus dem Local Storage

  function load(){
    let titlesAsText = localStorage.getItem('titles');
    let textsAsText = localStorage.getItem('texts');
    if (titlesAsText && textsAsText) {;
    titles = JSON.parse(titlesAsText);
    texts = JSON.parse(textsAsText);}
  }

  // Löschen einer Notiz
  
  function deleteNote(i) {
  let deletedTitle = titles.splice(i, 1); 
  let deletedText = texts.splice(i, 1); 
  trashedTitles.push(deletedTitle);
  trashedTexts.push(deletedText);
  renderNotes();
  renderTrash()
  saveNotes();
  saveTrash();
  document.getElementById('titleInput').value = '';
  document.getElementById('textInput').value = '';
}

// Speichern gelöschter Notiz im Local Storage

function saveTrash(){
  let trashedTitlesAsText = JSON.stringify(trashedTitles);
  let trashedTextsAsText = JSON.stringify(trashedTexts);
  localStorage.setItem('trashedTitles', trashedTitlesAsText);
  localStorage.setItem('trashedTexts', trashedTextsAsText);
  }

// Laden gelöschter Notiz aus dem Local Storage

  function loadTrash(){
    let trashedTitlesAsText = localStorage.getItem('trashedTitles');
    let trashedTextsAsText = localStorage.getItem('trashedTexts');
    if (trashedTitlesAsText && trashedTextsAsText) {
    trashedTitles = JSON.parse(trashedTitlesAsText);
    trashedTexts = JSON.parse(trashedTextsAsText);}
  }

  
  function deleteTrashNote(i) {
    // let deletedTitle = titles.splice(i, 1); 
    // let deletedText = texts.splice(i, 1); 
    // trashedTitles.push(deletedTitle);
    // trashedTexts.push(deletedText);
    trashedTitles.splice(i, 1);
    trashedTexts.splice(i, 1);
    renderNotes();
    renderTrash()
    saveNotes();
    // saveTrash();
    document.getElementById('titleInput').value = '';
    document.getElementById('textInput').value = '';
  }