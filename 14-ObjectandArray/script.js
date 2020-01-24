const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

//copy
const team = players;
console.log(players, team);

team[3] = 'Lux';
//will reference the original array, not updating the variable;
// so just copy the array by slice

const team2 = players.slice();
team2[3] = 'Lux';
console.log(players. team2);

//or concat
const team3 = [].concat(players);

// or use ES6 spread
const team4 = [...players];
team4[3] = 'Lux';
console.log(players. team2);

//or
const team5 = Array.from(players);

//OBJECT using reference too
const person = {
    name: 'Bo Tebo',
    age: 25
}

//object assign not working with nested object
const cap = Object.assign({}, person, {number: 99});

//let's test Object srpread, and it is functioning. not working eith nested object too
const cap2 = {...person};
cap2.number = 99;

const bo = {
    name: 'Bo',
    age: 25,
    social:{
        twitter: '@bo',
        instagram: '@bo'
    }
}

const dev = {...bo};

//use JSON.parse instead, may effect performance
const dev2 = JSON.parse(JSON.stringify(bo));