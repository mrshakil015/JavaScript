const sections = document.querySelectorAll('section');
console.log(sections);
for(const section of sections){
    console.log(section)
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '10px';
    section.style.backgroundColor = 'lightgray';
}

const placesContainer = document.getElementById('places-container');
placesContainer.style.backgroundColor = 'yellow';
placesContainer.classList.add('text-style');