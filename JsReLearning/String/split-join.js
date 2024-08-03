const about = 'JavaScript References. W3Schools maintains a complete JavaScript reference, including all HTML and browser objects.'

const parts = about.split(' ');
console.log(parts);

const sentences = about.split('.');
console.log(sentences);

const chars = about.split('');
console.log(chars);

//------ Slice --------
const partial = about.slice(5,20);
console.log(partial);