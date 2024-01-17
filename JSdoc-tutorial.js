"use strict"


/**
 * This function will accept details about a person
 * and create an object for them.
 *
 * @param {string} name The persons full name
 * @param {number} age The persons age
 * @param {boolean} isDeveloper is the person a developer
 * @returns {object} The person object
 */
function createPerson(name, age, isDeveloper) {
    return {
        name: name,
        age: age,
        isDeveloper: isDeveloper
    }
}
//-----------------------------------------------------------------------
class Person {
    /**
     * creates a person
     *
     * @param name
     * @param age
     * @param isDeveloper
     */
    constructor(name, age, isDeveloper) {
        this.name = name;
        this.age = age;
        this.isDeveloper = isDeveloper;
    }
}
//---------------------------------------------------------------------
/**
 * Outputs details about a person
 *
 * @param {Person} person
 */

function printDetails(person) {
    console.log(`${person.name} is ${person.age} years old and is ${person.isDeveloper}`);
}
//-------------------------------------------------------------------
/**
 * Gives you numbers
 *
 * @returns {number[]}
 */
function getNumbers() {
    return [10, 15, 20, 30]
}

const numbers = getNumbers();

for (const n of numbers) {
    console.log(n)
}
//-------------------------------------------------------------------
