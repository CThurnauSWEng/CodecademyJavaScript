// Exammples from codecademy javaScript lesson on iterators

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below

fruits.forEach( fruit =>
    console.log(fruit));

function printFruit(piece){
  console.log(piece);
}

fruits.forEach(printFruit);

const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter(word => {
  return word.length < 6;
});

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex( animal => {
  return animal == 'elephant';
})

console.log(animals[foundAnimal]);

const startsWithS = animals.findIndex( animal => {
  return animal[0] == 's';
})

console.log(animals[startsWithS]);

/*
Another widely used iteration method is .reduce(). 
The .reduce() method returns a single value after 
iterating through the elements of an array, thereby 
reducing the array. Take a look at the example below:

Now let's go over the use of .reduce() from the example above:

numbers is an array that contains numbers.
summedNums is a variable that stores the returned value of 
invoking .reduce() on numbers.
numbers.reduce() calls the .reduce() method on the numbers 
array and takes in a callback function as argument.
The callback function has two parameters, accumulator and 
currentValue. The value of accumulator starts off as the value 
of the first element in the array and the currentValue starts 
as the second element.

As .reduce() iterates through the array, the return value of 
the callback function becomes the accumulator value for the 
next iteration, currentValue takes on the value of the current 
element in the looping process.
The .reduce() method can also take an optional second parameter 
to set an initial value for accumulator (remember, the first 
argument is the callback function!). 

*/

const numbers1 = [1,2,4,10];

const summedNums1 = numbers1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue}, 100) 

// Note:  100 is the second argument for .reduce()

console.log(summedNums1);

/*
There are many additional built-in array methods, a complete list of 
which is on the MDN's Array iteration methods page.
*/

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];


console.log(words.some((word) => {
  return word.length < 6;
}));

// Use filter to create a new array

const interestingWords = words.filter((word) => {
  return word.length > 5;
})

console.log(interestingWords);


console.log(interestingWords.every((word) => { 
	console.log("word: ", word, " length: ", word.length);
  return word.length > 5;
} ));

// Note: every stops iterating as soon
// as a false condition occurs

const moreWords =  ['unique', 'uncanny', 'longpique', 'oxymoron', 'guise'];

console.log(moreWords.every((word) => { 
	console.log("word: ", word, " length: ", word.length);
  return word.length > 5;
} ));

const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.map(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

console.log("longCities: ", longCities);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");

console.log('word: ', word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.reduce(num => num < 0);

/* Summary/Review:

.forEach() is used to execute the same code on every 
element in an array but does not change the array and 
returns undefined.
.map() executes the same code on every element in an 
array and returns a new array with the updated elements.
.filter() checks every element in an array to see if it 
meets certain criteria and returns a new array with the
elements that return truthy for the criteria.
.findIndex() returns the index of the first element of
 an array which satisfies a condition in the callback 
 function. It returns -1 if none of the elements in the
  array satisfies the condition.
.reduce() iterates through an array and takes the values
 of the elements and returns a single value.
All iterator methods takes a callback function that can
 be pre-defined, or a function expression, or an arrow
 function.
You can visit the Mozilla Developer Network to learn more about iterator methods (and all other parts of JavaScript!).

*/

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

const storyWords = story.split(' ');

const betterWords = storyWords.filter(word => {
  return (!unnecessaryWords.includes(word));
})


const foundOverUsed = betterWords.filter(word => {
  return (overusedWords.includes(word));
})

let countOfOverUsed = {};
// key is word, value is counter

for (thisWord of foundOverUsed){
  if (Object.keys(countOfOverUsed).includes(thisWord)){
    countOfOverUsed[thisWord]++;
  } else {
    countOfOverUsed[thisWord] = 1;
  }    
}

// find sentences

let sentenceCount = 0;

for (thisWord of storyWords){
  if ((thisWord[thisWord.length-1] == '!') ||
      (thisWord[thisWord.length-1] == '.') ||
      (thisWord[thisWord.length-1] == '?'))
    { sentenceCount++; }
}

console.log("word count: ", storyWords.length);
console.log("sentence count: ", sentenceCount);
console.log("Counts of Over Used Words: ");
console.log(countOfOverUsed);

let betterWordsString = betterWords.join(' ');
console.log(betterWordsString);

