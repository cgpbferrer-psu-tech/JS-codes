console.log('dom.js loaded');
document.addEventListener('DOMContentLoaded', () => {
    const newItem = document.createElement('div');
    newItem.innerHTML = '<h2>New Item</h2>';

    // Example parent markup:
    // <div id="parent">
    //   <p>Coffee</p>
    //   <p>Tea</p>
    // </div>

        // helper to create and append a paragraph with given text
        function appendParagraph(text) {
            const p = document.createElement('p');
            p.textContent = text;
            return p;
        }

        const parentDiv = document.getElementById('parent');
        if (parentDiv) {
            // append two new paragraphs and the new item div
            parentDiv.appendChild(appendParagraph('Water'));
            parentDiv.appendChild(appendParagraph('Juice'));
            parentDiv.appendChild(newItem);
        } else {
            console.warn('parent element with id "parent" not found');
        }
});

