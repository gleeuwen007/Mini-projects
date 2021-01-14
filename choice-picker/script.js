const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

function createTags(input) {
    const tags = input.split(',') //create array item of each input item seperated by comma
          .filter(tag => tag.trim() !== '') // Create new array with all blank array items removed
          .map(tag => tag.trim()); //create new array with all white space removed

    tagsEl.innerHTML = ''; //removes any existing spans

    //Create a span tag with tag class for each array item
    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    });
}

function pickRandomTag() {
    //gets all elements with tag class as array
    const tags = document.querySelectorAll('.tag');
    //return random tag in array
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}

function randomSelect() {
    const times = 30;

    //random highlight
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        highlightTag(randomTag);

        setTimeout(() => {
            unHighlightTag(randomTag);
        }, 100);
    }, 100);

    //Stop random highlight and pick one and highlight 
    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        }, 100)
    }, times * 100)
}


textarea.addEventListener('keyup', (event) => {
    createTags(event.target.value); //create the tags as you type

    //when you click enter
    if(event.key === 'Enter') {
        //clear input
        setTimeout(() => {
            event.target.value = '';
        }, 10);

        randomSelect();
    }
})