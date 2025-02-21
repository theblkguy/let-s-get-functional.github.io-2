// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io-2/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */


var maleCount = (array) => {
    var males = _.filter(array, function(customer){
        return customer.gender === 'male'
    });
    return males.length
}

var femaleCount = (array) => {
    var females = _.reduce(array, function(accumulator, current){
        if(current.gender === 'female'){
            accumulator += 1
        }
        return accumulator
    }, 0)
    return females
};

var oldestCustomer = (array) => {
    let oldest = _.reduce(array, function(accumulator, person){
        if(person.age > accumulator.age){
            accumulator = person.name
        }
        return accumulator
    })
    return oldest
};

var youngestCustomer  = (array) => {
    let youngest = _.reduce(array, function(accumulator, person){
        if(person.age < accumulator.age){
            accumulator = person
        }
        return accumulator
    })
    return youngest.name
};
;

var averageBalance = (array) => {
    let sum = _.reduce(array,function(acc, curr){
        let amount = curr.balance
        let newAmount = amount.replace(/[$,]/g, "")
        acc += Number(newAmount)
        return acc
    }, 0)
    return sum / array.length
};

var firstLetterCount = (arr, letter) => {
    let firstLet = arr.reduce((acc, curr) => {
        let newArr = [];
        newArr.push(curr.name.charAt(0))
        if(newArr.includes(letter.toUpperCase())){
            acc++
        }
        return acc
    }, 0)
    return firstLet
};

var friendFirstLetterCount = (arr, cust, lett) => {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i].name === cust){
            for(var j = 0; j < arr[i].friends.length; j++){
                newArr.push(arr[i].friends[j].name.charAt(0))
            }
        }
    }
    return newArr.reduce((acc, curr) => {
        if(curr === lett.toUpperCase()){
            acc++
        }
        return acc
    }, 0)
}

var friendsCount = function(array, name){
    const filtered = array.filter(function(customer){//At each customer
        return customer.friends.filter(function(friend){ //filter the friends list of each customer for this friend
            return friend.name === name //return the friend if the given name matches one in their friends list
        }).length // return length to make sure vlaue is truthy
    })
return filtered.map((customer) => {
    return customer.name
})
};

var topThreeTags = (arr) => {
    let tagArr = [];
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr[i].tags.length; j++){
            tagArr.push(arr[i].tags[j])
        }
        }
        let top3 = tagArr.reduce((acc, curr) =>{
            if(acc.hasOwnProperty(curr)){
                acc[curr] += 1
            } else {
                acc[curr] = 1
            }
            return acc
        }, {})
        let topArr = Object.entries(top3).sort(([,a], [,b]) => b - a).slice(0, 3).map((names) => {
            return names[0]
        })
        return topArr
    }



var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
