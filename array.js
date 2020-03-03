var friendAge = [15, 17, 14, 16];
console.log(friendAge);
friendAge.splice(1,1);//remove content on index position 1
console.log(friendAge);

var friendAge = [15, 17, 14, 16];
console.log(friendAge);
friendAge.splice(0,2);//remove 2 content from index position 0
console.log(friendAge);

var friendAge = [15, 17, 14, 16];
console.log(friendAge);
friendAge.shift();//remove the first element
console.log(friendAge);

var friendAge = [15, 17, 14, 16];
console.log(friendAge);
friendAge.unshift();//add an element on 1st
console.log(friendAge);

var friendAge = [15, 17, 14, 16];
console.log(friendAge);
friendAge.splice(friendAge.indexOf(17), 1 );//find the index position and reomove one element
console.log(friendAge);