//filter selects elements based on a condition and  returns an array with teh elements that fulfilled the condition

const numbers = [78,87,97,12,59,90];
const selected = numbers.filter(p => p > 80);
console.log(selected);

const friends = ['Tom','John','Micheal', 'Oliver', 'Tim','Joshna'];
const oddFriends = friends.filter(friend => friend.length>4);
console.log(oddFriends);
