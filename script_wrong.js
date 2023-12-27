
let titles = [];
let texts = [];

function showTitles(){
        document.getElementById('newTitle').innerHTML = ``;
        document.getElementById('newText').innerHTML = ``;
        for (let i = 0; i < titles.length; i++) {
                document.getElementById('newTitle').innerHTML += 
                `<textarea id="newTitle" class="title">
                ${titles[i]}
                </textarea>
                `;
               
        for (let i = 0; i < texts.length; i++) {
                document.getElementById('newText').innerHTML += 
                `<textarea id="newText" class="text">
                ${texts[i]}
                </textarea>
                `;
        };
                                      }
}

function addTitle(){
        let title = document.getElementById('titleInput').value;
        let text = document.getElementById('textInput').value;

titles.push(title);
texts.push(text);
showTitles();
document.getElementById('titleInput').value = '';
document.getElementById('textInput').value = '';
}

