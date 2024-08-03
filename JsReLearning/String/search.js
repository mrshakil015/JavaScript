const about = 'JavaScript References. W3Schools maintains a complete JavaScript reference, including all HTML and browser objects. '
const searchString = 'W3Schools';
const aboutLowerCase = about.toLowerCase();
const searchLowerCase = searchString.toLowerCase();

// const doesExitOneLine = about.toLowerCase().includes(searchString.toLowerCase());

const doesExist = aboutLowerCase.includes(searchLowerCase);
console.log(doesExist);

//--------- IndexOf ---------
console.log(about.indexOf(searchString));

//------- Startswith ---------
console.log(about.startsWith('JavaScript'));

//------- EndsWith ---------
console.log(about.endsWith('JavaScript'));