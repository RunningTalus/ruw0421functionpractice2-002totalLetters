//http://winter2014.refactoru.com/exercises/problem-set/function-practice2

//Write a function called 'totalLetters' which takes an array of strings and returns the total number of letters in all strings.
//2a) totalLetters(['javascript', 'is', 'awesome']) should return 19

var stringTwoA = (['javascript', 'is', 'awesome'])
console.log("DISCOVER number of items in the array: " + Object.keys(stringTwoA));
var totalLetters = function(array){
	var itemZero = stringTwoA[0].length;
	console.log("DISCOVER the length of array item zero in stringTwoA: " + stringTwoA[0].length);
	var itemOne = stringTwoA[1].length;
	console.log("DISCOVER the length of array item one in stringTwoA: " + stringTwoA[1].length);
	var itemTwo = stringTwoA[2].length;
	console.log("DISCOVER the length of array item zero in stringTwoA: " + stringTwoA[2].length);
	var itemTotal = itemZero + itemOne + itemTwo;
	console.log("EXPECT length to equal nineteen: " + itemTotal);
	if(itemTotal === 19){
		console.log("EXPECT itemTotal === 19 as True")};
	//alert("totalLetters = " + itemTotal);
};
totalLetters(stringTwoA);

// 2b) totalLetters(['what', 'happened', 'to', 'my', 'function']) should return 24

var stringTwoB = (['what', 'happened', 'to', 'my', 'function']);
console.log("DISCOVER number of items in the array: " + Object.keys(stringTwoB));
var totalLetters = function(array){
var itemZero = stringTwoB[0].length;
	console.log("DISCOVER the length of array item zero in stringTwoB: " + stringTwoB[0].length);
	var itemOne = stringTwoB[1].length;
	console.log("DISCOVER the length of array item one in stringTwoB: " + stringTwoB[1].length);
	var itemTwo = stringTwoB[2].length;
	console.log("DISCOVER the length of array item two in stringTwoB: " + stringTwoB[2].length);
	var itemThree = stringTwoB[3].length;
	console.log("DISCOVER the length of array item three in stringTwoB: " + stringTwoB[3].length);
	var itemFour = stringTwoB[4].length;
	console.log("DISCOVER the length of array item four in stringTwoB: " + stringTwoB[4].length);
	var itemTotal = itemZero + itemOne + itemTwo + itemThree +itemFour;
	console.log("EXPECT length to equal twenty-four: " + itemTotal);	
	if (itemTotal === 24) {
		console.log("EXPECT itemTotal === 24 as True")};
};
totalLetters(stringTwoB);