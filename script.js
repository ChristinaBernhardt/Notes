let titles = ['Haushalt'];
let texts = ['Bad putzen'];

function init() {
  renderNotes();
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

function addNote() {
  let noteTitle = document.getElementById('titleInput').value;
  let noteText = document.getElementById('textInput').value;

  titles.push(noteTitle);
  texts.push(noteText);
  renderNotes();
  document.getElementById('titleInput').value = '';
  document.getElementById('textInput').value = '';
}
