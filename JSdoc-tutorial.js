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
/**
 * Student name
 * @type {string}
 */
const studentName = 'John Doe'
//--------------------------------------------------------------------
/**
 * Number grades
 * @type {number[]}
 */
const grades = [90, 80, 70, 60, 50];
//---------------------------------------------------------------------
/**
 * Todo object
 * @type {{id: number|string, text: string}}
 */
const todo = {
    id: 1, //this can be a number or string
    text: 'Hello'
};
//---------------------------------------------------------------------
/**
 * calculate tax
 * @param {number} amount - total amount
 * @param {number} tax - tax percentage
 * @returns {string} - total with dollar sign
 */
const calcTax = (amount, tax) => {
    return `$${amount + tax * amount}`;
};
//---------------------------------------------------------------------------
/**
 * A student
 * @typedef {object} student
 * @property {number} id - student id
 * @property {string} name - student name
 * @property {string|number} [age] - student age (optional) [] mean optional
 * @property {boolean} isActive - student is active
 */

/**
 * @type {student}
 */
const student = {
    id: 1,
    name: 'John Doe',
    age: 20, //since age is optional we can delete it and not get an error
    isActive: true
};
//------------------------------------------------------------------------
/**
 * class to create a person object
 */
class classPerson {
    /**
     *
     * @param {object} personInfo Information about the person
     */
    constructor(personInfo) {
        /**
         * @property {string} name Persons name
         */
        this.name = personInfo.name;
        /**
         * @property {string|number} age Persons age
         */
        this.age = personInfo.age;
    }

    /**
     * @property {function} greet greeting with the name and age
     * @returns void
     */
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
    }
 }