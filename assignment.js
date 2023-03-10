//string indexing
let a = "beautiful";
let b = a.substring(0,4);
console.log(b);

//adding strings
const food = "I did not have appetite today";
const newFood= food.replace(food[10], "eat");
console.log(newFood);

// checking for no of occurences
const story = "she sells sea shells at the sea shore";
console.log(story.match(/the/g).length);
console.log(story.match(/s/g).length);

// converting strings to specified formats
let d = "CONfidant";
let d1 = d.toUpperCase();
console.log(d1);

let y = ("amazing", "beautiFul");
let y1 = y.toLowerCase();
console.log(y1);

let z = "A busy office"
let z1 = z.toUpperCase;
console.log(z);


// find strings
const string1 = "The lady went to the market with her sister";
console.log(string1.search(/market/));

const string2 = "My favourite season is spring";
console.log(string2.search(/season/));
