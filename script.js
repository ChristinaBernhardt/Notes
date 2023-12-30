let titles = [];
let texts = [];
let titlesAsText = "[]";
let textsAsText = "[]";
let trashedTitels = ['Müll'];
let trashedTexts = ['gelöscht'];
let trashedTitelsAsText = "[]";
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

function generateNotesHTML(i, title, text) {
   return /* html */ `
        <div class="note-card">
           <div class="note-card-title">${title}</div> 
           <div class="note-card-text">${text}</div>
           <button onclick="deleteNote(${i})">Löschen</button>
        </div>
        `;
}

function showOverlay(){
  document.getElementById('overlay').classList.add('showOverlay');
}

function deleteOverlay(){
  document.getElementById('overlay').classList.remove('showOverlay');
}

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

function deleteNote(i) {
  titles.splice(i, 1);
  texts.splice(i, 1);
  renderNotes();
  saveNotes();
  saveTrash();
  document.getElementById('titleInput').value = '';
  document.getElementById('textInput').value = '';
}

function saveNotes(){
let titlesAsText = JSON.stringify(titles);
let textsAsText = JSON.stringify(texts);
localStorage.setItem('titles', titlesAsText);
localStorage.setItem('texts', textsAsText);
}

function load(){
  let titlesAsText = localStorage.getItem('titles');
  let textsAsText = localStorage.getItem('texts');
  if (titlesAsText && textsAsText) {
  titles = JSON.parse(titlesAsText);
  texts = JSON.parse(textsAsText);}
}

function renderTrash() {
  const notesGallery = document.getElementById('trashed_notes');
  notesGallery.innerHTML = '';
  for (let i = 0; i < trashedTitels.length; i++) {
    let trashedTitle = trashedTitels[i];
    let trashedText = trashedTexts[i];
    notesGallery.innerHTML += generateNotesHTML(i, trashedTitle, trashedText);
  }
}

function saveTrash(){
  let trashedTitlesAsText = JSON.stringify(trashedTitles);
  let trashedTextsAsText = JSON.stringify(trashedTexts);
  localStorage.setItem('trashedTitles', trashedTitlesAsText);
  localStorage.setItem('trashedTexts', trashedTextsAsText);
  }
  
  function loadTrash(){
    let trashedTitlesAsText = localStorage.getItem('trashedTitles');
    let trashedTextsAsText = localStorage.getItem('trashedTexts');
    if (trashedTitlesAsText && trashedTextsAsText) {
    trashedTitles = JSON.parse(trasehdTitlesAsText);
    trashedTexts = JSON.parse(trasehdTextsAsText);}
  }

  function showTrashedNotes(){
    document.getElementById('trashed_notes').classList.add('show-trashed-notes');
  }

  function hideTrashedNotes(){
    document.getElementById('trashed_notes').classList.remove('show-trashed-notes');
  }